import React, { useState } from 'react'
import { Dancing_Script,Hind } from 'next/font/google'

export const dancing_script = Dancing_Script({
    subsets: ['latin'],
    weight: '700',
  })

  export const hind = Hind({
    subsets: ['latin'],
    weight: '700',
  })

export const Header = () => {
    const [month,setMonth] = useState( new Date().toLocaleString('default', { month: 'long' }));
    const [year,setYear] = useState(new Date().getFullYear())
    return (
        <div className='container mx-auto flex pt-10 justify-between'>
            <div className='text-5xl '>
                <h1 className={dancing_script.className}>
                    EXPENSE
                </h1>
                <h1 className={dancing_script.className + " px-10"}>
                    TRACKER
                </h1>
            </div>
            <div className='flex  items-center relative'>
                <div className={'text-2xl'}>
                    <h1 className={hind.className + " flex "}> MONTH: <div className='underline '>{month}</div> </h1>
                    <h1 className={hind.className + " flex"} > YEAR: <div className='underline '>{year} </div> </h1>
                </div>
            </div>
        </div>
    )
}
