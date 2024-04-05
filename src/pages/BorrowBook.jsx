import React, { useState, useEffect } from 'react'
//bring axios
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
//import backbutton
import  BackButton  from '../components/BackButton';


const BorrowBook = () => {

//bring Book
const [book, setBook] = useState({});



    

  const navigate = useNavigate();
  const { id } = useParams();
const [borrow, setBorrow] = useState(null);



const [createForm, setCreateForm] = useState({
    bookId:id,
    
    studentName:"",
    studentId:"",
    studentMobile:"",
    studentEmail:"",
    requestedDays:0,
    
})

useEffect(() =>{


  axios.get(`https://bookstoremodified.onrender.com/books/${id}`)
  .then((response)=>{
  setBook(response.data);

  }).catch(error=>{
    console.log(error);

  });
  
  }, [])





  //functions
const handleChange = (e) => {
    const {name, value} = e.target;
    setCreateForm({...createForm, [name]:value});
}

//submit function
  const handleFormSubmit = (e)=>{
    e.preventDefault();
    console.log(createForm);
    console.log(id + book.title);
    setCreateForm({...createForm, bookId:id});
    console.log(createForm);

    

    //set Book Name
    // setCreateForm({...createForm, bookName: book.title});

    // console.log("form submit req hit");

    const res = axios.post('https://bookstoremodified.onrender.com/borrow', createForm).then(
      (res)=>{
// console.log("Borrow Request Added", res);
navigate('/');
      }
    ).catch(
      (err)=>{
        console.log(err);
      }
    
    )

  }




  return (
    <div>
     <div className='bold ms-5 mt-5'> <BackButton /></div>
      <div className='container mx-auto max-w-90vw sm:max-w-80vw md:max-w-lg lg:max-w-lg'>
      <h1 className='text-3xl font-semibold text-center my-5'>Borrow Book Request</h1>
      
      <div className='flex flex-col gap-6 mb-60'>

<div>
<label htmlFor="bookId" className='text-lg block'>Book Name</label>
<p className='block border border-slate-300 rounded-md p-1 mt-2 w-full'>{book.title}</p>
{/* <input type="text" name='bookId' 
value={createForm.bookId}  onChange={handleChange}

className='block border border-slate-300 rounded-md p-1 mt-2 w-full'/> */}
</div>



{/* <div>
<label htmlFor="bookId" className='text-lg block'>Book Id</label>
<input type="text" name='bookId'
value={createForm.bookId} onChange={handleChange}
className='block border border-slate-300 rounded-md p-1 mt-2 w-full' 
/>
</div> */}


<div>
<label htmlFor="studentName" className='block'>Student Name</label>
<input type="text" name='studentName'
value={createForm.studentName} onChange={handleChange}
className='block border border-slate-300 rounded-md p-1 mt-2 w-full'/>
</div>


<div>
<label htmlFor="studentId"className='block'>Student Id</label>
<input type="text" name='studentId' 
value={createForm.studentId} onChange={handleChange}
className='block border border-slate-300 rounded-md p-1 mt-2 w-full'/>
</div>


<div>
<label htmlFor="studentMobile" className='block'>Contact Number</label>
<input type="text" name='studentMobile'
value={createForm.studentMobile} onChange={handleChange}
className='block border border-slate-300 rounded-md p-1 mt-2 w-full'/>
</div>

<div>
<label htmlFor="studentEmail"className='block'>Email</label>
<input type="email" name='studentEmail'
value={createForm.studentEmail} onChange={handleChange}
className='block border border-slate-300 rounded-md p-1 mt-2 w-full'/>
</div>




<div>
<label htmlFor="requestedDays" className='block'>Requested Days</label>
<input type="number" name='requestedDays'
value={createForm.requestedDays} onChange={handleChange}
className='block border border-slate-300 rounded-md p-1 mt-2 w-full'/>
</div>








<button type='submit' onClick={handleFormSubmit} className='py-1 px-3 bg-green-700 shadow-2xl text-white rounded-md font-semibold text-md w-44'>Request To Borrow</button>
      </div>
      </div>

    </div>
  )
}

export default BorrowBook
