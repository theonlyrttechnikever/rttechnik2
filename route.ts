import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, { message: "Message is required." }),
  language: z.enum(["en", "pl"]),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validation = contactSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.issues[0].message }, { status: 400 })
    }

    const { name, email, phone, company, message, language } = validation.data

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: process.env.EMAIL_SERVER_PORT === "465",
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    const subject =
      language === "pl" ? `Nowa wiadomość kontaktowa od ${name}` : `New Contact Form Message from ${name}`

    const htmlBody = `
            <h1>New Contact Form Submission</h1>
            <p><strong>Language:</strong> ${language.toUpperCase()}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Company:</strong> ${company || "N/A"}</p>
            <hr>
            <h2>Message:</h2>
            <p>${message.replace(/\n/g, "<br>")}</p>
        `

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_FROM || process.env.EMAIL_SERVER_USER}>`,
      replyTo: email,
      to: "edmundkavu979@gmail.com",
      subject: subject,
      html: htmlBody,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email. Please check server configuration." }, { status: 500 })
  }
}