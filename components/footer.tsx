export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo and Slogan */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold font-montserrat mb-2">
              Strada <span className="text-red-500">Express</span>
            </h3>
            <p className="text-gray-400 text-lg">Transporte que acelera seu negócio</p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">© 2025 Strada Express - Indaiatuba/SP. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
