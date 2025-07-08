import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json()

  // 1. Configurar o transporte de email
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Ou seu provedor SMTP
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  try {
    // 2. Enviar o email
    await transporter.sendMail({
      from: `"Site Strada Express" <${process.env.EMAIL_USER}>`,
      to: 'bhcorreia11@gmail.com',
      subject: `Novo contato de ${name}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        Mensagem: ${message}
      `,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem' },
      { status: 500 }
    )
  }
}