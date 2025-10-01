import { FiStar, FiDollarSign, FiZap, FiAward } from 'react-icons/fi'

const EarlyBird = () => {
  const benefits = [
    {
      icon: <FiDollarSign size={32} />,
      title: 'Condições Especiais',
      description: 'Descontos exclusivos para os primeiros clientes da TwoLab',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FiStar size={32} />,
      title: 'Prioridade Total',
      description: 'Seu projeto terá atenção integral e dedicação exclusiva da equipe',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <FiZap size={32} />,
      title: 'Suporte Premium',
      description: 'Suporte prioritário e manutenção estendida sem custos adicionais',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FiAward size={32} />,
      title: 'Parceria Estratégica',
      description: 'Cresça junto com a gente e tenha voz ativa no nosso desenvolvimento',
      gradient: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full">
            <span className="text-white font-semibold text-sm">✨ Oportunidade Única</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Vantagens de Ser um dos Primeiros
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Estamos começando nossa jornada e queremos você como parceiro nessa história. 
            Aproveite benefícios exclusivos por ser um dos pioneiros!
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} text-white mb-4`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Não perca essa oportunidade! 🚀
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Seja um dos primeiros clientes e ajude a construir cases de sucesso conosco. 
            Oferecemos condições imperdíveis e um compromisso total com o sucesso do seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Quero aproveitar essa oferta
            </a>
            <a
              href="https://wa.me/5585996302558"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EarlyBird

