import React, { useEffect } from 'react'
import { useState} from 'react'

export const Github = () => {
    const[data,setData]=useState([])
    useEffect(()=>
{
 fetch('https:api.github.com/users/Nikita0728')
 .then(response=>response.json())
 .then(data=>{
    console.log(data);
    setData(data)
 })
},[])
  return (
    <div className='text-center bg-gray-500 font-bold m-6 p-6'>
        Github followers :{data.followers}
        <img src={data.avatar_url} alt='git pic'/>
    </div>
  )
}
