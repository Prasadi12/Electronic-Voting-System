import React from "react";
import './AdminLogin.css'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'


function AdminLogin() {

  const [nic, setnic] = useState('')
  const [password, setpassword] = useState('')
  const navigation = useNavigate()

  function submit(e) {
    e.preventDefault()
    axios.post('http://localhost:5000/api/v1/login', {
      NIC: nic,
      password: password
    }).then(res => {
      console.log(res.data)

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
    <div className="bgimg4">
      <div className='div3 '>
        <h1 className='txt3'>Admin Login</h1>


        {/*---------------input area------------- */}
        <form onSubmit={submit} className='container3'>
          <label className="txt32">Enter NIC: </label>
          <input type="text" value={nic} onChange={ (e) => setnic(e.target.value) } required name="" placeholder="NIC Number" className="form_in" />
          <label className="txt32">Enter Password: </label>
          <input type="password" value={password} onChange={
            (e) => setpassword(e.target.value)
          }
            required name="" placeholder="Password" className="form_in" />


          {/*---------------buttons start------------- */}
          <div className="row btns3">
            <div className='col-6'><button className="btn3 fn3 btns3 bn32 " onClick={submit} type="button" >Login</button></div>
          </div>
          {/*---------------buttons end------------- */}


        </form>
      </div></div>
  )
}

export default AdminLogin;
