import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, Clock, Eye, Calendar, Tag } from 'lucide-react'

const Blog = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const articles = [
    {
      id: 1,
      title: "Guide Complet : Comment Maximiser vos Primes de Parrainage Bancaire en 2025",
      excerpt: "Découvrez toutes les astuces pour cumuler jusqu'à 500€ de primes en changeant de banque. Stratégies légales et optimisées pour maximiser vos gains.",
      content: `
# Guide Complet : Comment Maximiser vos Primes de Parrainage Bancaire en 2025

## Introduction

Le parrainage bancaire est devenu l'un des moyens les plus efficaces d'obtenir des primes substantielles lors de l'ouverture d'un nouveau compte. En 2025, les banques digitales rivalisent d'offres attractives pour attirer de nouveaux clients.

## Les Meilleures Stratégies

### 1. Timing Optimal
- Profitez des périodes promotionnelles (rentrée, fin d'année)
- Surveillez les offres spéciales limitées dans le temps
- Évitez les périodes de faible activité bancaire

### 2. Cumul Intelligent
- Boursobank : jusqu'à 220€ avec le code ARNA7525
- Revolut : 50€ de bonus de bienvenue
- N26 : offres variables selon les périodes

### 3. Conditions à Respecter
- Maintenir le compte ouvert minimum 6 mois
- Effectuer au moins 5 transactions par mois
- Domicilier ses revenus si demandé

## Erreurs à Éviter

- Ne pas lire les conditions générales
- Fermer le compte trop rapidement
- Oublier d'utiliser le code parrain

## Conclusion

Avec une stratégie bien pensée, il est possible de cumuler plusieurs centaines d'euros en primes de parrainage tout en bénéficiant de services bancaires de qualité.
      `,
      category: "Guide",
      date: "19 Juillet 2025",
      readTime: "8 min",
      views: "12.4k",
      featured: true
    },
    {
      id: 2,
      title: "Boursobank vs Revolut vs N26 : Le Comparatif Complet 2025",
      excerpt: "Analyse détaillée des 3 meilleures banques digitales : frais, services, avantages et inconvénients pour vous aider à choisir.",
      content: `
# Boursobank vs Revolut vs N26 : Le Comparatif Complet 2025

## Vue d'ensemble

Les banques digitales ont révolutionné le secteur bancaire français. Voici notre comparatif des trois leaders du marché.

## Boursobank
### Avantages
- Carte gratuite à vie
- Prime de parrainage jusqu'à 220€
- Service client français
- Assurances incluses

### Inconvénients
- Conditions de revenus pour certaines cartes
- Moins d'options crypto

## Revolut
### Avantages
- Excellent pour les voyages
- Crypto-monnaies intégrées
- Cartes virtuelles illimitées

### Inconvénients
- Support client parfois lent
- Frais cachés sur certaines opérations

## N26
### Avantages
- Interface très intuitive
- Notifications instantanées
- Bonne intégration européenne

### Inconvénients
- Frais sur les retraits fréquents
- Moins d'assurances incluses

## Notre Recommandation

Pour les utilisateurs français, Boursobank reste le meilleur choix grâce à ses services complets et sa prime de parrainage attractive.
      `,
      category: "Comparatif",
      date: "18 Juillet 2025",
      readTime: "6 min",
      views: "8.7k",
      featured: false
    },
    {
      id: 3,
      title: "10 Astuces pour Économiser 1000€ par An avec sa Banque",
      excerpt: "Des conseils pratiques et peu connus pour réduire drastiquement vos frais bancaires et optimiser vos finances personnelles.",
      content: `
# 10 Astuces pour Économiser 1000€ par An avec sa Banque

## 1. Négociez vos frais bancaires
Contactez votre conseiller chaque année pour renégocier vos frais. La plupart des banques acceptent de faire des gestes commerciaux.

## 2. Utilisez les banques en ligne
Les banques digitales comme Boursobank offrent des services gratuits équivalents aux banques traditionnelles.

## 3. Optimisez vos assurances
Comparez les assurances incluses dans vos cartes bancaires avec vos contrats existants.

## 4. Surveillez vos découverts
Les agios peuvent coûter très cher. Mettez en place des alertes SMS.

## 5. Profitez des primes de parrainage
Changez de banque régulièrement pour bénéficier des primes (respectez les conditions).

## 6. Utilisez les cartes sans frais à l'étranger
Évitez les commissions de change avec les bonnes cartes.

## 7. Automatisez vos virements
Réduisez les frais de virement en automatisant vos paiements récurrents.

## 8. Choisissez la bonne carte
Adaptez votre carte à votre profil d'utilisation.

## 9. Négociez votre crédit immobilier
Renégociez ou faites racheter votre prêt si les taux ont baissé.

## 10. Utilisez les livrets défiscalisés
Maximisez vos placements sur les livrets réglementés.

Ces astuces peuvent vous faire économiser plus de 1000€ par an !
      `,
      category: "Astuce",
      date: "17 Juillet 2025",
      readTime: "4 min",
      views: "15.2k",
      featured: false
    },
    {
      id: 4,
      title: "PEA vs Assurance Vie : Que Choisir en 2025 ?",
      excerpt: "Comparaison complète des deux enveloppes fiscales les plus populaires pour optimiser vos investissements et votre fiscalité.",
      content: `
# PEA vs Assurance Vie : Que Choisir en 2025 ?

## Le Plan d'Épargne en Actions (PEA)

### Avantages
- Exonération d'impôts après 5 ans
- Plafond de 150 000€
- Investissement en actions européennes

### Inconvénients
- Limitation géographique
- Pas de sortie en rente
- Clôture en cas de retrait avant 5 ans

## L'Assurance Vie

### Avantages
- Fiscalité attractive après 8 ans
- Transmission facilitée
- Diversification internationale possible
- Sortie en rente possible

### Inconvénients
- Frais de gestion plus élevés
- Fiscalité complexe
- Rendement des fonds euros en baisse

## Notre Stratégie Recommandée

1. **Jeunes investisseurs** : Commencer par un PEA pour les actions
2. **Investisseurs confirmés** : Combiner PEA et assurance vie
3. **Préparation retraite** : Privilégier l'assurance vie

## Conclusion

Les deux enveloppes sont complémentaires. L'idéal est de les utiliser conjointement selon vos objectifs.
      `,
      category: "Investissement",
      date: "16 Juillet 2025",
      readTime: "7 min",
      views: "6.9k",
      featured: false
    },
    {
      id: 5,
      title: "Nouvelles Réglementations Bancaires 2025 : Ce qui Change",
      excerpt: "Tour d'horizon des nouvelles lois qui impactent vos comptes bancaires, vos investissements et vos droits en tant que consommateur.",
      content: `
# Nouvelles Réglementations Bancaires 2025 : Ce qui Change

## DSP3 : La Nouvelle Directive Européenne

La troisième directive sur les services de paiement renforce la sécurité des transactions en ligne.

### Principales Nouveautés
- Authentification forte obligatoire
- Plafonds de paiement sans contact relevés
- Nouvelles protections pour les virements instantanés

## Lutte Anti-Blanchiment Renforcée

### Impact pour les Particuliers
- Justificatifs supplémentaires pour les gros virements
- Surveillance accrue des transactions atypiques
- Délais de traitement parfois allongés

## Open Banking Étendu

### Nouveaux Services
- Agrégation de comptes facilitée
- Comparateurs de frais automatisés
- Conseils financiers personnalisés

## Crypto-Monnaies : Nouveau Cadre Réglementaire

### Règlement MiCA
- Encadrement des stablecoins
- Obligations pour les plateformes d'échange
- Protection renforcée des investisseurs

## Conseils Pratiques

1. Mettez à jour vos applications bancaires
2. Vérifiez vos plafonds de paiement
3. Préparez vos justificatifs de revenus
4. Informez-vous sur vos nouveaux droits

Ces changements visent à mieux protéger les consommateurs tout en modernisant le secteur bancaire.
      `,
      category: "Actualité",
      date: "15 Juillet 2025",
      readTime: "5 min",
      views: "4.1k",
      featured: false
    },
    {
      id: 6,
      title: "Comment Négocier ses Frais Bancaires : Script Inclus",
      excerpt: "La méthode étape par étape pour réduire vos frais, avec exemples concrets et script de négociation prêt à utiliser.",
      content: `
# Comment Négocier ses Frais Bancaires : Script Inclus

## Préparation de la Négociation

### 1. Analysez vos frais actuels
- Relevés des 12 derniers mois
- Comparaison avec la concurrence
- Calcul du coût total annuel

### 2. Préparez vos arguments
- Ancienneté client
- Revenus domiciliés
- Produits souscrits
- Offres concurrentes

## Script de Négociation

### Ouverture
"Bonjour, je souhaite faire le point sur mes frais bancaires. Je suis client depuis X années et j'aimerais optimiser ma relation bancaire."

### Présentation des faits
"J'ai calculé que mes frais s'élèvent à X€ par an. J'ai vu que vos concurrents proposent des tarifs plus avantageux."

### Demande concrète
"Pourriez-vous me proposer une réduction sur mes frais de tenue de compte et ma cotisation carte ?"

### Négociation
"Si vous ne pouvez pas baisser ces frais, quels autres avantages pourriez-vous m'offrir ?"

### Conclusion
"Je vais réfléchir à votre proposition. Puis-je avoir un délai de réflexion ?"

## Alternatives si Refus

1. Demander un autre conseiller
2. Menacer de partir (avec preuves)
3. Effectivement changer de banque

## Résultats Attendus

Avec cette méthode, 70% des clients obtiennent une réduction de leurs frais bancaires.
      `,
      category: "Tutoriel",
      date: "14 Juillet 2025",
      readTime: "3 min",
      views: "9.8k",
      featured: false
    }
  ]

  const categories = ['all', 'Guide', 'Comparatif', 'Astuce', 'Investissement', 'Actualité', 'Tutoriel']

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  const [selectedArticle, setSelectedArticle] = useState(null)

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-6 py-4">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedArticle(null)}
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Button>
          </div>
        </header>

        {/* Article Content */}
        <article className="container mx-auto px-6 py-12 max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium">
                {selectedArticle.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {selectedArticle.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {selectedArticle.readTime} de lecture
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {selectedArticle.views} vues
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {selectedArticle.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {selectedArticle.excerpt}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-line text-gray-800 leading-relaxed">
              {selectedArticle.content}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à profiter des meilleures offres bancaires ?
            </h3>
            <p className="mb-6 opacity-90">
              Utilisez le code ARNA7525 et obtenez jusqu'à 220€ offerts avec Boursobank
            </p>
            <a 
              href="https://bour.so/p/rxldlayolpb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              J'ouvre mon compte maintenant
            </a>
          </div>
        </article>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Button 
                variant="ghost" 
                onClick={onBack}
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour à l'accueil
              </Button>
              <h1 className="text-4xl font-bold text-gray-900">📰 Blog Financier</h1>
              <p className="text-xl text-gray-600 mt-2">
                Conseils d'experts et guides pour optimiser vos finances
              </p>
            </div>
            <div className="hidden md:block">
              <a 
                href="https://bour.so/p/rxldlayolpb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg inline-block"
              >
                🎁 Je profite de la prime
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Categories Filter */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full ${
                  selectedCategory === category 
                    ? 'bg-indigo-600 text-white' 
                    : 'border-indigo-200 text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <Tag className="w-4 h-4 mr-2" />
                {category === 'all' ? 'Tous les articles' : category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <article 
              key={article.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
                article.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              onClick={() => setSelectedArticle(article)}
            >
              <div className={`bg-gradient-to-br from-indigo-500 to-purple-600 ${
                article.featured ? 'h-64' : 'h-48'
              } rounded-t-2xl relative flex items-center justify-center text-white`}>
                <div className="text-6xl">📖</div>
                <div className="absolute top-4 left-4 bg-white/90 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 text-gray-600 px-3 py-1 rounded-full text-sm">
                  {article.date}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className={`font-bold text-gray-900 mb-3 line-clamp-2 ${
                  article.featured ? 'text-2xl' : 'text-xl'
                }`}>
                  {article.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {article.views}
                    </span>
                  </div>
                  <span className="text-indigo-600 font-medium hover:text-indigo-700">
                    Lire l'article →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            🎯 Prêt à profiter de la meilleure offre bancaire ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Utilisez le code ARNA7525 et obtenez jusqu'à 220€ offerts avec Boursobank
          </p>
          <a 
            href="https://bour.so/p/rxldlayolpb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            💰 Ouvrir mon compte avec prime
          </a>
          <p className="text-sm mt-6 opacity-80">
            ⏰ Offre limitée • 🎁 Prime garantie • ✅ 100% gratuit
          </p>
        </div>
      </section>
    </div>
  )
}

export default Blog

