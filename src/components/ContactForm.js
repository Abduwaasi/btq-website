"use client"

import { useState, useEffect } from "react"

import Input from "./Input"


function ContactForm({ setShowToast, setMessage, setShowError }) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        platform: "",
        message: ""
    })
    function isEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showToastMessage(message, autoCloseDelay = 3000) {
        setShowToast(true)
        setMessage(message)

        setTimeout(() => {
            setShowToast(false)
        }, autoCloseDelay)
    }
    function showErrorMessage(message, autoCloseDelay = 3000) {
        setShowError(true)
        setMessage(message)

        setTimeout(() => {
            setShowError(false)
        }, autoCloseDelay)
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = async (e) => {
        const { name, email, number, platform, message } = formData
        try {
            e.preventDefault()
            let isValid = true
            if (!isEmail(email)) {
                isValid = false
                showErrorMessage("Invalid email address")
            }
            if (name == "" || number == "" || platform == "" || message == "") {
                isValid = false

            }

            if (isValid) {
                const response = await fetch("api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                })

                showToastMessage("Form submitted succesfully")
                setFormData({
                    name: "",
                    email: "",
                    number: "",
                    platform: "",
                    message: ""
                })
            } else {
                console.log("Enter all input field correctly")
                showErrorMessage("Enter all input field correctly")
            }

        } catch (error) {
            console.log("Something went wrong", error)
            showErrorMessage("Enter all input field correctly")
        }

    }


    return (
        <form className='mt-8'>
            <Input type="text" placeholder='Name' required name='name' id='name' value={formData.name} onChange={handleChange} />
            <Input type="email" placeholder='Email' required name='email' id='email' value={formData.email} onChange={handleChange} />
            <Input type="tel" placeholder='Phone Number' required name='number' id='number' value={formData.number} onChange={handleChange} />
            <select name="platform" id="platform" value={formData.platform} onChange={handleChange} required className="w-full rounded-2xl border border-solid mb-5 border-gray py-3 px-5 text-base leading-tight font-normal text-light-gray placeholder:text-base placeholder:text-light-gray focus:outline-none focus:border-spacing-2 focus:border-light-gray">
                <option value="whatsapp">Whatsapp</option>
                <option value="friend-and-family">Friends & Family</option>
                <option value="radio">Radio</option>
                <option value="flyer">Flyer</option>
                <option value="billboard">Billboard</option>
            </select>
            <textarea name="message" id="message" cols="30" rows="5" placeholder='Your Message' className="w-full rounded-2xl border border-solid mb-5 border-gray py-3 px-5 text-base leading-tight font-normal text-light-gray placeholder:text-base placeholder:text-light-gray focus:outline-none focus:border-spacing-2 focus:border-light-gray" value={formData.message} onChange={handleChange}></textarea>
            <button className='bg-red w-full rounded-full py-2 text-center text-base text-white uppercase leading-tight mb-8' type='submit' onClick={handleSubmit}>Send</button>
        </form>
    )
}

export default ContactForm