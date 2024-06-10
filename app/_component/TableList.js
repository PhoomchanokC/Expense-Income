"use client"
import React, { useState } from 'react'
import { TableItem } from './TableItem'
import { TableAdd } from './TableAdd'


export const TableList = (props) => {
  const data = props.data || [];
  const [newItem,setnewItem] = useState(false);
  const [deleteItem,setDeleteItem] = useState(false);
  const [editIcon,setEditIcon] = useState(false)
  
  const Icon_addItem = () => {
    setnewItem(!newItem);
  }

  const Icon_deleteItem = () => {
    setDeleteItem(!deleteItem);
  }

  const Icon_EditItem = () => {
    setEditIcon(!editIcon);
  }

  return (
    <div className='container mx-auto px-20'>
    <div className='flex justify-end '>
    {
        !deleteItem && !newItem?
      <button className={ !newItem?"bg-yellow-600 hover:bg-yellow-9000 text-white font-bold py-1 px-3 rounded-md mx-2":"bg-red-900 hover:bg-red-950 text-white font-bold py-1 px-3 rounded-md"} onClick={Icon_EditItem}>
       <h2 className='text-base'> {editIcon? "CANCEL" : "EDIT"}</h2>
      </button>:""
      }
      {
        !deleteItem && !editIcon?
      <button className={ !newItem?"bg-green-800 hover:bg-green-900 text-white font-bold py-1 px-3 rounded-md mx-2":"bg-red-900 hover:bg-red-950 text-white font-bold py-1 px-3 rounded-md"} onClick={Icon_addItem}>
       <h2 className='text-base'> {newItem? "CANCEL" : "NEW"}</h2>
      </button>:""
      }
    {
      !newItem && !editIcon?
      <button className={ deleteItem?"bg-green-800 hover:bg-green-900 text-white font-bold py-1 px-3 rounded-md mx-2":"bg-red-900 hover:bg-red-950 text-white font-bold py-1 px-3 rounded-md"} onClick={Icon_deleteItem}>
       <h2 className='text-base'> {deleteItem? "DONE" : "DELETE"}</h2>
      </button>:""
    }
    </div>
    <div className='py-2'>
        <table className='w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400  text-center '>
          <thead className='text-lg text-gray-700 uppercase bg-gray-50 table_header'>
            <tr className=''>
              <th className='border border-black'>วันที่</th>
              <th className='border border-black'>ประเภท</th>
              <th className='border border-black'>รายการ</th>
              <th className='border border-black'>รายรับ</th>
              <th className='border border-black'>รายจ่าย</th>
              <th className='border border-black'>คงเหลือ</th>
              {
                newItem && <th className='bg'></th>
              }

            </tr>
          </thead>
          <tbody>
            {props.selectFilter === "All"?
              data.map((data) =>{
                return(
                <TableItem
                keys = {data.key}
                key ={data.key}
                date={data.date}
                catagory={data.catagory}
                detail={data.detail}
                income={data.income}
                expense={data.expense}
                remain={data.remain}
                delete = {deleteItem}
                editIcon={editIcon}
                removeItemHandler={props.removeItemHandler}
                editItemHandler={props.editItemHandler}
                />
              )
              }):
              data.filter((data) => data.catagory === props.selectFilter).map((data) =>{
                return(
                  <TableItem
                  keys = {data.key}
                  key ={data.key}
                  date={data.date}
                  catagory={data.catagory}
                  detail={data.detail}
                  income={data.income}
                  expense={data.expense}
                  remain={data.remain}
                  delete = {deleteItem}
                  editIcon={editIcon}
                  removeItemHandler={props.removeItemHandler}
                  editItemHandler={props.editItemHandler}
                  />
                )
              })
            }
            {
              newItem && <TableAdd insertItem={props.insertItem} cancel={Icon_addItem}/>
            }
            {
              
            }
          </tbody>
        </table>
        </div>
    </div>
  )
}
