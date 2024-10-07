import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Check } from 'lucide-react'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'process', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">PolymerTech</h1>
          <nav className="hidden md:flex space-x-6">
            {['Home', 'About', 'Products', 'Process', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-lg ${activeSection === item.toLowerCase() ? 'text-blue-600 font-semibold' : 'text-gray-600'} hover:text-blue-500 transition-colors`}
              >
                {item}
              </button>
            ))}
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden pt-20">
          <nav className="flex flex-col items-center space-y-6 py-6">
            {['Home', 'About', 'Products', 'Process', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-xl text-gray-800 hover:text-blue-500 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-20">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Innovating Polymers</h2>
            <p className="text-xl md:text-2xl mb-8">Shaping the future with advanced plastic solutions</p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors flex items-center"
            >
              Get in Touch <ArrowRight className="ml-2" />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About PolymerTech</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="https://lh3.googleusercontent.com/gg/ACM6BItD07pbwqng_M0PUPC64CJZmWX3hrD_o9bu5mROybVSwBaiOLMfAqa098tkVQCVFiJ0oWDNE-J2Wb6PIQV27-o8J3mOcFiRSk8gHn5EVr8I0EmhGzq_awnssE-C6ewzBUn81B0l-s4TNXW1ux_fnSBEoouzq3b9m0iB9O2JT9j_e1Fo5x5z?height=300&width=400" alt="About PolymerTech" className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg text-gray-700 mb-4">
                  PolymerTech is at the forefront of plastic polymer manufacturing, delivering innovative solutions for industries worldwide. With cutting-edge technology and a commitment to sustainability, we're shaping a better future through advanced materials.
                </p>
                <ul className="space-y-2">
                  {[
                    'Over 20 years of industry experience',
                    'State-of-the-art manufacturing facilities',
                    'Commitment to eco-friendly practices',
                    'Serving diverse industries globally',
                    'Continuous research and development',
                    'ISO 9001 and ISO 14001 certified'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Check className="text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'High-Density Polyethylene', image: 'https://lh3.googleusercontent.com/gg/ACM6BIsUfH3sLserXXmi2kmE87VQqLrkNbBF_dT8q_9Vw5PfmeBM7d0EEOlpZK176mbLOXD0QeXdKayVTIRJ_V8bNbT8xCQFoDY5ZufMdkGcnEB8Q0fD3tX7nHm0Oog9-OeNaKYGXMqWz5xw007LYRiKkEpnlIACra98-4KecLVLy4-z7J94VeeB?height=200&width=300', description: 'Durable and versatile material for various applications.', applications: ['Packaging', 'Containers', 'Pipes'] },
                { name: 'Polypropylene', image: 'https://lh3.googleusercontent.com/gg/ACM6BIvAgI10WVDAoGWjggqXwTFLIPdWRLkslUDafkegAqO0mnft8yzDvhoVpMbxVGXqcfO4JlXmUDxKxogWHNR-Ns-3UD8CV-Atupz4KkoLTsly7khkuce4-GTgfqPaV1BrjsJEvlkIVcISeL5dHdaPq08k9Z_pRHEXMA6MGGux_xZpedF1e-F_?height=200&width=300', description: 'Lightweight and heat-resistant polymer for packaging and automotive parts.', applications: ['Food packaging', 'Automotive parts', 'Textiles'] },
                { name: 'Polyvinyl Chloride', image: 'https://lh3.googleusercontent.com/gg/ACM6BIsanusLpFG7Y2hAJxqsVNar6POFqcFrCsJh_8f3sO7kOgY7-b6e_cuiD-ITr0zqKIpHWjgE99R0rPzeswChIB4wT1i-hg6hxTmRAbFc6r6vbyIueiak0V5EoQwl05updF2Di9ws4nio97DWHMsIzu2WRM2ijfJNNAzTags6f7gSiLBqhpzi?height=200&width=300', description: 'Widely used in construction and healthcare products.', applications: ['Construction', 'Medical devices', 'Electrical insulation'] },
              ].map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <h4 className="font-semibold mb-2">Applications:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {product.applications.map((app, i) => (
                        <li key={i}>{app}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing Process Section */}
        <section id="process" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Manufacturing Process</h2>
            <div className="flex flex-col items-center">
              {[
                { step: 1, title: 'Raw Material Selection', description: 'Carefully choosing high-quality polymers and additives.', details: 'We source the finest raw materials from trusted suppliers, ensuring consistency and quality in our products.' },
                { step: 2, title: 'Compounding', description: 'Blending materials to achieve desired properties.', details: 'Our state-of-the-art compounding equipment allows us to create custom blends tailored to specific applications.' },
                { step: 3, title: 'Molding', description: 'Shaping the polymer into various forms using advanced techniques.', details: 'We utilize injection molding, extrusion, and other cutting-edge processes to create precise and complex shapes.' },
                { step: 4, title: 'Quality Control', description: 'Rigorous testing to ensure product excellence.', details: 'Every batch undergoes thorough testing for mechanical properties, chemical resistance, and dimensional accuracy.' },
              ].map((step, index) => (
                <div key={index} className="flex items-start mb-12 last:mb-0">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <p className="text-sm text-gray-500">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <select id="subject" name="subject" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center">
                  Send Message <ArrowRight className="ml-2" />
                </button>
              </form>
            </div>
            <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Phone size={24} className="text-blue-500 mr-2" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail size={24} className="text-blue-500 mr-2" />
                <span>info@polymertech.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={24} className="text-blue-500 mr-2" />
                <span>123 Polymer St, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">PolymerTech</h3>
              <p className="text-gray-400">Innovating the future of plastics with cutting-edge polymer solutions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Products', 'Process', 'Contact'].map((item) => (
                  <li key={item}>
                    <button onClick={() => scrollToSection(item.toLowerCase())} className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a key={social} href={`#${social}`} className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">{social}</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 PolymerTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}