import React from 'react'
import { UseGlobalContext } from './Context';

const Pagination = () => {
  const {page, nbPages, getNextPage, getPreviousPage} = UseGlobalContext();
  return (

    <div className='pagination'>
      <button onClick={()=>getPreviousPage()}  className="button-85" role="button">Prev</button>
      <p className='Page' ><strong>{page+1}   of {nbPages}</strong></p>
      <button onClick={()=>getNextPage()} className="button-85" role="button">Next</button>
    </div>
  )
}

export default Pagination;