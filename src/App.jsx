import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Copy, Check, Star, Shield, Zap, CreditCard, DollarSign, Smartphone } from 'lucide-react'
import Blog from './components/Blog.jsx'
import './App.css'

function App() {
  const [copied, setCopied] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(null)
  const [currentPage, setCurrentPage] = useState('home') // 'home' or 'blog'

  const copyCode = () => {
    navigator.clipboard.writeText('ARNA7525').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (currentPage === 'blog') {
    return <Blog onBack={() => setCurrentPage('home')} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 shadow-lg">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
            💰 BoursoParrain
          </a>
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost" 
              onClick={() => setCurrentPage('blog')}
              className="text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              📰 Blog
            </Button>
            <a 
              href="https://bour.so/p/rxldlayolpb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Ouvrir mon compte
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
  <div className="max-w-4xl mx-auto text-center">
    <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-12 shadow-2xl animate-float">
      <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
        🔥 Offre Limitée 2025
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
        Gagnez jusqu'à 220€ avec Boursobank
      </h1>
      
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Utilisez le code parrain exclusif et profitez de la meilleure banque digitale de France. 
        Ouverture de compte 100% gratuite et rapide.
      </p>

      {/* Code Box */}
      <div className="bg-indigo-50 border-4 border-dashed border-indigo-300 rounded-2xl p-8 mb-8 max-w-md mx-auto">
        <div className="text-3xl font-bold text-indigo-600 tracking-wider mb-4">
          ARNA7525
        </div>
        <Button 
          onClick={copyCode}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition-all duration-300"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copié !
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copier le code
            </>
          )}
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
        <a 
          href="https://bour.so/p/rxldlayolpb" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 shadow-lg text-center min-h-[60px] w-full sm:w-64 leading-snug whitespace-normal break-words"
          style={{ lineHeight: 1.3, wordBreak: "break-word" }}
        >
          🎯 J'ouvre mon compte{' '}
          <br className="sm:hidden" />
          maintenant
        </a>
        <a 
          href="#avantages" 
          onClick={() => scrollToSection("avantages")}
          className="flex items-center justify-center border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-4 rounded-full text-base font-semibold transition-all duration-300 border-2 min-h-[60px] w-full sm:w-64 leading-snug whitespace-normal break-words"
          style={{ lineHeight: 1.3, wordBreak: "break-word" }}
        >
          ✨ Voir les avantages
        </a>
      </div>
    </div>
  </div>
</section>

      {/* QR Code Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    📲 Accès rapide mobile
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Scannez ce QR code avec votre téléphone pour profiter immédiatement de la prime de bienvenue chez Boursobank
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-indigo-600 font-semibold">
                    <span className="text-2xl">🎁</span>
                    <span>Jusqu'à 220€ offerts</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-4 border-dashed border-indigo-200 hover:border-indigo-400 transition-all duration-300 hover:scale-105">
                    <img 
                      src="/qr-parrainage.png" 
                      alt="QR Code parrainage Boursobank" 
                      className="w-48 h-48 object-contain"
                    />
                    <p className="text-center text-sm text-gray-600 mt-3 font-medium">
                      Code: ARNA7525
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="avantages" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Pourquoi choisir Boursobank ?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: "Carte bancaire gratuite",
                description: "Carte Visa ou Mastercard gratuite à vie, avec assurances incluses et paiements sans contact."
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Jusqu'à 220€ offerts",
                description: "Prime de bienvenue généreuse + bonus parrainage. L'offre la plus avantageuse du marché."
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Application mobile primée",
                description: "Interface intuitive, notifications en temps réel et gestion complète de vos finances."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Sécurité maximale",
                description: "Authentification biométrique, cryptage bancaire et protection contre la fraude."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Ouverture en 5 minutes",
                description: "Processus 100% digital, validation rapide et carte reçue sous 48h."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Service client 5⭐",
                description: "Conseillers disponibles 6j/7, chat en ligne et réponse garantie sous 2h."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Les avantages du parrainage
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "✅",
                title: "Jusqu'à 220 € de prime",
                description: "Prime de bienvenue + bonus parrainage"
              },
              {
                icon: "⏱️",
                title: "5 minutes pour s'inscrire",
                description: "Processus 100% digital et rapide"
              },
              {
                icon: "💳",
                title: "Carte bancaire gratuite",
                description: "Visa ou Mastercard à vie"
              },
              {
                icon: "🌐",
                title: "100 % en ligne",
                description: "Gestion complète depuis l'app"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4">
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="ouvrir" className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à rejoindre 4 millions de clients ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            N'attendez plus ! Cette offre exceptionnelle est limitée dans le temps.
          </p>
          <a 
            href="https://bour.so/p/rxldlayolpb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            🎯 J'ouvre mon compte Boursobank
          </a>
          <div className="mt-6 text-sm opacity-80">
            ⏰ Offre valable jusqu'au 31 décembre 2025
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Questions fréquentes
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Comment utiliser le code parrain ?",
                answer: "Lors de votre inscription sur Boursobank, saisissez le code ARNA7525 dans le champ \"Code parrain\" pour bénéficier de la prime de 90€ supplémentaires."
              },
              {
                question: "Quand vais-je recevoir ma prime ?",
                answer: "La prime de bienvenue est créditée après validation de votre dossier. Le bonus parrainage est versé sous 30 jours après ouverture effective du compte."
              },
              {
                question: "Y a-t-il des conditions particulières ?",
                answer: "Vous devez être un nouveau client Boursobank et résider en France. Aucun versement minimum n'est requis, mais vous devez conserver votre compte ouvert pendant au moins 6 mois."
              },
              {
                question: "La carte bancaire est-elle vraiment gratuite ?",
                answer: "Oui, la carte Visa Classic est gratuite à vie sans condition de revenus. Les cartes premium peuvent nécessiter des conditions de revenus spécifiques."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-indigo-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left font-semibold text-gray-900 hover:bg-indigo-100 transition-colors duration-200 flex justify-between items-center"
                >
                  {faq.question}
                  <span className={`transform transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <div className="container mx-auto px-6">
          <p className="mb-4">
            &copy; 2025 BoursoParrain - Code parrain Boursobank officiel. 
            Offre soumise aux conditions générales de Boursobank.
          </p>
          <p className="text-sm opacity-70">
            Ce site n'est pas affilié à Boursobank. Il s'agit d'un site de parrainage indépendant.
          </p>
        </div>
      </footer>

      {/* Sticky CTA */}
      <a 
        href="https://bour.so/p/rxldlayolpb" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-50"
      >
        💰 220€ offerts
      </a>
    </div>
  )
}

export default App



