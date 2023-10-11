import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  nfts: any[];
  walletPda: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
    TwitterProvider({
      clientId: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.id_str,
          name: profile.name,
          email: profile.email,
          image: profile.profile_image_url_https.replace("_normal", ""),
        };
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET!,
  callbacks: {
    async signIn({ user }) {
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as User;
      console.log("Session", session);

      return session;
    },
  },
};

export default NextAuth(authOptions);
