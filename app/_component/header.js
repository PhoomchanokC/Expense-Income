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
        <div className='container mx-auto flex px-20 pt-10 justify-between'>
            <div className='text-4xl '>
                <h1 className={dancing_script.className}>
                    EXPENSE
                </h1>
                <h1 className={dancing_script.className + " px-10"}>
                    TRACKER
                </h1>
            </div>
            <div className='flex  items-center'>
                <div className={hind.className + 'text-lg'}>
                    <h1 className={hind.className}> MONTH: {month}</h1>
                    <h1 className={hind.className} > YEAR: {year} </h1>
                </div>
            </div>
        </div>
    )
}
