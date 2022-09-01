import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/header';
import "./clock.css"

const Clock = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const idInterval = setInterval(() => {
      setDate(new Date().toLocaleTimeString())
    }, 1000)
    return () => {
      clearInterval(idInterval)
    }
  }, []);
  return <>
    <Header/>
    <div className='clock__container pt-20'> 
      <div id="clock" className='clock__timer'>{date.toString()}</div>
    </div>    
    </>
}

export default Clock
