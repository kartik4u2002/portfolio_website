import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='w-screen h-[30vw] bg-white flex justify-between gap-2 p-10'>
      {/* Link for Project 1 */}
      <Link to="/" className='bg-slate-600 w-1/2 rounded-lg flex justify-center items-center'>
        <h2 className='-translate-x-[50%] -translate-y-[50%]'>Project 1</h2>
      </Link>
      {/* Anchor tag for Project 2 */}
      <a href="https://kartik4u2002.github.io/instalike/" target="_blank" className='bg-slate-600 w-1/2 rounded-lg flex justify-center items-center'>
        <h2 className='-translate-x-[50%] -translate-y-[50%]'>Project 2</h2>
      </a>
    </div>
  );
}

export default Cards;
