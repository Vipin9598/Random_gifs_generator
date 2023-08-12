import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Tag() {
  const [tag, settag] = useState("TOM");
  const { spin, gif, fetchdata } = useGif(tag);

  function clickhandler() {
    fetchdata(tag);
  }

  return (
    <div className="flex flex-col gif h-10/12  mx-auto bg-blue-500 w-5/12 justify-center  items-center rounded-xl">
      <h1 className="text-center  tag text-xl ">Random {tag} gifs</h1>

      <div className="h-[350px] img1 w-9/12 aspect-square flex justify-center items-center rounded-lg">
        {spin ? (
          <Spinner />
        ) : (
          <img src={gif} className="h-full w-full object-cover"></img>
        )}
      </div>

      <input
        type="text"
        value={tag}
        maxLength={20}
        onChange={(event) => {
          settag(event.target.value);
        }}
        className="w-10/12 text-xl my-4 rounded-lg text-center input"
      ></input>
      <button onClick={clickhandler} className="w-10/12 bg-white py-2 text-xl mb-4 rounded-lg text-center btn">Generate gifs</button>
    </div>
  );
}

export default Tag;
