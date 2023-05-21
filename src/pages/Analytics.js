import React from 'react'
import { getMatches } from '../api/Score'
import { useEffect } from 'react'
import Card from '../components/Card'
export default function Analytics() {
    useEffect(() => {
        getMatches().then((data)=>console.log(data)).catch((error) => alert('could not load data'))
    }, [])
    
  return (
    <div>
      <Card></Card>
    </div>
  )
}
