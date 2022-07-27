import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom'

const PokemonDetails = () => {

    const { id } = useParams()

    const [data, setData] = useState('');

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + id).then(function(res){
            setData(res.data)
        })
    },[])

    const imgsource = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
    const gifsource = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"

  return (
    <div className='w-screen h-screen bg-primary flex items-center justify-center bg-opacity-90 overflow-hidden'>
        
        <div className='w-[400px] h-[700px] bg-primary drop-shadow-lg items-center justify-evenly  flex flex-col rounded-3xl z-30'>
            
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-4xl font-semibold capitalize text-white'>{data.name}</h1>
            </div>
            
            <div className='flex items-end'>
              <img src={imgsource + id + ".png"} className="h-72  object-contain object-center" />
              <img src={gifsource + id + ".gif"} className="h-12  object-contain object-center" />
            </div>

            {data.types && data.types ? (
              <>
                <div className='flex gap-4'>
                  <div className='bg-secondary px-4 py-2 rounded-full capitalize'>{data.types?.[0].type.name}</div>
                  {data.types?.[1] && data.types?.[1] ? (
                    <div className='bg-secondary px-4 py-2 rounded-full capitalize'>{data.types?.[1].type.name}</div>
                  ) : (<></>)}
                </div>
              </>
            ) : (<></>)}
            

            <div className='flex items-center justify-center mt-6'>
              <h1 className='text-2xl text-secondary'>ID:</h1>
              <h1 className='text-2xl font-semibold capitalize ml-2 text-white'>{data.id}</h1>
            </div>

            <div className='flex items-center justify-center mt-6'>
              <h1 className='text-2xl text-secondary'>Altura:</h1>
              <h1 className='text-2xl font-semibold capitalize ml-2 text-white'>{data.height} <span className='normal-case'>cm</span></h1>
            </div>

            <div className='flex items-center justify-center mt-6'>
              <h1 className='text-2xl text-secondary'>Peso:</h1>
              <h1 className='text-2xl font-semibold capitalize ml-2 text-white'>{data.weight} <span className='normal-case'>g</span></h1>
            </div>

            <Link to="/">
              <button className='bg-secondary px-12 py-3 rounded-lg text-xl font-semibold text-white'>VOLTAR</button>
            </Link>
        </div>
        <img src={imgsource + id + ".png"} className="h-[2000px] absolute z-10 blur-xl opacity-50" />
    </div>
  )
}

export default PokemonDetails