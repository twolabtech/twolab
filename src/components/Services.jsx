import { FiCode, FiZap, FiLink, FiCheck } from 'react-icons/fi'

const Services = () => {
  const services = [
    {
      icon: <FiCode size={40} />,
      title: 'Desenvolvimento de Sistemas',
      description: 'Criamos sistemas personalizados que se adaptam perfeitamente às necessidades do seu negócio.',
      features: [
        'Aplicações Web e Mobile',
        'Sistemas de Gestão (ERP, CRM)',
        'Plataformas E-commerce',
        'APIs RESTful e GraphQL',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FiZap size={40} />,
      title: 'Automações Empresariais',
      description: 'Automatize processos repetitivos e ganhe eficiência operacional com nossas soluções inteligentes.',
      features: [
        'RPA (Robotic Process Automation)',
        'Workflows automatizados',
        'Integração com IA',
        'Análise de dados em tempo real',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FiLink size={40} />,
      title: 'Integrações de Sistemas',
      description: 'Conectamos suas ferramentas e sistemas para criar um ecossistema tecnológico integrado e eficiente.',
      features: [
        'Integração de APIs',
        'Sincronização de dados',
        'Middleware e ESB',
        'Integração Cloud',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-600 font-semibold text-sm">Nossos Serviços</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Soluções Completas em TI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços para transformar digitalmente o seu negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <FiCheck className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full py-3 px-6 border-2 border-gray-300 rounded-full font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Saiba mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

