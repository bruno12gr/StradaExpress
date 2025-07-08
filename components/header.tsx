"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold font-montserrat">
              Strada <span className="text-red-500">Express</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("avaliacoes")}
              className="hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Avaliações
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-500 hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left hover:text-red-500 transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left hover:text-red-500 transition-colors duration-200 font-medium"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left hover:text-red-500 transition-colors duration-200 font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("avaliacoes")}
                className="text-left hover:text-red-500 transition-colors duration-200 font-medium"
              >
                Avaliações
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left hover:text-red-500 transition-colors duration-200 font-medium"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
