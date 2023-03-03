import React from 'react'
import { UseGlobalContext } from './Context';

const Search = () => {
  const {query, searchPost}  =UseGlobalContext();
  return (
    <>
   <div className="heading">
        <h1 className="heading__title">Tech News On the Go </h1>
        <p className="heading__credits">
          <a className="heading__link">Design by Brijesh Verma</a>
        </p>
    <form action="">
      <input type="text" className='SearchBox' placeholder='Search Here' value={query} onChange={(e)=>searchPost(e.target.value)}/>
    </form>
      </div>
    </>
  )
}

export default Search;