import React, { useEffect } from 'react'
import { Link } from 'react-router';
import { useBookStore } from '../store/bookStore';

const BookList = () => {

  const {books, fetchBooks} = useBookStore();

  useEffect(()=>{
    fetchBooks();
  }, [fetchBooks])
  return (
    <div className="text-[#252422] bg-[#F5F5F5] px-4 md:px-12 pb-20">
      <h1 className="py-6 text-xl md:text-2xl lg:text-3xl w-full mx-auto max-w-6xl">Reader&rsquo;s favorites</h1>

      <div className="flex fkex-wrap justify-center gap-5 lg:gap-8 max-w-6xl mx-auto">
        {books.map((booke, index) => (
          <Link key={index} to={`/book/${booke._id}`} className="block">
            <div className="cursor-pointer w-36 md:w-40 xl:w-44 shadow-sm hover:shadow-md rounded-b-md">
                <div className="h-48 md:h-52 xl:h-60 bg-gray-900">
                  <img src={booke.image} alt="book_img" className="w-full h-full object-cover object-center"/>
                </div>

                <div className="p-2">
                  <h2 className="mb-2 font-semibold text-base md:text-lg">{booke.title}</h2>
                  <p className="text-sm md:text-base">{booke.author}</p>
                </div>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  )
}

export default BookList
