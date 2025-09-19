"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ShieldCheck, Award, Clock, CheckCircle } from "lucide-react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Ajusta los nombres de las imágenes según los archivos reales en tu carpeta
const images = [
  "/images/zingueria/1.jpg",
  "/images/zingueria/2.jpg",
  "/images/zingueria/3.jpg",
  "/images/zingueria/4.jpg",
  "/images/zingueria/5.jpg",
  "/images/zingueria/6.jpg",
  "/images/zingueria/7.jpg",
  "/images/zingueria/8.jpg",
  "/images/zingueria/9.jpg",
  "/images/zingueria/10.jpg",
  "/images/zingueria/11.jpg",
  "/images/zingueria/12.jpg",
  "/images/zingueria/13.jpg",
  "/images/zingueria/14.jpg",
  "/images/zingueria/15.jpg",
  "/images/zingueria/16.jpg",
]

export default function CanaletasBajadasPage() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((current - 1 + images.length) % images.length)
  const next = () => setCurrent((current + 1) % images.length)

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Botón Volver a Servicios */}
          <div className="mb-8 mt-16">
            <Link href="/#servicios" className="inline-flex items-center text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Servicios
            </Link>
          </div>
          <section className="py-12 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Carrusel de imágenes */}
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src={images[current]}
                      alt={`Canaletas y Bajadas Pluviales ${current + 1}`}
                      width={900}
                      height={400}
                      className="w-full h-110 lg:h-[40rem] object-cover object-[center_10%] transition-all duration-500"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-4 flex justify-between px-4">
                    <Button variant="outline" size="icon" onClick={prev} className="bg-white/80">
                      <ArrowLeft />
                    </Button>
                    <Button variant="outline" size="icon" onClick={next} className="bg-white/80">
                      <ArrowRight />
                    </Button>
                  </div>
                  <div className="flex justify-center mt-4 gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        className={`w-3 h-3 rounded-full ${idx === current ? "bg-orange-500" : "bg-gray-300"}`}
                        onClick={() => setCurrent(idx)}
                        aria-label={`Ver imagen ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
                {/* Info */}
                <div className="space-y-6">
                  <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Soluciones integrales en chapa galvanizada</h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Calidad, experiencia y servicio completo en zinguería para obras industriales y domiciliarias.{" "}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Materiales Galvanizados</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Instalación Profesional</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Mantenimiento Incluido</span>
                    </div>
                  </div>
                  <div className="pt-4">
                     <a
    href="https://wa.me/+5493417052233"
    target="_blank"
    rel="noopener noreferrer"
    style={{ zIndex: "1000" }}
  >
                      <Button
                        variant="outline"
                        className="group border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent transition-all duration-300"
                      >
                        Solicitar Cotización
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Características y Beneficios */}
              <div className="mt-20 grid md:grid-cols-2 gap-12">
                {/* Características Principales */}
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-8">Características Principales</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-lg flex-shrink-0 mt-1">
                        <ShieldCheck className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-1">Canales sin uniones</h3>
                        <p className="text-gray-600">
                          Instalamos canales continuos sin uniones, evitando filtraciones y asegurando máxima durabilidad.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-lg flex-shrink-0 mt-1">
                        <Award className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-1">Babetas, Cenefas y Cupertinas</h3>
                        <p className="text-gray-600">
                          Soluciones a medida para terminaciones y protección de techos, muros y aberturas, adaptadas a cada proyecto.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-lg flex-shrink-0 mt-1">
                        <Clock className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-1">Conductos y Extractores eólicos</h3>
                        <p className="text-gray-600">
                          Instalación de conductos y extractores eólicos para mejorar la ventilación y el confort en ambientes industriales y residenciales.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Beneficios */}
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-8">Beneficios</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Evita filtraciones y humedad</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Mayor vida útil y resistencia</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Soluciones personalizadas para cada necesidad</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Instalación profesional y rápida</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Materiales certificados y de calidad</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Mejora la ventilación y el confort</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
