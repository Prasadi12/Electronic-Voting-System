import React, { useState} from 'react';
import './RegistrationForm.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function RegistrationForm(event) {

    const navigation=useNavigate()
    
    
    const [formData, setFormData] = useState(event.target)

    const registeruser = async(event) => {
        console.log("run reg func")
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData)

        const res = await axios.post('http://localhost:5000/api/v1/register', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            
            if (!alert("You have successfully registered!"))navigation("/");
        }).catch((err) => {
            console.log(err)
            alert(err.message)
        })

        console.log(res.status);
        if (res.status ===201) console.log(res.data);
            if(res.status === 500){
                console.log("fire");
                const {error} = res.data
                console.log(error);
            }
    };

    return (
        <div className='bgimg2'>
        <form className="form" onSubmit={registeruser}>

            <h1 className=''>Registration Form</h1>
            <div className="form-body">

            <div className='fullname'>
                <label className='form__label'>Full Name: </label>
                <input 
                    className="form__input" 
                    type="text" 
                    name="fullName"
                    onChange={(e) =>
                        setFormData({ 
                            ...formData, 
                            name: e.target.value 
                        })
                    }
                placeholder="Full Name"/>
            </div>

            <div className='iname'>            
            <label className="form__label" for="iName">Name with Initials :</label>
            <input className="form__input" 
            type="text" 
            name="iName"
            onChange={(e) =>
                setFormData({
                    ...formData,
                    iName: e.target.value
                })
            }
            placeholder="Name with Initials"/>
        </div>

            <div className='nicNumber'>
            <label className='form__label'>NIC Number: </label>
            <input 
            className='form__input' 
            type="text" 
            name="ssn" 
            onChange={(e) =>
                setFormData({
                    ...formData,
                    nicNum: e.target.value,
                })
            }
            placeholder="NIC Number"/>
        </div>

        <div className='birthday'>            
            <label className='form__label ' for="birthday">Birthday :</label>
            <input 
            className='calender form__input' 
            type="date" 
            name="dateOfBirth"
            onChange = {(e) =>
                setFormData({
                    ...formData,
                    birthday: e.target.value,
                })
            }/>
        </div>

        <div className='age'>            
            <label className="form__label">Age :</label>
            <input 
            className="form__input" 
            type="Number" 
            name="age"
            onChange = {(e) =>
                setFormData({
                    ...formData,
                    age: e.target.value,
                })
            } 
            placeholder="Age"/>
        </div>

        <div className='address'>
            <label className='form__label'>Address: </label>
            <input className="form__input" type="text" 
            name = "address"
            onChange={(e) =>
                setFormData({
                    ...formData,
                    address: e.target.value,
                })
            }
            placeholder="Address"/>
        </div>

        <div className='nationality'>
            <label className='form__label'>Nationality: </label>
            <input className="form__input" type="text" 
            name = "nationality"
            onChange={(e) =>
                setFormData({
                    ...formData,
                    nationality: e.target.value,
                })
            }
            placeholder="Nationality"/>
        </div>

        <div className='gdivision'>
                <label className='form__label'>Grama Niladhari Division: </label>
                <input className="form__input" type="text"
                name='gdivision'
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        gdivision: e.target.value,
                    })
                }
                placeholder="Grama Niladhari Division"/>
        </div>

        <div className='email'>
            <label className='form__label'>Email: </label>
            <input className='form__input' 
            type="email" 
            name = "email"
            onChange={(e) =>
                setFormData({
                    ...formData,
                    email: e.target.value,
                })
            }
            placeholder="Email"/>
        </div>

        <div className='contactNumber'>
            <label className='form__label'>Contact Number: </label>
            <input className="form__input" 
            type="number" 
            name = "contactNumber" 
            onChange={(e) =>
                setFormData({
                    ...formData,
                    contactNum: e.target.value,
                })
            }
            placeholder="Contact Number"/>
        </div>

            {/* -------------------gender start------------------- */}
        {/* <div className="gender_1">
            <label className="form__label ">Gender :</label>
            <div className=' gender-1 '>
                <div className="gender ">
                   <input className="" type="radio" name="gender" id="male" value={'Male'}/>  }
                   {/*value is optional */}
                   {/* <label className="" for="male">Male</label>
                </div>
                <div className="gender">
                   <input clasName="" type="radio" name="gender" id="female" value={'Female'} checked/>
                   <label className="" for="female">Female</label>
                </div>
            </div>
        </div> */}
         {/* -------------------gender end------------------- */}

         {/* --------Photos of NIC--------- */}
        {/* { <div class="pt-3 row nicImage">
                  <label className='form__label' for="birthday">Image of NIC : </label>

                  <div className='nicImage_1'>
                      
                  <div className=' img1 '>
                        <label for="img1" className="img_nic">Front image of NIC : </label>
                        <input className="form__input " type="file" id="img1"/>
                  </div><br/>
                 

                  <div className='img2'>
                        <label for="img2" className="img_nic">Back image of NIC : </label>
                        <input className="form__input " type="file" id="img2"/>
                  </div>
                 </div> 
        </div> } */}
        {/* --------photo of NIC end---------- */}

        {/* 

        <div className='district'>            
            <label className="form__label " for="district">District :</label>
            <input className="form__input" type="text" id="district" placeholder="District"/>
        </div>

        <div className='dSectretariat'>            
            <label className="form__label " for="dSectretariat">Divisional secretariat :</label>
            <input className="form__input " type="text" id="dSectretariat" placeholder="Divisional secretariat"/>
        </div>

         */}

    </div>

     {/* -------------button---------- */}
        <div className="">
            <button type="submit"  className="btn_1">Register</button>
        </div>  

    </form></div>
    )
}

export default RegistrationForm;