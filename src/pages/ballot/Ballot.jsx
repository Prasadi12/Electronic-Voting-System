import React from 'react'
import './Ballot.css'
import Party from './party2.png'

function Ballot() {
    return (
        <div className='content'>
            <h1 className='heading'>Election Name - YEAR</h1>

            {/* -----------ballot table---------- */}
            <table className='tbl'>
                <tr>
                    <th className='txt1'>Symbol</th>
                    <th className='txt1'>Party Name</th>
                    <th className='txt1'>Candidate</th>
                    <th className='txt1'>Vote</th>
                </tr>
                <tr>
                    <td><img src={Party} className='img1' /></td>
                    <td>ehdknsj</td>
                    <td>ehdknsj</td>
                    <td>ehdknsj</td>
                </tr>
            </table>
            {/* -----------ballot table end---------- */}

            <div class="row btns">
                <div className='col-6'><button className="btn fn btns btn2 " type="button" >Clear</button></div>
                <div className='col-6 '><button className="btn fn btns btn1" type="button">Submit</button></div>
            </div>
            <p class="pbt fn" >Electronic voting system for Sri Lanka</p>
        </div>
    )
}

export default Ballot