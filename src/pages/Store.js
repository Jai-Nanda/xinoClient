import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../components/Hey'
import img1 from '../images/image 22.png'
export default function Store() {
  return (
    <div className='bg-primary-color text-white'>
      <div className="flex justify-between items-center max-w-7xl m-auto">
      <h1 className='text-5xl text-sec-color tracking-wider font-bold uppercase my-10'>new arrivals</h1>
      </div>
      <div className="max-w-7xl m-auto flex justify-between items-center mb-20">
        <Card  title="Redesigned Jersey" gender="Men's TShirt" price="$29" avatar="/image 26.png"/>
        <Card  title="Redesigned Jersey" gender="Men's TShirt" price="$29" avatar="/image 22.png"/>
        <Card  title="Redesigned Jersey" gender="Men's TShirt" price="$29" avatar="/image 23.png"/>
        <Card  title="Redesigned Jersey" gender="Men's TShirt" price="$29" avatar="/image 24.png"/>
      </div>
      <div className="flex justify-between items-center max-w-7xl m-auto">
      <h1 className='text-5xl text-sec-color tracking-wider font-bold uppercase my-10'>Men’s Jersey</h1>
      <div className="flex justify-center items-center">
      <Link className="underline font-medium  text-xl text-sec-color" href={"/seeStore"}>SEE MORE</Link>
      <Link href={"/seeStore"}>
      <div className="ml-5 w-7 h-7 bg-gray-300 rounded-full flex justify-center items-center">
      </div>
      </Link>
     
      </div>
      </div>

      <div className="max-w-7xl m-auto flex justify-between items-center mb-20">
        <Card  title="Redesigned Jersey" gender="Men's TShirt" price="$29" avatar="/image 25.png"/>
        <Card  title="Redesigned Jersey" gender="Men's TShirt" price="$29" avatar="/image 25-1.png"/>
        <Card  title="Redesigned Jersey" gender="Men's TShirt" price="$29" avatar="/image 27.png"/>
        <Card  title="Redesigned Jersey" gender="Men's TShirt" price="$29" avatar="/image 20.png"/>
      </div>
    </div>
  )
}
