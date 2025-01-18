import React from 'react'
export default function Form_Inputs() {

    function getData() {
        let userData = {
            userName: document.querySelector("#userName").value,
            email: document.querySelector("#email").value,
            phoneNumber: document.querySelector("#phoneNumber").value,
            message: document.querySelector("#message").value,
        }
        return userData;
    }

    return (
        <div>
            <input id='userName' type="text" className='form-control mb-3 fs-5' placeholder='Name' />
            <input id='email' type="email" className='form-control mb-3 fs-5' placeholder='Email Adress' />
            <input id='phoneNumber' type="tel" className='form-control mb-3 fs-5' placeholder='PhoneNumber' />
            <textarea id='message' name="message" className='form-control mb-3 fs-5' placeholder='Message'></textarea>
            <button onClick={getData} className='btn fs-4 mt-3 text-white fw-bold px-4 py-2'>Send</button>
        </div>
    )
}