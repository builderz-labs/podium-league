import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useUser from '../hooks/useUser'

const Profile = () => {
  const router = useRouter()
  const user = useUser();

  console.log(user.user);

  useEffect(() => {
    // Fetch user data here and set it to user state
  }, [])

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <button onClick={() => router.push('/')}>Go back</button>
    </div>
  )
}

export default Profile
