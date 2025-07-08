"use client"

import { ReviewCard } from "@/components/review-card"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const reviews = [
    {
      name: "João Silva",
      location: "São Paulo/SP",
      rating: 5,
      comment: "Entrega pontual! Terceiro frete com eles e sempre superaram as expectativas.",
    },
    {
      name: "Maria Santos",
      location: "Campinas/SP",
      rating: 5,
      comment: "Profissionais sérios e confiáveis. Recomendo para qualquer tipo de carga.",
    },
    {
      name: "Carlos Oliveira",
      location: "Sorocaba/SP",
      rating: 5,
      comment: "Preço justo e entrega rápida. Já uso há mais de um ano e nunca tive problemas.",
    },
    {
      name: "Ana Costa",
      location: "Jundiaí/SP",
      rating: 5,
      comment: "Cuidado especial com a mercadoria. Chegou tudo em perfeito estado.",
    },
    {
      name: "Roberto Lima",
      location: "Piracicaba/SP",
      rating: 5,
      comment: "Atendimento excelente desde o primeiro contato. Muito satisfeito!",
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="avaliacoes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-montserrat text-black mb-4">Quem Usa, Aprova!</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos clientes falam sobre nossos serviços
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Reviews container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
