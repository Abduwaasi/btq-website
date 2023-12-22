"use client"

import { useState, useEffect } from "react"

import Input from "./Input"


function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        platform: "",
        message: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await fetch("/api", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json();

            if (data.success) {
                // Handle successful form submission, e.g., show a success message
                console.log('Form submitted successfully');
            } else {
                // Handle form submission failure, e.g., display an error message
                console.error('Form submission failed:', data.error);
            }
            setFormData({
                name: "",
                email: "",
                number: "",
                platform: "",
                message: ""
            })

        } catch (error) {
            console.log("Error submitting form", error)
        }
    }


    return (
        <form className='mt-8'>
            <Input type="text" placeholder='Name' required name='name' id='name' value={formData.name} onChange={handleChange} />
            <Input type="email" placeholder='Email' required name='email' id='email' value={formData.email} onChange={handleChange} />
            <Input type="tel" placeholder='Phone Number' required name='number' id='number' value={formData.number} onChange={handleChange} />
            <select name="platform" id="platform" value={formData.platform} onChange={handleChange} className="w-full rounded-2xl border border-solid mb-5 border-gray py-3 px-5 text-base leading-tight font-normal text-light-gray placeholder:text-base placeholder:text-light-gray focus:outline-none focus:border-spacing-2 focus:border-light-gray">
                <option value="social-media">Social Media</option>
                <option value="television">Television</option>
                <option value="radio">Radio</option>
            </select>
            <textarea name="message" id="message" cols="30" rows="5" placeholder='Your Message' className="w-full rounded-2xl border border-solid mb-5 border-gray py-3 px-5 text-base leading-tight font-normal text-light-gray placeholder:text-base placeholder:text-light-gray focus:outline-none focus:border-spacing-2 focus:border-light-gray" value={formData.message} onChange={handleChange}></textarea>
            <button className='bg-red w-full rounded-full py-2 text-center text-base text-white uppercase leading-tight mb-8' type='submit' onClick={handleSubmit}>Send</button>
        </form>
    )
}

export default ContactForm