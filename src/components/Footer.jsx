import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Empresa: [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Serviços', href: '#services' },
      { name: 'Portfólio', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    Serviços: [
      { name: 'Desenvolvimento', href: '#services' },
      { name: 'Automações', href: '#services' },
      { name: 'Integrações', href: '#services' },
      { name: 'Consultoria', href: '#' },
    ],
    Suporte: [
      { name: 'Contato', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Documentação', href: '#' },
      { name: 'Suporte Técnico', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: <FiGithub size={24} />, href: '#', label: 'GitHub' },
    { icon: <FiLinkedin size={24} />, href: '#', label: 'LinkedIn' },
    { icon: <FiInstagram size={24} />, href: '#', label: 'Instagram' },
    { icon: <FiTwitter size={24} />, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TL</span>
              </div>
              <span className="text-2xl font-bold text-white">TwoLab</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Startup cearense transformando ideias em soluções tecnológicas inovadoras. 
              Desenvolvimento de sistemas, automações e integrações de alta qualidade.
              Presente em Fortaleza e Iguatu - CE.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} TwoLab. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

