import Image from "next/image"
import Link from "next/link"
import { Download, Sparkles, Brain, MessageSquare, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Image src="/images/nova-icon.png" alt="NOVA Icon" width={32} height={32} className="mr-2" />
          <span className="text-xl font-bold text-novaPurple-700">NOVA</span>
          <span className="sr-only">NOVA - Votre Assistant Virtuel</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Fonctionnalités
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            À Propos
          </Link>
          <Link href="#download" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Télécharger
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-novaPurple-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Image
                    src="/images/nova-logo.png"
                    alt="NOVA Logo"
                    width={200}
                    height={200}
                    className="mx-auto lg:mx-0 mb-4"
                  />
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center lg:text-left text-novaPurple-800">
                    Découvrez NOVA, Votre Assistant Virtuel Intelligent pour Windows
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl text-center lg:text-left">
                    NOVA est un assistant virtuel révolutionnaire conçu pour simplifier votre quotidien sur Windows.
                    Gérez vos tâches, obtenez des informations instantanées et automatisez vos routines avec une
                    facilité déconcertante.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-novaPurple-700 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-novaPurple-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger NOVA (Windows)
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                width="600"
                height="400"
                alt="NOVA Interface Screenshot"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-novaPurple-800">
                  Fonctionnalités Clés de NOVA
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  NOVA est doté de capacités avancées pour vous offrir une expérience utilisateur inégalée.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center p-6 text-center">
                <Sparkles className="h-12 w-12 text-novaPurple-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Intelligence Artificielle</CardTitle>
                <CardDescription>
                  NOVA utilise des algorithmes d'IA de pointe pour comprendre vos requêtes et fournir des réponses
                  pertinentes.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <Brain className="h-12 w-12 text-novaPurple-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Apprentissage Continu</CardTitle>
                <CardDescription>
                  Plus vous utilisez NOVA, plus il apprend vos préférences et s'adapte à vos besoins.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <MessageSquare className="h-12 w-12 text-novaPurple-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Interface Intuitive</CardTitle>
                <CardDescription>
                  Interagissez avec NOVA via une interface simple et conviviale, par texte ou par commande vocale.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <Settings className="h-12 w-12 text-novaPurple-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Personnalisation Avancée</CardTitle>
                <CardDescription>
                  Configurez NOVA pour qu'il réponde parfaitement à votre style de travail et à vos préférences.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <Download className="h-12 w-12 text-novaPurple-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Intégration Windows</CardTitle>
                <CardDescription>
                  NOVA s'intègre parfaitement à votre système d'exploitation Windows pour une expérience fluide.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <Sparkles className="h-12 w-12 text-novaPurple-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Mises à Jour Régulières</CardTitle>
                <CardDescription>
                  Bénéficiez de nouvelles fonctionnalités et améliorations grâce à des mises à jour fréquentes.
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-novaPurple-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-novaPurple-800">
                  À Propos de NOVA
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  NOVA a été créé avec la vision de rendre l'interaction avec votre ordinateur plus naturelle et
                  efficace. Nous croyons que la technologie doit s'adapter à l'utilisateur, et non l'inverse. C'est
                  pourquoi NOVA est conçu pour être intuitif, puissant et constamment en évolution pour répondre aux
                  défis du monde numérique.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Notre équipe est dédiée à l'innovation et à la satisfaction de nos utilisateurs. Nous nous engageons à
                  fournir un assistant virtuel fiable et performant qui vous aide à maximiser votre productivité et à
                  simplifier vos tâches quotidiennes.
                </p>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                width="600"
                height="400"
                alt="About NOVA"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>

        <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-white text-center">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-novaPurple-800">
                Prêt à Essayer NOVA ?
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Téléchargez NOVA dès aujourd'hui et transformez votre façon d'interagir avec votre ordinateur Windows.
                C'est rapide, facile et entièrement gratuit !
              </p>
              <Button className="inline-flex h-12 items-center justify-center rounded-md bg-novaPurple-700 px-10 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-novaPurple-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                <Download className="mr-2 h-5 w-5" />
                Télécharger NOVA Maintenant
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} NOVA. Tous droits réservés.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Politique de Confidentialité
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Conditions d'Utilisation
          </Link>
        </nav>
      </footer>
    </div>
  )
}
