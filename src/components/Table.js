import React from 'react'
import '../components/Table.css'
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs"
export const Table = ({rows, deleteRow, editRow}) => {
  return (
    <div className='table-wrapper'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Page</th>
                    <th className='expand'>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                rows.map((row, idx)=>{
                    return <tr key={idx}>
                    <td>{row.page}</td>
                    <td className='expand'>{row.description}</td>
                    <td>
                    {row && row.status ==="Live" &&<span className='label label-live'>{row.status}</span>}
                    {row && row.status ==="Draft" &&<span className='label label-draft'>{row.status}</span>}
                    {row && row.status ==="Error" &&<span className='label label-error'>{row.status}</span>}
                    </td>
                    <td>
                        <span className='action'>
                            <BsFillTrashFill className='delete-btn' onClick={()=>deleteRow(idx)}/>
                            <BsFillPencilFill onClick={()=>editRow(idx)}/>
                        </span>
                    </td>
                    </tr>
                })
            }
                
            </tbody>
        </table>
    </div>
  )
}
