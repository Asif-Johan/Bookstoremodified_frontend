import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { useParams } from 'react-router-dom'
 import BackButton from '../components/BackButton'

 import Spinner from '../components/spinner'

const showBook = () => {

const [book, setBook] = useState({});
const [loading, setLoading] = useState(false);
const { id } = useParams();

useEffect(() =>{
setLoading(true);
axios.get(`http://localhost:5555/books/${id}`)
.then((response)=>{
setBook(response.data);
setLoading(false);
}).catch(error=>{
  console.log(error);
  setLoading(false);
});

}, [])

  return (
    <div className='p-4'>
      <BackButton></BackButton>
      <h1 className='text-3xl my-4'>Show Book</h1>


{
loading? (<Spinner/>) : (

<div className='felx flex-col border-2 border-sky-400 w-fit rounded-xl p-4'>

<div className='my-4'>
<span className='text-xl mr-4 text-black'>Book Id</span>
<span>{book._id}</span>
</div>
<div className='my-4'>
<span className='text-xl mr-4 text-black'>Title</span>
<span>{book.title}</span>
</div>
<div className='my-4'>
<span className='text-xl mr-4 text-black'>Author</span>
<span>{book.author}</span>
</div>
<div className='my-4'>
<span className='text-xl mr-4 text-black'>Page Number</span>
<span>{book.pageNumber}</span>
</div>
<div className='my-4'>
<span className='text-xl mr-4 text-black'>Upload Date</span>
<span>{new Date(book.createdAt).toString()}</span>
</div>
<div className='my-4'>
<span className='text-xl mr-4 text-black'>LAst Update</span>
<span>{new Date(book.updatedAt).toString()}</span>
</div>

</div>


)

  
}


    </div>
  )
}

export default showBook
