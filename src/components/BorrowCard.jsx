import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {FaEnvelope, FaEdit, FaPhone, FaBook, FaClock, FaIdBadge} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const BorrowCard = (props) => {

  const navigate =useNavigate();
  const borrowId = props.borrowId;

  const approve = true;
const requestArray = [
props.studentName,
props.bookName,
props.studentId,
props.studentEmail,
props.studentMobile,
props.requestedDays,
approve
  ];

  const setApproveAccepted = () => {
   requestArray[6] = true;
  
   axios.post("https://bookstoremodified.onrender.com/nodemailer", requestArray).then(
   
   ).catch(err=>{
    console.log(err);
   })

   axios.delete(`https://bookstoremodified.onrender.com/admin/borrow/request/${borrowId}`).then(()=>{
    alert('Request Accepted and deleted')
    props.updateData();

   }).catch(err=>{
    console.log(err);
   });
   
  }

  const setApproveRejected = () => {
    requestArray[6] = false;
  
    axios.post("https://bookstoremodified.onrender.com/nodemailer", requestArray).then(
     ).catch(err=>{
      console.log(err);
     })

    //  console.log(borrowid);
     axios.delete(`https://bookstoremodified.onrender.com/admin/borrow/request/${borrowId}`).then(()=>{
      alert('Request rejected and deleted')
      props.updateData();

     }).catch(err=>{
      console.log(err);
     });


  }



  return (
    <div>
      <div className='card border border-green-600 rounded-3xl flex flex-col gap-3 px-10 py-5'>
        <h1 className='text-2xl font-semibold flex gap-1'><FaBook className='mt-2'/>: {props.bookName}</h1>
        <div className='flex flex-col gap-2'>
            <p className='flex gap-1'><FaEdit className='mt-2'/>: {props.studentName}</p>
            <p className='flex gap-1'><FaIdBadge className='mt-2'/>: {props.studentId}</p>
            <p className='flex gap-1'><FaEnvelope className='mt-2'/>: {props.studentEmail}</p>
            <p className='flex gap-1'><FaPhone className='mt-2'/>: {props.studentMobile}</p>
            <p className='flex gap-1'><FaClock className='mt-2'/>: {props.requestedDays+" Days"}</p>
        </div>
        <div className='flex justify-between pt-4 pb-3 '>
          <button onClick={setApproveAccepted}  className='bg-green-400 rounded-md hover:rotate-3 px-3'>Accept</button>
          <button  onClick={setApproveRejected}    className='bg-red-400 rounded-md hover:rotate-3 px-3'>Reject</button>
        </div>

      </div>
    </div>
  )
}

export default BorrowCard
