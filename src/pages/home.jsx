import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import SearchBook from "../components/SearchBook";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import AdminLogin from "./AdminLogin";

const Home = ({ isAdmin }) => {
  console.log(isAdmin);

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //to reset books before search
const [preSearchResetBooks, setpreSearchResetBooks] = useState();

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(30);



  const isLoggedAdmin = isAdmin;
  // You can replace this with your logic to determine if the user is an admin

  useEffect((e) => {
    
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("https://bookstoremodified.onrender.com/books");
        setBooks(response.data.data);
        setpreSearchResetBooks(response.data.data);
      } catch (err) {
        console.error(err);
        setError(err.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const lastBookIndex = currentPage* booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBooks = books.slice(firstBookIndex, lastBookIndex);
  const totalPageNumbers = Math.ceil((books.length)/(booksPerPage));

  const pageNumbers = [];

  for (let i = 1; i <= totalPageNumbers; i++) {
    pageNumbers.push(i);
  }


  return (
    <div className="container mx-auto">

      
{


isLoggedAdmin && (
          <div className="flex gap-12">
            <Link to={"/books/create"} className="flex gap-1">
              <MdOutlineAddBox className="mt-1 pt-1 text-blue-400" />
              <p>Add Book</p>
            </Link>

            <Link to={"/borrow/requests"} className="flex gap-1">
              <p>All Borrow Request</p>
            </Link>
          </div>
        )}

<SearchBook books={books} currentBooks={currentBooks} currentPage={currentPage}
setBooks={setBooks} preSearchResetBooks={preSearchResetBooks}/>

      <div className="flex justify-between pt-5 text-3xl pb-5 w-[90vw] mx-auto">
        <h1 className="mx-auto bg-green-50 rounded-2xl px-5 text-green-600 font-semibold border border-green-600 shadow-lg shadow-green-200 mb-4">Books</h1>

        

      </div>

      {loading && <p>Loading books...</p>}
      {error && <p>Error: {error}</p>}
      {books.length > 0 && ( <div>





{/* Table Starts */}


        <table className="table-auto sm:w-[70vw] lg:w-[90vw] mx-auto">
          <thead>
            <tr>
              <th className="px-2 py-1">No.</th>
              <th className="px-2 py-1">Title</th>
              <th className="px-2 py-1">Author</th>
              {/* Publish Year */}
              <th className="px-2 py-1">Pages</th>
              <th className="px-2 py-1">Operations</th>
            </tr>
          </thead>
          <tbody>
            {currentBooks.map((book, index) => (
              <tr key={book._id} className="h-8 border border-gray-200">
                <td className="px-2 py-1">{index + 1+ firstBookIndex}</td>
                <td className="px-2 py-1">{book.title}</td>
                <td className="px-2 py-1">{book.author}</td>
                <td className="px-2 py-1">{book.pageNumber}</td>
                <td className="px-5 py-1 flex justify-center gap-3">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-blue-400 text-2xl" />
                  </Link>

                  {/* Borrow */}
                  {!isLoggedAdmin && (
                    <div>
                      <Link to={`/books/borrow/${book._id}`}>
                        <p className="bg-green-200 rounded-md px-2 shadow-lg shadow-green-200 ">
                          Borrow
                        </p>
                      </Link>
                    </div>
                  )}

                  {isLoggedAdmin && (
                    <>
                      <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className="text-green-400 text-2xl" />
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="text-red-400 text-2xl" />
                      </Link>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        

{/* Table Ends */}















        </div>
      )}
      
   {/* add page numbers */}
   {pageNumbers.length > 0 && (
        <div className="flex justify-center mt-5">
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={`px-2 py-1 ${
                currentPage === number ? "bg-green-600" : "bg-green-200"
              }`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          ))}
        </div>
      )}    



      {books.length === 0 && !loading && <p>No books found.</p>}
      

      {isLoggedAdmin ? (
        <div className="mt-96 text-center">
          <h3
            className="cursor-pointer"
            onClick={() => {
              window.location.reload();
            }}
          >
            Logout From Admin
          </h3>
        </div>
      ) : (
        <div className="mt-96 text-center">
          <Link to={"/admin/login"}>
            <h3 className=" cursor-pointer">Login as admin</h3>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
