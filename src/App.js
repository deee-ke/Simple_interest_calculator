

import './App.css';
import { TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {

    const [interest,setInterest] = useState(0)
    const [principle,setPrinciple] = useState(0)
    const [rate,setRate] = useState(0)
    const [year,setYear] = useState(0)
    const [isprinciple , setIsPrinciple] = useState(true)
    const [isRate , setIsRate] = useState(true)
    const [isYear , setIsYear] = useState(true)

    const getValidate=(e)=>{
      const {name,value}=e.target
      /* console.log(name,value); */
      if(!!value.match(/^[0-9]*.?[0-9]+$/)){
        if(name==='principle')
        {setPrinciple(value)
        setIsPrinciple(true)}
        else if(name==='rate'){
          setRate(value)
          setIsRate(true)
        }
        else {
          setYear (value)
          setIsYear(true)
        }
      }
      else{
        if(name==='principle'){
        setPrinciple(value)
        setIsPrinciple(false)
        }
        else if(name==='rate'){
          setRate(value)
          setIsRate(false)
        }
        else{
          setYear(value)
          setIsYear(false)
        }
    }}

    const handleCalculate = (e)=>{
      e.preventDefault()
      if(!principle || !rate || !year){
        alert('Please fill the form!')
      }
      else{
        setInterest(principle*rate*year/100)
      }
    }

    const handleReset = (e)=>{
      setInterest(0)
      setPrinciple(0)
      setRate(0)
      setYear(0)
      setIsPrinciple(true)
      setIsRate(true)
      setIsYear(true)
    }


  return (
    <>
    <div className='d-flex justify-content-center align-items-center w-100 bg-dark' style={{height:"100vh"}}>
      <div className='bg-light p-5 rounded  justify-content-center  align-items-center'>
        <h1 className='d-flex justify-content-center align-items-center'>Simple Interest Calculator</h1>
        <p className='d-flex justify-content-center align-items-center'>Calculate simple interest easily!</p>
        <div className='bg-warning rounded p-4 w-100 align-items-center justify-content-center flex-column d-flex'>
          <h1>₹{' '}{interest}</h1>
          <p>Total simple interest.</p>
        </div>
        <form action="" className='mt-4' onSubmit={handleCalculate} >
          <div className='mb-3'>
          <TextField value={principle ||""} name='principle' onChange={(e)=>getValidate(e)}  id="outlined-basic" label="Principle amount" variant="outlined" className='w-100'/>
          </div>
          { !isprinciple &&
            <div>
            <p className='text-danger fw-bolder'>!Invalid input</p>
          </div>
          }
            <div className='mb-3'>
          <TextField onChange={(e)=>getValidate(e)}  name='rate' value={rate ||""} id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" className='w-100'/>
          </div>
          {!isRate &&
            <div>
            <p className='text-danger fw-bolder'>!Invalid input</p>
          </div>
          }
          <div className='mb-3'>
          <TextField onChange={(e)=>getValidate(e)}  name='year' value={year ||""} id="outlined-basic" label="Year (Yr)" variant="outlined" className='w-100'/>
          </div>
          {!isYear &&
            <div>
            <p className='text-danger fw-bolder'>!Invalid input</p>
          </div>
          }
          <Stack direction="row" spacing={2}>
            <Button disabled={isprinciple && isRate && isYear?false:true} variant="contained" className='w-100 bg-success' type='submit'>Calculate</Button>
            <Button variant="outlined" className='w-25 bg-danger text-light border border-0' onClick={handleReset} >Reset</Button>
          </Stack>
        </form>
      </div>
     
    </div>
    </>
  );
        }

export default App;
