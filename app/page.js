"use client"
import Table from "./home/page";
import { Anuphan, Roboto_Mono } from 'next/font/google'
import { Header } from "./_component/header";
import { Footer } from "./_component/footer";
import { useState } from "react";

export const sarabun = Anuphan({
  subsets: ['thai'],
  weight: '700',
})


const sampledata = [
  {
    key: 1,
    date: "2024-06-02",
    catagory: "อาหาร",
    detail: "example 1",
    income: 100,
    expense: 0,
    remain: "อื่นๆ"
  },
  {
    key: 2,
    date: "2024-06-03",
    catagory: "เดินทาง",
    detail: "example 2",
    income: 0,
    expense: 100,
    remain: "บัตรเคดิต"
  },
  {
    key: 3,
    date: "2024-06-04",
    catagory: "ซื้อของ",
    detail: "example 4",
    income: 200,
    expense: 0,
    remain: "บัตรเคดิต"
  },
  {
    key: 4,
    date: "2024-06-05",
    catagory: "อื่นๆ",
    detail: "example 5",
    income: 20,
    expense: 0,
    remain: "เงินสด"
  }
]




export default function Home() {

  const [data, setData] = useState(sampledata)
  const [selectFilter, setSelectFilter] = useState("All")

  const insertItemHandler = (props) => {
    let temp = props
    temp.key = data.length + 1
    const newData = {
      ...temp
    }
    setData((prevData) => {
      return [...prevData, newData];
    });
  }

  const removeItemHandler = (props) => {
    const newData = data.filter((data) =>
      data.key != props.keys
    )
    setData(newData)
  }

  const editItemHandler = (props) => {
    const temp_data = data
    const objIndex = temp_data.findIndex(data => data.key === props.keys)
    temp_data[objIndex] = props
    temp_data[objIndex].key = props.keys
    setData(temp_data);
  }

  return (
    <div className="container min-h-screen bg min-w-full p-40">
      <Header />
      <div className="pt-5 flex">
        <h1>Sort by : &nbsp;</h1>
        <select name="category" className='' onChange={(e) => setSelectFilter(e.target.value)}>
          <option value="All" >ทั้งหมด</option>
          <option value="อาหาร" >อาหาร</option>
          <option value="เดินทาง" >เดินทาง</option>
          <option value="ซื้อของ" >ซื้อของ</option>
          <option value="อื่นๆ" >อื่นๆ</option>
        </select>
      </div>
      <div className="py-5">
        {
          <Table data={data} insertItem={insertItemHandler} removeItemHandler={removeItemHandler} editItemHandler={editItemHandler} selectFilter={selectFilter} />
        }
      </div>
    
    </div>
  );
}
