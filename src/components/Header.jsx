import React, { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header = () => {

    const [searchId, setSearchId] = useState('');

  return (
    <div className='bg-primary w-screen h-20 flex items-center justify-between p-12 drop-shadow-xl'>

            <Link to="/">
                <h1 className='text-yellow-400 font-semibold text-3xl'>Poke<span className='text-red-400'>dex</span></h1>
            </Link>

            <div className='flex items-center'>
                <input type="text" placeholder='Digite o ID do pokemon' value={searchId} onChange={(e) => setSearchId(e.target.value)} className='text-center px-6 py-2 rounded-l-full drop-shadow-xl' />

                <Link to={searchId !== '' ? '/details/' + searchId : '/'}>
                    <button className='bg-secondary p-2 rounded-r-full text-2xl text-white'> <MdSearch /> </button>
                </Link>
            </div>

            <h1 className='text-white font-semibold text-xl'>Entrar</h1>
    </div>
  )
}

export default Header