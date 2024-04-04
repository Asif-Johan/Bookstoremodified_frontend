import axios  from 'axios'
import React, { useState } from 'react'

import BackButton from '../components/BackButton'
import Spinner from '../components/spinner'

import { useNavigate, useParams } from 'react-router-dom'

const deleteBook = ({isAdmin}) => {
  console.log("Delete",isAdmin);

  const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const {id} = useParams();


const handleDeleteBook = () => {
  setLoading(true);
  axios.delete(`http://localhost:5555/books/${id}`)
  .then(()=>{
    setLoading(false);
    alert('Book Deleted Successfully');
    navigate('/');
  }).catch((error)=>{
    setLoading(false);
    alert('An Error is noticed. check console')
    isAdmin?console.log(error):"Error, False Request";
  })
}




  return (
    <div className='p-4'>
      
<BackButton></BackButton>
<h1 className='text-2xl font-bold'>Delete Book</h1>

{loading ? (<Spinner/>) : ('')
}

<h3 className='text-xl font-bold'>Are you sure you want to delete this book?</h3>
<button onClick={handleDeleteBook} className='bg-red-500 px-4 py-2 rounded-md text-white'>Delete Book</button>


    </div>
  )
}

export default deleteBook
