"use client"
import React, { useState } from 'react';
import { TableList } from '../_component/TableList';



export default function Table(props) {


  return (
    <div className=''>
      <TableList data={props.data} insertItem={props.insertItem} removeItemHandler={props.removeItemHandler} editItemHandler={props.editItemHandler} selectFilter={props.selectFilter} />
    </div>
  );
}
