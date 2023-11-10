"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import { HiOutlineTrash, HiPencilAlt } from 'react-icons/hi'

const RemoveBtn = async({id}) => {
  const router=useRouter()
  const removeTopic= async()=>{

    const confirmed=confirm("Are u sure?");

    if(confirmed){
      const res=await fetch(`http://localhost:3000/api/topics?id=${id}`,{
        method:"DELETE",
      })

      if(res.ok){
        router.refresh();
      }
    }
  }
  return (
    <button 
    onClick={removeTopic}
    className='text-red-600'>
        <HiOutlineTrash size={26} />
    </button>
  )
}

export default RemoveBtn