import React from "react";
import './LoginForm.css'
import Logo from "./logo.png"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'


function LoginForm() {

  const [nic, setnic] = useState('')
  //const [markdid, setmarkedid] = useState("");
  const navigation=useNavigate()
  
  function submit(e) {
    e.preventDefault()
    axios.post('http://localhost:5000/api/v1/login', {
      NIC:nic
    }).then(res => {
      if (res.data.msg === true) {
        if (res.data?.admin) {
          navigation('/admin')
        } else {
          navigation('/ballotpaper')
        }
      } else {
        alert("User Not found! Please register first")
      }
    }).catch(error => {
      console.log(error)
    })
  }

  return (
         <div className='container div1'>
          <img src={Logo} className = "logo1" alt=""/>

          {/*---------------headings start------------- */}
           <h1 className="txt1 fn">Election Name</h1>
           <p className="txt2 fn">Year</p>
           {/*---------------headings end------------- */}


      {/*---------------input area------------- */}
      <form onSubmit={submit}>
           <input type="text" value={nic} onChange={
            (e)=>setnic(e.target.value)
            } 
            required name="" placeholder="Enter NIC" className=" div2"/>
           
           
           {/*---------------buttons start------------- */}
           <div className="row btns">
          {/* <div className='col-6'><button className="btn fn btns bn2 " onClick={() => setmarkedid(0)}>
            Clear</button></div> */}
		          <div><button className="btn fn btns bn1" type="submit">Login</button></div>
           </div>
           {/*---------------buttons end------------- */}

        <p className="pbt fn" >Electronic voting system for Sri Lanka</p>
      </form>
		</div>
  )
}

export default LoginForm;
