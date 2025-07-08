"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative bg-black text-white py-20 lg:py-32 overflow-hidden">
      {/* Decorative diagonal lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 -left-20 w-96 h-1 bg-gray-600 transform rotate-45"></div>
          <div className="absolute top-40 -right-20 w-96 h-1 bg-gray-600 transform -rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-96 h-1 bg-gray-600 transform rotate-45"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold font-montserrat leading-tight">
                Fretes de Cargas Secas até <span className="text-red-500">2 Toneladas</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 font-light">
                Agilidade e segurança no transporte: de Indaiatuba para todo o Brasil
              </p>
            </div>

            <Button
              onClick={scrollToContact}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Truck Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Fiat Strada - Veículo para fretes"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-500 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
