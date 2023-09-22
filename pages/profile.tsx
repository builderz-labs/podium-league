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
      <div className="mt-0 flex h-auto w-full flex-col items-center justify-start md:-mt-10">
      <section className="container  relative flex h-auto flex-col items-center justify-start rounded-md bg-bg-light">
        <div className="-mt-12">
          <p className=" rowdies-400 font-outline-2 text-[70px] font-black text-[#55CBCD]">
            PROFILE
          </p>
        </div>

        <div className='w-[60%] flex my-[30px]'>
          <div className='flex items-center justify-center w-[120px] rounded-[16px] bg-[#f6eac2] border border-black h-[64px]'>
            245
          </div>
          <div className='flex flex-col h-[60px] justify-between ml-[17px]'>
            <p className='font-[700] text-[20px]'>Brandon</p>
            <p className='text-[20px] font-[400]'>12 Points</p>
          </div>
        </div>

      <div className='flex justify-between items-center w-[60%]'>
      <p className='font-[400] text-[20px]'>Minted Podiums</p>
      <button className='w-[115px] h-[40px] border border-black bg-white rounded-[8px] color-[#282828]'>View All</button>
      </div>
      <div className="grid grid-cols-2 gap-4 w-[60%] mt-[20px] mb-[50px]">
      <div className='px-[20px] w-[100%] h-[60px] rounded-[16px] border border-black flex justify-between items-center'>
        <p>Qatar Airways Emilia Romagna GP</p>
        <p>View NFT</p>
      </div>
      <div className='px-[20px] w-[100%] h-[60px] rounded-[16px] border border-black flex justify-between items-center'>
        <p>Qatar Airways Emilia Romagna GP</p>
        <p>View NFT</p>
      </div>
      <div className='px-[20px] w-[100%] h-[60px] rounded-[16px] border border-black flex justify-between items-center'>
        <p>Gulf Air Bahrain GP</p>
        <p>View NFT</p>
      </div>
      <div className='px-[20px] w-[100%] h-[60px] rounded-[16px] border border-black flex justify-between items-center'>
        <p>Gulf Air Bahrain GP</p>
        <p>View NFT</p>
      </div>
</div>
      </section>
    </div>
    </div>
  )
}

export default Profile
