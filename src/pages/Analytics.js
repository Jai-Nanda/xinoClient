import React from 'react'
import { getMatches } from '../api/Score'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Table from '../components/Table'
import karan from '../images/karan.jpg'
import team from '../images/team.png'
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
    <div className='bg-primary-color text-white '>
    <div className='max-w-6xl m-auto'>
        <div>
        {match && match.map((match) => (<Card matchDetails={match} />))}
        </div>
        <div className='flex justify-between items-center'>
          <Table/>
          <div className='bg-white h-[450px] mb-10 mt-10 w-[600px] rounded-lg text-primary-color'>
            <div className='flex  justify-around items-center pt-5'>
              <img src={team} alt="" />
            <h1 className='font-bold text-2xl'>LUCKNOW SUPER GIANTS</h1>
            </div>
            <div className='flex justify-between mx-5 pt-5 items-center'>
              <div className='flex flex-col justify-center items-center'>
                <p>Karan Sharma</p>
                <p>Quinton De Kock</p>
                <p> Prerak Mankad</p>
                <p>Marcus Stoinis</p>
                <p>Krunal Pandya</p>
                <p>Ayush Badoni</p>
                <p>Nicholas Pooran</p>
                <p>Krishnappa Gowtham</p>
                <p>Ravi Bishnoi</p>
                <p>Naveen-ul-Haq</p>
                <p>Mohsin Khan</p>
              </div>
              <div className='flex flex-col justify-center items-center '>
              <div className='flex flex-col justify-center items-center'>
                <img src={karan} alt="" className='rounded-full w-32 h-32 object-cover '/>
                <h1 className='font-bold text-lg pt-2'>Karan Sharma</h1>
                <p>All Rounder</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
              <div className='flex justify-between items-center pt-2'>
                <p>RUNS <b className='text-[#6333D7] mr-5'>12</b></p>
                <p>Matches  <b className='text-[#6333D7] mr-5'>2</b></p>
              </div>
              <div className='flex justify-between items-center'>
                <p className=''>Avg Runs <b className='text-[#6333D7] mr-5'>6</b></p>
                <p className='mr-10'>Inss  <b className='text-[#6333D7] mr-5'>2</b></p>
              </div>
              <div className='flex justify-between items-center pt-2'>
                <p>100s  <b className='text-[#6333D7] mr-5'>0</b></p>
                <p className='mr-10'>4s  <b className='text-[#6333D7] mr-5'>0</b></p>
              </div>
              <div className='flex justify-between items-center'>
                <p>50s <b className='text-[#6333D7] mr-5'>0</b></p>
                <p className='mr-10'>6s  <b className='text-[#6333D7] mr-5'>0</b></p>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}