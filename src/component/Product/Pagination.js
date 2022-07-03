import React from 'react'

export default function Pagination(postsPerPage, totalPosts, paginate) {
  const PageNumber = [];

  for(let i =1; i<= Math.ceil(totalPosts / postsPerPage); i++){
    PageNumber.push(i);
  }
    return (
    <nav>
        <ul>
            {PageNumber.map(number =>(
                <li key={number} className=''>
                    <a onClick={()=> paginate(number)} href='!#' className=''>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}
