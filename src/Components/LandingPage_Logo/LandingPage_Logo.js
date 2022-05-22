import React from 'react'
import '../../Styles/LandingPage/LandingPage_Logo/LandingPage_Logo.css'
import Chart from './Chart'

function LandingPage_Logo() {
  return (
    <div className='LandingPage_Logo-container'>
        <h1 className="LandingPage_Logo-container-heading">LANDING PAGE</h1>
        {/* <h1>hradynsh</h1> */}
        <br />
        <br />
        <Chart />

        <br />
        <br />
        
        <h2>Choose a data range</h2>
        <p> Know how much you earned today, this month or last year <br />
        with a single click. Analyze the performance of you websites <br />
        and networks individually.</p>
    </div>
  )
}

export default LandingPage_Logo