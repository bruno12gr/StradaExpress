import { NextResponse } from "next/server"
import { Resend } from "resend"

// Inicializar Resend (você precisa instalar: npm install resend)
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Nome, email e mensagem são obrigatórios" }, { status: 400 })
    }

    // ENVIO REAL DE EMAIL usando Resend
    const emailData = await resend.emails.send({
      from: "contato@stradaexpress.com.br", // Deve ser um domínio verificado no Resend
      to: ["bhcorreia11@gmail.com"], // Seu email para receber os contatos
      subject: `Novo contato de ${name} - Site Strada Express`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Novo Contato - Site Strada Express
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Informações do Cliente:</h3>
            
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Mensagem:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Ação recomendada:</strong> Responda este cliente em até 24 horas para manter a qualidade do atendimento.
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="color: #6b7280; font-size: 12px; text-align: center;">
            Este email foi enviado automaticamente pelo formulário de contato do site Strada Express.<br>
            Data: ${new Date().toLocaleString("pt-BR")}
          </p>
        </div>
      `,
    })

    console.log("✅ Email enviado com sucesso:", emailData)

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      emailId: emailData.id,
    })
  } catch (error) {
    console.error("❌ Erro ao enviar email:", error)

    // Se for erro de API key ou configuração
    if (error.message?.includes("API key")) {
      return NextResponse.json(
        {
          error: "Erro de configuração do servidor. Contate o administrador.",
        },
        { status: 500 },
      )
    }

    return NextResponse.json(
      {
        error: "Erro ao enviar mensagem. Tente novamente mais tarde.",
      },
      { status: 500 },
    )
  }
}
