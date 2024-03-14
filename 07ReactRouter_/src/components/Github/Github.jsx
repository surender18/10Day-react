import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/surender18')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <>
      <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Followers : {data.followers}
      <br />
      

      <img  src={data.avatar_url} alt="Profile pic" width={300}  />
      <br />Follow Kr skte ho Agr <br />Chai Ready h to 
      </div>
    </>
  )
}

export default Github

export const githubinfo=async()=>{
    const response = await fetch('https://api.github.com/users/surender18')
    return response.json()

}