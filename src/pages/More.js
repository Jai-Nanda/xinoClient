import {Link} from 'react-router-dom'
const More = ({ matchDetails }) => {
  const { name, status, venue } = matchDetails
  return (
      <>
      <div className=" max-w-6xl m-auto mt-10 rounded-lg flex justify-center items-center flex-col  h-44 " >
        <h2 className="text-center font-bold text-2xl text-sec-color">{name}</h2>
        <p className="font-semibold text-lg">{status}</p>
        <p className="font-medium ">{venue}</p>
      </div>
      </>

      

  )
}
export default More