import React from 'react'

export const TableSum = (props) => {
    const income = props.data.map((data) => parseFloat(data.income)) || [0]
    const expense = props.data.map((data) => parseFloat(data.expense)) || [0]
    const remain = props.data.map((data) => parseFloat(data.remain)) || [0]

    let sum_income = 0;
    let sum_expense = 0;

    try {
        sum_income = income.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
        );
        sum_expense = expense.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
        );
    }
    catch (err) {

    }







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
                            sum_income - sum_expense
                        }
                    </td>
                </tr>
            }
        </>
    )
}
