export const getMatches = async () => {
    const url =
      "https://api.cricapi.com/v1/currentMatches?apikey=df200008-ec3f-4ff7-bff1-6e45fcae6797&offset=0";
    console.log("URL", url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      const keywords2 = [
        "Chennai",
        "Punjab",
        "Delhi",
        "Mumbai",
        "Bangalore",
        "Hyderabad",
        "Rajasthan",
        "Kolkata"
      ]
  
      const ipl = [];
      for (const r of data.data) {
        const match = r.name.split(" ");
        if (keywords2.includes(match[0])) {
          ipl.push(r);
        }
      }
      return ipl;
    } catch (error) {
      console.log("ERROR", error);
    }
  };