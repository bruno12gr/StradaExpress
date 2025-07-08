"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contato" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold font-montserrat mb-8">Fale Conosco</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Pronto para transportar sua carga? Entre em contato conosco e receba um orçamento personalizado.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-500 p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400">E-mail</p>
                  <a
                    href="mailto:contato@stradaexpress.com.br"
                    className="text-xl hover:text-red-500 transition-colors"
                  >
                    contato@stradaexpress.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-red-500 p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400">Telefone</p>
                  <a href="tel:+5519999999999" className="text-xl hover:text-red-500 transition-colors">
                    (19) 9999-9999
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 text-black">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg border-gray-300 focus:border-red-500"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg border-gray-300 focus:border-red-500"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Seu telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg border-gray-300 focus:border-red-500"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Descreva sua necessidade de frete (origem, destino, tipo de carga, etc.)"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="text-lg border-gray-300 focus:border-red-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white h-12 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
