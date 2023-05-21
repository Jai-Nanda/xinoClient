import React from 'react'
import { getMatches } from '../api/Score2'
import { useEffect, useState } from 'react'
import More from './More'
import { Link } from 'react-router-dom'
export default function Analytics() {
  const [match, setMatch] = useState()
  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatch(data);
      })
      .catch((error) => {
        alert('Could not load data');
      });
  }, []);
    
  return (
    <>
    <div className='bg-primary-color text-white'>
    <div className='max-w-6xl m-auto'>
        <div>
        {match && match.map((match) => (<More matchDetails={match} />))}
        </div>
        <div className='flex justify-between items-center'>
          <Link to="/analytics" className="mt-5 font-bold text-xl text-center text-sec-color mb-10">Go back</Link>
        </div>
    </div>
    </div>
    </>
  )
}