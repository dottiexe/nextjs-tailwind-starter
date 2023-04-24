import type {NextPage} from 'next'
import {useState} from "react";

const colors = ['green', 'red', 'blue'];
const modes = ['light', 'dark'];


const Home: NextPage = () => {
  const [color, setColor] = useState<string>(colors[0])
  const [mode, setMode] = useState<string>(modes[0])
  
  return (
    <div className={[
      'font-mono bg-primaryBg h-screen flex flex-col justify-center',
      'theme-$(color)',
      'theme-$(mode)',
    ].filter(Boolean).join(' ')}> 
      <div className='nx-auto bg-neutralBg text-onNeutralBg border-8 border-onNeutralBg p-5 max-w-lg'>
        <h1 className="text-3xl font-bold text-center">
          Tailwind Themes
        </h1>

        <RadioGroup value={color} onChange={setColor}>
          <RadioGroup.Label className="block mt-5">Select a color:</RadioGroup.Label>
          <div className="flex justify-between space-x-8 mt-2">
            {colors.map(c => }
            return <
          </div>
        </RadioGroup>
      </div>
    
    </div>

  )
}

export default Home
function useState<T>(arg0: string): [any, any] {
  throw new Error('Function not implemented.');
}

