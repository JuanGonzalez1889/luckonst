import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Users } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"
import Link from "next/link" 

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section relative text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] bg-repeat opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight hero-text-white">
                Especialistas en <span className="text-secondary">Techos Metálicos</span> y Zinguería
              </h1>
              <p className="text-xl leading-relaxed hero-text-blue">
                Nos especializamos en la fabricación y montaje de techos metálicos y de madera, abarcando también el sector de zinguería, tanto para proyectos domiciliarios como industriales.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#servicios" legacyBehavior>
    <a
      style={{ zIndex: "1000" }}
      className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg flex items-center font-semibold transition-colors"
    >
      Ver Nuestros Servicios
      <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  </Link>
              <a
          href="https://wa.me/+5493417052233" // Reemplaza con tu número de WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          style={{ zIndex: "1000" }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-white hover:bg-white hover:text-primary bg-transparent hero-text-white"
            style={{ backgroundColor: "transparent", borderColor: "#ffffff" }}
          >
            Contactar por WhatsApp
          </Button>
        </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-400/30">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold hero-text-white">7+</div>
                <div className="text-sm hero-text-blue-light">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold hero-text-white">60.000+</div>
                <div className="text-sm hero-text-blue-light">M2 realizados</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold hero-text-white">100%</div>
                <div className="text-sm hero-text-blue-light">Clientes Satisfechos</div>
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
