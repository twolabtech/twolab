import { FiAward, FiUsers, FiTrendingUp, FiHeart } from 'react-icons/fi'

const About = () => {
  const stats = [
    { icon: <FiAward size={32} />, number: '150+', label: 'Projetos Entregues' },
    { icon: <FiUsers size={32} />, number: '80+', label: 'Clientes Satisfeitos' },
    { icon: <FiTrendingUp size={32} />, number: '95%', label: 'Taxa de Satisfação' },
    { icon: <FiHeart size={32} />, number: '10+', label: 'Anos de Experiência' },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-blue-600 font-semibold text-sm">Sobre Nós</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transformando Ideias em{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Soluções Digitais
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Somos uma startup cearense especializada em desenvolvimento de software, automações e integrações de sistemas. 
              Com representantes em Fortaleza e Iguatu, oferecemos soluções tecnológicas inovadoras que impulsionam 
              o crescimento e a eficiência dos nossos clientes em todo o Ceará e Brasil.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nossa missão é democratizar o acesso à tecnologia de qualidade, entregando excelência em cada projeto 
              com as melhores práticas do mercado e tecnologias de ponta para criar sistemas robustos, escaláveis e de fácil manutenção.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>Metodologia Ágil:</strong> Trabalhamos com Scrum e Kanban para entregas rápidas e eficientes
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>Tecnologias Modernas:</strong> Utilizamos as ferramentas mais atuais do mercado
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <strong>Suporte Contínuo:</strong> Oferecemos manutenção e suporte após a entrega do projeto
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-blue-600 mb-4">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
              <p className="leading-relaxed">
                Ser referência em soluções tecnológicas no Ceará e no Brasil, reconhecida pela qualidade, 
                inovação e compromisso com o sucesso dos nossos clientes, impulsionando a transformação digital 
                das empresas brasileiras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

