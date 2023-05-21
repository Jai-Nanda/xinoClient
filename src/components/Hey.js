import {Link } from 'react-router-dom'
export default function Card(props) {
  return (
    // <div className="flex  mx-5 max-h-80 max-w-72  flex-col justify-center items-center  mb-10 rounded-lg border-2 border-[#155A1C]">
    //     <div className=" flex flex-col justify-center items-center  ">
    //   <img src={props.shirt} width={200} height={160} alt="hey" className="object-cover" ></Image>
    //     </div>
    //   <div className="flex flex-col justify-center  mt-5 w-72  h-28  rounded-lg border-t-2 border-[#155A1C] ">
    //     <h2 className="text-xl font-medium  pl-7 pb-1">{props.title}</h2>
    //     <p className="text-sm pl-7 pb-1">{props.gender}</p>
    //     <div className="flex justify-between items-center">
    //     <h1 className="font-semibold pl-7 text-lg">{props.price}</h1>
    //     <BsFillCartFill/>
    //     </div>
    //   </div>
    // </div>
    <>
    <div className="flex  justify-center items-center mx-5 ">


  <div className="bg-white border-2 border-[#155A1C] rounded-xl hover:scale-105 hover:shadow-xl duration-500">
    <Link href="/seeStore" className="cursor-pointer">
      <img src={props.avatar} width={288} height={320} alt="Product image" className="h-80 w-72 object-cover rounded-xl" />
    </Link>
    <div className="px-4 py-3 w-72  border-t-2 border-[#155A1C]">
      <span className="text-gray-400 mr-3 uppercase text-xs">IPLINATOR</span>
      <p className="text-lg font-bold text-black truncate block capitalize">{props.title}</p>
      <div className="flex items-center">
        <p className="text-lg font-semibold text-black cursor-auto my-3">{props.price}</p>
        <del>
          <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
        </del>
      </div>
    </div>
  </div>

</div>


</>
  )
}
