import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Header from './Header';

const PokemonList = () => {

    const [pokemons, setPokemons] = useState('');
    const [next, setNext] = useState('');
    const [previous, setPrevious] = useState('');
    const [pag, setPag] = useState(1);

    const imgsource = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(function(res){
            setPokemons(res.data.results)
            if(res.data.next !== null){
                setNext(res.data.next)
            }
            if(res.data.previous !== null){
                setPrevious(res.data.previous)
            }
        })
    },[])

    const nextRequest = () => {
        axios.get(next).then(function(res){
            setPokemons(res.data.results)
            setPag(pag + 1)
            if(res.data.next !== null){
                setNext(res.data.next)
            }
            if(res.data.previous !== null){
                setPrevious(res.data.previous)
            } else {
                setPrevious('')
            }
        })
    }

    const previousRequest = () => {
        axios.get(previous).then(function(res){
            setPokemons(res.data.results)
            setPag(pag - 1)
            if(res.data.next !== null){
                setNext(res.data.next)
            }
            if(res.data.previous !== null){
                setPrevious(res.data.previous)
            } else {
                setPrevious('')
            }
        })
    }

  return (
    <div className='h-screen w-screen bg-secondary overflow-x-hidden'>

        <Header />

        <div className='flex items-center justify-evenly h-20'>
            {previous !== '' ? (
                <button onClick={previousRequest} className='px-12 py-2 rounded-full text-white bg-primary'>Anterior</button>
                ) : (<button onClick={previousRequest} className='px-12 py-2 rounded-full text-transparent bg-secondary'>Proximo</button>
            )}

            <h1 className='text-white text-2xl font-semibold'>{pag} de 59</h1>
            
            <button onClick={nextRequest} className='px-12 py-2 rounded-full bg-primary text-white'>Proximo</button>
        </div>

        <div className='flex items-center justify-center'>
            <div className='h-screen w-screen bg-primary rounded-t-2xl p-12 grid grid-rows-5 grid-flow-col gap-12 items-center justify-between bg-opacity-80 bg-clip-padding' style={{backdropFilter: blur(20)}}>
                {pokemons && pokemons.map(item => (
                    <div key={item.name} className='h-32 w-62 bg-primary rounded-xl flex items-center justify-center mb-6 capitalize drop-shadow-lg p-6 bg-opacity-90'>
                        <img src={imgsource + item.url.slice(34, -1) + ".gif"} className='w-16 object-cover object-center' />
                        
                        <div className='flex flex-col ml-4 items-center'>
                            <h1 className='text-white font-semibold text-2xl'>{item.name} <span className='font-normal text-lg'>#{item.url.slice(34, -1)}</span></h1>
                            
                            <Link to={'/details/' + item.url.slice(34, -1)}>
                                <button className='border-2 border-secondary px-2 hover:p-2 rounded-lg text-white bg-secondary mt-2 drop-shadow-lg transition-all duration-300 font-semibold'>Ver mais</button>
                            </Link>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    </div> 
  )
}

export default PokemonList