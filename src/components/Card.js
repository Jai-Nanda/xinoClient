// {
//     "id": "034ccab8-50ac-4dc4-affb-38c73cca0a49",
//     "name": "Kolkata Knight Riders vs Lucknow Super Giants, 68th Match",
//     "matchType": "t20",
//     "status": "Lucknow Super Giants won by 1 run",
//     "venue": "Eden Gardens, Kolkata",
//     "date": "2023-05-20",
//     "dateTimeGMT": "2023-05-20T14:00:00",
//     "teams": [
//       "Kolkata Knight Riders",
//       "Lucknow Super Giants"
//     ],
//     "teamInfo": [
//       {
//         "name": "Kolkata Knight Riders",
//         "shortname": "KKR",
//         "img": "https://g.cricapi.com/iapi/206-637852958714346149.png?w=48"
//       },
//       {
//         "name": "Lucknow Super Giants",
//         "shortname": "LSG",
//         "img": "https://g.cricapi.com/iapi/215-637876059669009476.png?w=48"
//       }
//     ],
//     "score": [
//       {
//         "r": 176,
//         "w": 8,
//         "o": 20,
//         "inning": "Lucknow Super Giants Inning 1"
//       },
//       {
//         "r": 175,
//         "w": 7,
//         "o": 20,
//         "inning": "Kolkata Knight Riders Inning 1"
//       }
//     ],
//     "series_id": "c75f8952-74d4-416f-b7b4-7da4b4e3ae6e",
//     "fantasyEnabled": true,
//     "bbbEnabled": true,
//     "hasSquad": true,
//     "matchStarted": true,
//     "matchEnded": true
//   }
import {Link} from 'react-router-dom'
const Card = ({ matchDetails }) => {
  const { name, status, venue } = matchDetails
  return (
      <>
      <div className="bg-white max-w-6xl m-auto mt-10 rounded-lg flex justify-center items-center flex-col text-black h-44 " >
        <h2 className="text-center font-bold text-2xl text-[#6333D7]">{name}</h2>
        <p className="font-semibold text-lg">{status}</p>
        <p className="font-medium text-primary-color">{venue}</p>
      </div>
      <div className='mt-5'>
        <Link to="/yes" className='pt-10 underline font-semibold text-sec-color font-lg'>See More Fixtures</Link>
      </div>
      </>

      

  )
}

export default Card;