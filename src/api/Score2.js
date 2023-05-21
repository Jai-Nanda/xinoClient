export const getMatches = async () => {
    const url =
      "https://api.cricapi.com/v1/currentMatches?apikey=6516a923-2076-42ce-8000-2551ffd925d8&offset=0";
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