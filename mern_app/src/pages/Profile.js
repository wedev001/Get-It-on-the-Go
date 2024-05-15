import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import {  Link, useNavigate } from 'react-router-dom'
import { setUserDetails } from '../store/userSlice';

const Profile = () => {
  const [CurrUsers, setCurrUsers] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const CurrentUser = async() => {const fetchData = await fetch(SummaryApi.Logged.url,{
       method : SummaryApi.Logged.method,
       credentials :'include'
    })
    const dataReponse = await fetchData.json()
    if(dataReponse.success){
      setCurrUsers(dataReponse.data);
    }

    if(dataReponse.error){
     toast.error(dataReponse.message)
    }
  }

  useEffect(()=>{
    CurrentUser()
  },[]);


  
  const handleLogout = async() => {
    const fetchData = await fetch(SummaryApi.logout_user.url,{
      method : SummaryApi.logout_user.method,
      credentials : 'include'
    })
    

    const data = await fetchData.json()

    if(data.success){
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }

    if(data.error){
      toast.error(data.message)
    }

  }

  return (
    <div className="max-w-md mx-auto p-2 pt-6 md:p-6 lg:p-12 Profile rounded-xl shadow-md">
      <div className="flex justify-center mb-4">
        <img
          src={CurrUsers?.ProfilePic}
          alt="Profile Image"
          className="w-22 h-22 rounded-full  shadow-md object-cover"
        />
      </div>
      <label className='text-xl'>Name:</label>
      <h1 className="text-3xl font-bold">{CurrUsers?.name}</h1>
      <br></br>
      <label className='text-xl'>Email:</label>
      <p className="text-lg">{CurrUsers?.email}</p>
      <br></br>
      <label className='text-xl'>Role:</label>
      <p className="text-lg">{CurrUsers?.role}</p>
      <div className="flex justify-between mt-4">
        <Link
        to={'/admin-panel'}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Admin Panel
        </Link>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Profile