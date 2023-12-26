import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
})
export async function POST(request) {

    try {
        const res = await request.json()
        const { name, email, number, platform, message } = res
        const mailOption = {
            from: email,
            to: 'wasiuadekunle73@gmail.com', // Replace with your recipient email
            subject: 'New Contact Form Submission',
            html: `
            <h2>You have received a new contact form submission on your website.Below are the details:</h2>
        
               <h4>Name: ${name}</h4>   
               <h4>Email: ${email}</h4>   
               <h4>Phone: ${number}</h4>   
               <h4>Where you hear about us: ${platform}</h4>   
               <h4>Message: ${message}</h4> 
               <p>Please respond to the inquiry at your earliest convenience.</p><br/><br/>
               <p>Thank you.</p><br/><br/>
               <p>Best regards,</p>
               <p>BTQ store</p>
            `
        }
        await transporter.sendMail(mailOption)
        return Response.json("Form submitted successfully")
    } catch (error) {
        console.log("Error submiting form", error)
        return Response.json("Error submiting form")
    }

}


