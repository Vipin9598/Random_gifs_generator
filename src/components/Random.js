import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = `VqWK01foq75rftgeeXlJk2CyY3oAlTUD`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function Random() {
  const { spin, gif, fetchdata } = useGif();

  function clickhandler() {
    fetchdata();
  }
  return (
    <div className=" flex flex-col gif h-10/12  mx-auto bg-green-500 w-5/12  justify-between items-center rounded-xl">
      <h1 className="text-center text-xl tag ">Random gifs</h1>
      <div className="h-[350px] img2 w-9/12 aspect-square flex justify-center items-center rounded-lg">
        {spin ? (
          <Spinner />
        ) : (
          <img src={gif} className="h-full w-full object-cover"></img>
        )}
      </div>
      <button onClick={clickhandler} className="w-10/12 bg-white py-2 text-xl btn rounded-lg text-center mb-6">Generate</button>
    </div>
  );
}

export default Random;
