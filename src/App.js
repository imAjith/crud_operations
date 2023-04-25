import { useState } from 'react';
import './App.css';
import { Modal } from './components/Model/Modal';
import { Table } from './components/Table';

function App() {
  const [modelOpen, setModelOpen] = useState(false);
  const [rows, setRows] =useState([
    {
      page:"Page 1",description:"This is the first page",status:'Live'
    },
    {
      page:"Page 2",description:"This is the second page",status:'Draft'
    },
    {
      page:"Page 3",description:"This is the third page",status:'Error'
    }
  ]);

  const [rowEdit,setRowEdit] = useState(null)
  const handleEdit = (idx)=>{
    setRowEdit(idx);
    setModelOpen(true);
  }

  const handleDelete = (value)=>{
    setRows(rows.filter((_,idx) => idx !== value))
  }

  const handleSubmitFun = (value)=>{
    rowEdit ===null ? 
    setRows([...rows,value]):setRows(rows.map((currRow, idx)=>{
      if(idx !== rowEdit) return currRow;
      return value;
    }))
  }
  return (
    <div className="App"> 
    <Table rows={rows} deleteRow={handleDelete} editRow={handleEdit}/>
    <button className='btn' onClick={()=>{setModelOpen(true)}}>Add</button>
    {modelOpen &&<Modal closeModel={()=>{setModelOpen(false); setRowEdit(null)}} onSubmit={handleSubmitFun} defaultValue={rowEdit !== null && rows[rowEdit]}/>}
    </div>
  );
}

export default App;
