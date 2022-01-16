
// import {
//     BrowserRouter as Router, Routes, Route, Link
// } from "react-router-dom";
import React, { useState} from 'react'
import swal from 'sweetalert';
import {
    useParams,
 } from "react-router-dom"


function EditUser() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    let {id} = useParams();
    alert(id)
    console.log('hhhhhh')
    function saveUser() {
        console.log(name, contact)
        let data = { name, contact, email, address }
        fetch("http://localhost:8000/api/userdetails/", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log(result['status'])
            if (result['status'] == 200) {
                swal({
                    title: "Success!",
                    text: "UserDetail Added Sucessfully!",
                    icon: "success",
                });
            }
        })
    }
    return (
        <div>
            <label>Enter your name:
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
            </label>
            <br></br>
            <label>Contact
                <input type="text" value={contact} name="contact" onChange={(e) => { setContact(e.target.value) }} />
            </label>
            <br></br>
            <label>Email
                <input type="text" value={email} name="email" onChange={(e) => { setEmail(e.target.value) }} />
            </label><br></br>
            <label>Address
                <input type="text" value={address} name="address" onChange={(e) => { setAddress(e.target.value) }} />
            </label><br></br>
            <button type='submit' onClick={saveUser}>Submit</button>
        </div>
    )
}

export default EditUser;

