"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Phone, Navigation } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      id: 1,
      number: "01",
      title: "Techos Modernos",
      slug: "techos-modernos",
      description: "Caracterizado por dar una vista minimalista y moderna con sus cincos modelos variados de Cenefas, pudiendo así también combinar el cieloraso entre madera y pvc. ",
      image: "/images/techos-modernos/imagen-5.jpg",
      features: ["Materiales Premium", "Diseño Personalizado", "Garantía"],
      category: "techos",
    },
    {
      id: 2,
      number: "02",
      title: "Moderno Traslúcido",
      slug: "moderno-translucido",
      description: "Pergolados con lamas de madera que filtran la luz natural creando ambientes únicos y sofisticados.",
      image: "/images/moderno-translucido/portada.jpg",
      features: ["Lamas de Madera", "Luz Filtrada", "Diseño Contemporáneo"],
      category: "techos",
    },
    {
      id: 3,
      number: "03",
      title: "Techo Tradicional",
      slug: "techos-madera",
      description:
        "Galerías y pergolados de madera natural con vigas vistas que aportan calidez y elegancia a tu hogar.",
      image: "/images/techos-madera/portada.jpg",
      features: ["Madera Natural", "Vigas Vistas", "Diseño Cálido"],
      category: "techos",
    },
    {
      id: 4,
      number: "04",
      title: "Tradicional Traslúcido",
      slug: "tradicional-translucido",
      description:
      "Siguiendo la línea del modelo tradicional en lo estético, esta opción se diferencia por el cambio de chapa metálica a traslucida, dando así entrada de luz natural a tus espacios.",
      image: "/images/tradicional-translucido/portada.jpg",
      features: ["Lamas Espaciadas", "Luz Natural Controlada", "Estructura Mixta"],
      category: "techos",
    },

    {
      id: 5,
      number: "05",
      title: "Zingueria industrial y domiciliaria",
      slug: "canaletas-bajadas",
      description: "Soluciones en chapa y ventilación: canales sin uniones, babetas, cenefas, cupertinas, conductos y extractores eólicos. Calidad y confianza en cada proyecto.",
      image: "/zingueria-5.webp",
      features: ["Materiales Galvanizados", "Instalación Profesional", "Mantenimiento Incluido"],
      category: "zingueria",
    },
   
  ]

  const techosServices = services.filter((service) => service.category === "techos")
  const zingueriaServices = services.filter((service) => service.category === "zingueria")

  type Service = {
    id: number;
    number: string;
    title: string;
    slug: string;
    description: string;
    image: string;
    features: string[];
    category: string;
  };

  interface ServiceItemProps {
    service: Service;
    index: number;
  }

  const ServiceItem: React.FC<ServiceItemProps> = ({ service, index }) => (
    <div className="relative">
      <div
        className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
          index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {/* Content */}
        <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
          {/* Number */}
          <div className="relative">
           <span
  className={`text-8xl lg:text-9xl font-bold absolute -top-8 -left-4 lg:-left-8 select-none ${
    service.category === "zingueria" ? "text-[#4ac165]" : "text-gray-500"
  }`}
>
  {service.number}
</span>
            <div className="relative z-10 pt-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{service.title}</h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>

          {/* Features */}
          <div className="space-y-3">
            {service.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center space-x-3">
    <div className="w-2 h-2 rounded-full flex-shrink-0 bg-[#4ac165]" />
    <span className="text-gray-700 font-medium">{feature}</span>
  </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Link href={`/servicios/${service.slug}`}>
              <Button
                variant="outline"
                className="group border-primary text-primary hover:bg-primary hover:text-white bg-transparent transition-all duration-300"
              >
                Ver Detalles
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Image with Zoom Effect */}
        <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              width={900}
              height={200}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105 h-110 lg:h-[40rem] object-[center_10%]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Decorative Elements */}
          <div
            className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl ${
              service.category === "zingueria" ? "bg-orange-500/20" : "bg-secondary/20"
            }`}
          ></div>
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="servicios" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales especializadas en construcción de techos y trabajos de zinguería,
            adaptándonos a las necesidades específicas de cada proyecto.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 text-center">Techos</h3>
          <div className="w-16 h-0.5 bg-secondary mx-auto mt-3"></div>
        </div>

        {/* Techos Services */}
        <div className="space-y-24 mb-32">
          {techosServices.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Elegant Divider */}
        <div className="relative mb-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white px-6">
              <div className="w-3 h-3 bg-gradient-to-r from-secondary to-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 text-center">Zinguería</h3>
          <div className="w-16 h-0.5 bg-[#4ac165] mx-auto mt-3"></div>
        </div>

        {/* Zinguería Services */}
        <div className="space-y-24">
          {zingueriaServices.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index + techosServices.length} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">¿Necesitas un presupuesto personalizado?</h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Contáctanos para recibir una cotización gratuita y sin compromiso. Nuestro equipo de expertos te asesorará
            en todo el proceso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
    href="https://wa.me/+5493417052233"
    target="_blank"
    rel="noopener noreferrer"
    style={{ zIndex: "1000" }}
  >
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Solicitar Cotización Gratuita
            </Button>
            </a>
            {/* <Link href="/proyectos">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Ver Proyectos Realizados
              </Button>
            </Link> */}
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Map */}
            <div className="relative h-96 lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.8347439911227!2d-60.66264441548809!3d-33.00916720039824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7abfd25c21567%3A0x23690b7a013ffd09!2sLuckonst!5e0!3m2!1ses!2sar!4v1753904902703!5m2!1ses!2sar"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de LUCKONST"
              />
            </div>

            {/* Location Info */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">Nuestra Ubicación</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Visítanos en nuestro taller y oficinas. Estamos ubicados en una zona de fácil acceso en Rosario,
                  Argentina.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Dirección</h4>
                    <p className="text-gray-600">
                      Battle y Ordoñez 2178
                      <br />
                      Rosario, Santa Fe, Argentina
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-secondary/10 p-2 rounded-lg flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Horarios de Atención</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Lunes a Viernes: 8:00 - 18:00</p>
                      <p>Sábados: 8:00 - 13:00</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Contacto Directo</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>📞 0341 507-2233</p>
                      <p>📱 WhatsApp: +54 9 341 705-2233</p>
                      <p>✉️ luckonstmateriales@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link href="https://maps.app.goo.gl/YiWtP9a9MvBVXrRA6" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    <Navigation className="w-4 h-4 mr-2" />
                    Cómo Llegar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

