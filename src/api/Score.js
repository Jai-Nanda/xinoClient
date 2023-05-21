// const API_KEY = "qZnM0O90ToIjBiq9GvT9382";

// export const getMatches = async () => {
//   const url = 'https://api.cricapi.com/v1/currentMatches?apikey=7de5e83d-2218-4990-b91f-8dec911066eb&offset=0';
//   console.log("URL", url);
//   try {
//     const response = await fetch(url);
//     let ipl = [];
//     const keywords = ["Kolkata", "Chennai", "Punjab", "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Rajasthan"];
//     const x = response.json();
//     for (const r of x.parse()) {
//       const match = r.name.split(" ");
//       if (keywords.includes(match[0])) {
//         ipl.push(r);
//       }
//     }
//     return ipl;
//   } catch (error) {
//     console.log("ERROR ", error);
//   }
// };

const API_KEY = "qZnM0O90ToIjBiq9GvT9382";

export const getMatches = async () => {
  const url =
    "https://api.cricapi.com/v1/currentMatches?apikey=7de5e83d-2218-4990-b91f-8dec911066eb&offset=0";
  console.log("URL", url);
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    const keywords = [
      "Kolkata",
    ];
    const keyword2 = [
      "Chennai",
      "Punjab",
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Rajasthan"
    ]
    const ipl = [];
    for (const r of data.data) {
      const match = r.name.split(" ");
      if (keywords.includes(match[0])) {
        ipl.push(r);
      }
    }
    return ipl;
  } catch (error) {
    console.log("ERROR", error);
  }
};