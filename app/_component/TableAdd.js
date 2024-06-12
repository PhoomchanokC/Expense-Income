import React, { useState } from 'react'


export const TableAdd = (props) => {
    const [date,setDate] = useState()
    const [catagory,setCatagory] = useState("อื่นๆ")
    const [detail,setDetail] = useState()
    const [income,setIncome] = useState(0)
    const [expense,setExpense] = useState(0)
    const [remain,setRemain] = useState(0)

    const finish = () => {
        const new_data = {
            date,
            catagory,
            detail,
            income,
            expense,
            remain
        }
        props.cancel();
        props.insertItem(new_data);
        }
    
    return (
        <>
            {
                <tr className='p-2'>
                    <td className='border border-black table-bg'>
                        <input type='date' defaultValue={date} onChange={(e)=> setDate(e.target.value)}></input>
                    </td>
                    <td className='border border-black table-bg' >
                        <select name="category" className='' value={catagory} onChange={(e) => setCatagory(e.target.value)}>
                            <option value="อาหาร" >อาหาร</option>
                            <option value="เดินทาง" >เดินทาง</option>
                            <option value="ซื้อของ" >ซื้อของ</option>
                            <option value="อื่นๆ" >อื่นๆ</option>
                        </select>
                    </td>
                    <td className='border border-black table-bg'>
                        <textarea
                            className='w-80 text-start resize-none' placeholder='รายการ'
                            value={detail}
                            onChange={(e) => setDetail(e.target.value)}
                        />
                    </td>
                    <td className='border border-black table-bg'>
                        <input type='number' name="income" className='w-10'min={0} value={income} onChange={(e) => setIncome(e.target.value)}></input>
                    </td>
                    <td className='border border-black table-bg'>
                        <input type='number' className='w-10' min={0} value={expense} onChange={(e)=> setExpense(e.target.value)}></input>
                    </td>
                    <td className='border border-black table-bg'>
                    <td className='border border-black table-bg' >
                        <select name="category" className='' value={remain} onChange={(e)=> setRemain(e.target.value)}>
                            <option value="เงินสด" >เงินสด</option>
                            <option value="บัตรเคดิต" >บัตรเคดิต</option>
                            <option value="อื่นๆ" >อื่นๆ</option>
                        </select>
                    </td>
                    </td>
                    <td className='bg '>
                        <button className='border bg-lime-700  w-20 h-8 rounded-full text-white' onClick={finish}>DONE</button>
                    </td>
                </tr>
            }
        </>
    )
}
