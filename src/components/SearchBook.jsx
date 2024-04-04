import React, { useState } from "react";

const SearchBook = (props) => {
    const [search, setSearch]=useState("");

   const searchAndShow = () =>{

    props.setBooks(props.preSearchResetBooks)
    console.log(props.preSearchResetBooks, props.books);
const matchingBooks = props.books.filter(book => book.title.includes(search)||book.author.includes(search));

console.log(props, matchingBooks);

props.setBooks(matchingBooks);

    }
  return (
    <div>
      <div className="text-center lg:text-end">
        <input type="text" 
        name="search" id="search"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="border border-green-600 bg-green-100 rounded-md py-2 ps-4 me-2" placeholder="ইসলামী আকিদা" />
        <button className="bg-green-600 px-3 py-2 rounded-md hover:bg-green-500 hover:scale-105" onClick={searchAndShow}>Search</button>
      </div>
    </div>
  );
};

export default SearchBook;
