import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Nome, email e mensagem são obrigatórios" }, { status: 400 })
    }

    // Simulação de envio de email (para desenvolvimento)
    // Em produção, você pode usar Resend, SendGrid, ou outro serviço
    console.log("📧 Novo contato recebido:")
    console.log(`Nome: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Telefone: ${phone}`)
    console.log(`Mensagem: ${message}`)

    // Simular delay de processamento
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Para implementar o envio real, descomente e configure:
    /*
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'contato@stradaexpress.com.br',
        to: 'bhcorreia11@gmail.com',
        subject: `Novo contato de ${name}`,
        html: `
          <h2>Novo contato do site</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message}</p>
        `,
      }),
    })

    if (!response.ok) {
      throw new Error('Falha ao enviar email')
    }
    */

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    })
  } catch (error) {
    console.error("Erro ao processar contato:", error)
    return NextResponse.json({ error: "Erro interno do servidor. Tente novamente mais tarde." }, { status: 500 })
  }
}
