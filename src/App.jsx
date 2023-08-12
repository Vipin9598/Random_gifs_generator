import Tag from './components/Tag';
import Random from './components/Random';


export default function App() {
  return (
    <div className=' min-h-screen  flex flex-col  items-center justify-evenly background gap-4 '>
      <h1 className="text-3xl  font-semibold uppercase  w-11/12 mx-auto text-center rounded-xl py-1 bg-white main-head ">Random GIFS APP</h1>

      <div className='w-full h-full flex gap-4 app '>
            <Random/>
            <Tag/>
      </div>

    </div>
  )
}
