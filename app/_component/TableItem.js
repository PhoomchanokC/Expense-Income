"use client"
import React, { useState } from 'react'
export const TableItem = (props) => {




 
 const [edit_status,setEdit_status] = useState(false)


 const [date,setDate] = useState(props.date)
 const [catagory,setCatagory] = useState(props.catagory)
 const [detail,setDetail] = useState(props.detail)
 const [income,setIncome] = useState(props.income)
 const [expense,setExpense] = useState(props.expense)
 const [remain,setRemain] = useState(props.remain)

 const delte_data = () =>{
  props.removeItemHandler(props)
 }

 const cancel_edit = ()=>{
  setEdit_status(!edit_status)
  setDate(props.date)
  setCatagory(props.catagory)
  setDetail(props.detail)
  setIncome(props.income)
  setExpense(props.expense)
  setCatagory(remain.remain)
 }

 const done_edit = ()=>{
  setEdit_status(false)
  const edit_item = {
    keys: props.keys,
    date,
    catagory,
    detail,
    income,
    expense,
    remain
  }
  props.editItemHandler(edit_item)
 }


  return (
    <>
        {
        <tr className='p-2'>
            <td className='border border-black table-bg'>

            {!edit_status && date}
            {
              edit_status && <input type='date' defaultValue={date} onChange={(e)=> setDate(e.target.value)}></input>
            }
            </td>

            <td className='border border-black table-bg'>
            {!edit_status && catagory}

            {
              edit_status &&
              <select name="category" className='' value={catagory} onChange={(e) => setCatagory(e.target.value)}>
                            <option value="อาหาร" >อาหาร</option>
                            <option value="เดินทาง" >เดินทาง</option>
                            <option value="ซื้อของ" >ซื้อของ</option>
                            <option value="อื่นๆ" >อื่นๆ</option>
              </select>
            }
            </td>
            
            <td className='border border-black table-bg'>
            
            {!edit_status && 
              <textarea
              className='w-80 text-start resize-none'
              defaultValue={detail}
              readOnly
              />
            }
            {
              edit_status &&
             <textarea
                            className='w-80 text-start resize-none' placeholder='รายการ'
                            value={detail}
                            onChange={(e) => setDetail(e.target.value)}
               />
            }
            </td>
            
            <td className='border border-black table-bg'>

            {!edit_status && income}
            {edit_status && <input type='number' name="income" className='w-10'min={0} value={income} onChange={(e) => setIncome(e.target.value)}></input>}
            
            </td>
            <td className='border border-black table-bg'>
            {!edit_status && expense}
            {edit_status && <input type='number' className='w-10' min={0} value={expense} onChange={(e)=> setExpense(e.target.value)}></input>}
            </td>
            <td className='border border-black table-bg'>
            {!edit_status && remain}
           { edit_status && <input type='number' className='w-10' min={0} value={remain} onChange={(e)=> setRemain(e.target.value)}></input>}
            </td>
            { 
            props.delete && <td className='bg'>
            <button className='border bg-red-800 hover:bg-red-950 w-20 h-8 rounded-full text-white' onClick={delte_data}>DELETE</button>
            </td>
            }
            { 
              props.editIcon && <td className='bg'>
              <button className='border bg-red-800 hover:bg-red-950 w-20 h-8 rounded-full text-white' onClick={cancel_edit}>{edit_status?"CANCEL":"EDIT"}</button>
              </td>
            }
                        { 
              edit_status && <td className='bg'>
              <button className='border bg-green-800 hover:bg-green-950 w-20 h-8 rounded-full text-white' onClick={done_edit}>DONE</button>
              </td>
            }
        </tr>
        }
    </>
  )

}

