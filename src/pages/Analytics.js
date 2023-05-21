import React from 'react'
import { getMatches } from '../api/Score'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Table from '../components/Table'
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
        {match && match.map((match) => (<Card matchDetails={match} />))}
        </div>
        <div className='flex justify-between items-center'>
          <Table/>
        </div>
    </div>
    </div>
    </>
  )
}