

import { useEffect,useState } from "react";
import axios from "axios";
const API_KEY=`VqWK01foq75rftgeeXlJk2CyY3oAlTUD`;


const useGif = (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;



    const [gif, setgif] = useState("");
    const [spin, setspin] = useState(false);
    async function fetchdata(tag) {
      setspin(true);
    
      const { data } = await axios.get(tag?`${url}&tag=${tag}`:url);
  
      console.log("setting");
      setgif(data.data.images.downsized_large.url);
      setspin(false);
      console.log(gif);
    } 
    useEffect(() => {
      fetchdata(tag);
    }, []);

    return({gif,spin,fetchdata});

};

export default useGif;
