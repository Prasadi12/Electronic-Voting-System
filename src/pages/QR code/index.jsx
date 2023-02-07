import React, { useState } from 'react'
import './qr.css'
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

function QrCode(event) {
    const initialState = {
        name: ""
    }
    const [formData, setFormData] = useState(initialState)
    const [qr, setQr] = useState(false)

    const generateQR = async () => {
        if(formData.name){
            setQr(true)
        } 
    };
    return (
        <div className='content_1'>
            <h1>Genrate your QR</h1>
            <div className="form" align = "">
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
            }
            />
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
                
                
                <br></br>
            </div>
            <button onClick={generateQR} className="btn_1">generate my QR</button>
            {qr ?
                <div style={{ height: "auto", margin: "0 auto", maxWidth: 150, width: "100%" }}>
                    <QRCode
                        size={356}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={formData.name}
                        viewBox={`0 0 256 256`}
                    />
                </div>
                : 
                <div><p></p></div>
                }
                

        </div>
    )
}

export default QrCode