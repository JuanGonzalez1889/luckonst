import { CheckCircle, Wrench, Building, Truck } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const features = [
    {
      icon: Wrench,
      title: "Materiales de Calidad",
      description: "Contamos con los mejores proveedores del mercado",
    },
    {
      icon: Building,
      title: "Proyectos Integrales",
      description: "Desde el diseño hasta la instalación completa de tu proyecto",
    },
    {
      icon: Truck,
      title: "Servicio Completo",
      description: "Incluimos transporte y montaje en todos nuestros servicios",
    },
  ]

  return (
    <section id="nosotros" className="py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/proyecto-cochera-luckonst2.jpeg"
              alt="Proyecto de cochera con estructura metálica - LUCKONST"
              width={600}
              height={500}
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-xl shadow-lg">
              <div className="text-white text-center">
                <div className="text-3xl font-bold">7+</div>
                <div className="text-sm">Años de experiencia</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">Sobre Nosotros</h2>
             
              <p className="text-lg text-gray-600 leading-relaxed">
                En Luckonst te ofrecemos la solución y el mejor asesoramiento para tu proyecto, más de 7 años trabajando con profesionales capacitados en cada área de nuestra empresa para brindar el mejor servicio del mercado.
              </p>
              <p className="text-xl font-semibold text-gray-600">
                Una trayectoria comprobable con más de 60.000 metros cuadrados realizados de techos, un equivalente a 15 canchas de fútbol.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                  <Wrench className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Materiales de Calidad</h3>
                  <p className="text-gray-600">Contamos con los mejores proveedores del mercado</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                  <Building className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Proyectos Integrales</h3>
                  <p className="text-gray-600">Desde el diseño hasta la instalación completa de tu proyecto</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                  <Truck className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Sistema LLAVE EN MANO</h3>
                  <p className="text-gray-600">Nos ocupamos de los materiales, logística y ejecución de obra</p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-gray-700">Calidad Garantizada</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-gray-700">Precios Competitivos</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-gray-700">Entrega Puntual</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-gray-700">Servicio Personalizado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
