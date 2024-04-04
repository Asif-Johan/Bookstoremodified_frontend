import React, { useState } from 'react'

import BackButton from '../components/BackButton'

import Spinner from '../components/spinner'

import axios from 'axios'

import { useNavigate } from 'react-router-dom'



const CreateBook = ({isAdmin}) => {
  console.log("Create", isAdmin);


const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const [pageNumber, setPageNumber] = useState('');
const [loading, setLoading] = useState(false);
const navigate = useNavigate();


const handleSaveBook = () => {

const data = {
  title,
  author,
  pageNumber,
};

setLoading(true);


axios.post('http://localhost:5555/books', data).then(()=>{
setLoading(false);
navigate('/');
}).catch((error)=>{
  setLoading(false);
  alert('An Error is noticed. check console')
isAdmin?console.log(error):"Error, False Request";
})

}


  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Create Book</h1>

      {loading ? (<Spinner/>) : (' ')}

      <div className='flex flex-col border-2 bg-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
<div className='my4
'>

<label className='text-xl mr-4'>Title</label>

<input type="text" value={title} 
onChange={(e)=>setTitle(e.target.value)} className='border-2 px-4 py-2 w-full' />

</div>



<div className='my4
'>

<label className='text-xl mr-4'>Author</label>

<input type="text" value={author} 
onChange={(e)=>setAuthor(e.target.value)} className='border-2 px-4 py-2 w-full' />
</div>



<div className='my4
'>
  
{/* Publish Year */}
<label className='text-xl mr-4'>Page Number</label> 


<input type="text" value={pageNumber} 
onChange={(e)=>setPageNumber(e.target.value)} className='border-2 px-4 py-2 w-full' />

</div>

<button className='p-2 bg-sky-400' onClick={handleSaveBook}>Save</button>

      </div>

    </div>
  )
}

export default CreateBook
