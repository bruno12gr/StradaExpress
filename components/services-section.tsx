import { Package, Truck, CheckCircle } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Package,
      title: "Pedido",
      description: "Recebemos sua solicitação e analisamos todos os detalhes da carga",
    },
    {
      icon: Truck,
      title: "Coleta",
      description: "Coletamos a carga em Indaiatuba com pontualidade e cuidado",
    },
    {
      icon: CheckCircle,
      title: "Entrega",
      description: "Entregamos com rapidez e segurança no destino final",
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-montserrat text-black mb-4">Como Funciona</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Processo simples e eficiente para garantir que sua carga chegue ao destino
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <service.icon className="w-12 h-12 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Vehicle highlight */}
        <div id="sobre" className="bg-black text-white rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold font-montserrat mb-4">Nossa Frota</h3>
          <p className="text-xl text-gray-300 mb-6">Veículos especializados para transporte seguro</p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="bg-red-500 px-6 py-2 rounded-full font-semibold">Fiat Strada</span>
            <span className="bg-red-500 px-6 py-2 rounded-full font-semibold">Caminhões de Pequeno Porte</span>
          </div>
        </div>
      </div>
    </section>
  )
}
