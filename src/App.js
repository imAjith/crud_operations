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

  const handleDelete = (value)=>{
    setRows(rows.filter((_,idx) => idx !== value))
  }

  const handleSubmitFun = (value)=>{
    setRows([...rows,value])
  }
  return (
    <div className="App"> 
    <Table rows={rows} deleteRow={handleDelete} />
    <button className='btn' onClick={()=>{setModelOpen(true)}}>Add</button>
    {modelOpen &&<Modal closeModel={()=>{setModelOpen(false)}} onSubmit={handleSubmitFun}/>}
    </div>
  );
}

export default App;
