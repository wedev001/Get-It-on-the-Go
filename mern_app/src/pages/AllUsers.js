import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import moment from 'moment'
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([])
  const [openUpdateRole,setOpenUpdateUser] = useState(false)
  const [updateUserDetails,setUpdateUserDetails] = useState({
    email : "",
    name : "",
    role : "",
    _id : ""
})

  const fetchAllUsers = async() => {
    const fetchData = await fetch(SummaryApi.allUser.url,{
       method : SummaryApi.allUser.method,
       credentials :'include'
    })

    const dataReponse = await fetchData.json()
    if(dataReponse.success){
     setAllUsers(dataReponse.data);
    }

    if(dataReponse.error){
     toast.error(dataReponse.message)
    }

  }
   useEffect(()=>{
      fetchAllUsers()
   },[]);
  return (
    <div>
      <table className='w-full userTable'>
         <thead>
            <tr className='bg-black text-white'>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created Date</th>
            <th>Action</th>
            </tr>
         </thead>
         <tbody>
            {
               allUsers.map((user, index) => (
                 <tr key={user._id}>
                   <td>{index + 1}</td>
                   <td>{user.name}</td>
                   <td>{user.email}</td>
                   <td>{user.role}</td>
                   <td>{moment(user.createdAt).format('ll')}</td>
                   <td>
                     <button className='bg-green-300 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white' 
                     onClick={(el)=>{
                        setUpdateUserDetails(user)
                        setOpenUpdateUser(true)
                        }}>
                     <MdModeEdit />
                     </button>
                   </td>
                 </tr>
               ))
            }
         </tbody>
      </table>
      {
        openUpdateRole && (
         <ChangeUserRole onClose={()=>setOpenUpdateUser(false)}
         name={updateUserDetails.name}
         email={updateUserDetails.email}
         role={updateUserDetails.role}
         userId={updateUserDetails._id}
         callFunc={fetchAllUsers}/>
    
        )
      }
    </div>
  )
}

export default AllUsers;