import { useSession } from "next-auth/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../pages/api/auth/[...nextauth]";

const useUser = () => {
  const session = useSession();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (session.data?.user) {
      const fetchUser = async () => {
        setLoading(true);

        const user = session.data.user as User;

        try {
          const response = await axios.post("/api/get-user", {
            userId: user.id,
          });

          setUser({
            ...user,
            nfts: response.data.nfts,
            walletPda: response.data.walletPda,
          });
        } catch (error) {
          console.log(error);
        }

        setLoading(false);
      };
      fetchUser();
    }
  }, [session]);

  return { user, loading };
};

export default useUser;
