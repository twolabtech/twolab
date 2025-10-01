import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-blue-600 font-semibold text-sm">Tecnologia que transforma</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Soluções Inovadoras em{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Tecnologia da Informação
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Desenvolvemos sistemas personalizados, automações inteligentes e integrações robustas 
              para impulsionar o seu negócio no mundo digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Conheça nossos serviços
                <FiArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Fale com um especialista
              </a>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 transform hover:scale-105 transition-transform">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">💻</span>
                        </div>
                        <div>
                          <p className="text-white font-semibold">Sistemas Personalizados</p>
                          <p className="text-blue-100 text-sm">Sob medida para seu negócio</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 transform hover:scale-105 transition-transform">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">⚡</span>
                        </div>
                        <div>
                          <p className="text-white font-semibold">Automações Inteligentes</p>
                          <p className="text-blue-100 text-sm">Otimize seus processos</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 transform hover:scale-105 transition-transform">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">🔗</span>
                        </div>
                        <div>
                          <p className="text-white font-semibold">Integrações Robustas</p>
                          <p className="text-blue-100 text-sm">Conecte seus sistemas</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

