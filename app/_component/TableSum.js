import React from 'react'

export const TableSum = (props) => {
    const income = props.data.map((data) => parseFloat(data.income))
    const sum_income = income.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
    );

    const expense = props.data.map((data) => parseFloat(data.expense))
    const sum_expense = expense.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
    );

    const remain = props.data.map((data) => parseFloat(data.remain))
    const sum_remain = remain.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
    );


    return (
        <>
            {
                <tr className='p-2'>
                    <td></td>
                    <td></td>
                    <td className='text-end text-xl border-r border-black flex justify-end '><h1 className='border-black  bg-white border-l px-5 border-b py-1'>รวม</h1></td>
                    <td className='px-5 text-lg border-r border-b border-black bg-white text-orange-500'>
                        {
                            sum_income
                        }
                    </td>
                    <td className='px-5 text-lg border border-black bg-white text-orange-500'>
                        {
                            sum_expense
                        }
                    </td>
                    <td className='px-5 text-lg border border-black bg-white text-orange-500'>
                        {
                            sum_remain
                        }
                    </td>
                </tr>
            }
        </>
    )
}
