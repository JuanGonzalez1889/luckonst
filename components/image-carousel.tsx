"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselImage {
  src: string
  alt: string
}

interface ImageCarouselProps {
  images?: CarouselImage[]
}

const defaultImages: CarouselImage[] = [
  {
    src: "/techo-tradicional-2.webp",
    alt: "Casa moderna con estructura de madera y techo metálico",
  },
  {
    src: "/cielorraso-pvc-1.jpeg",
    alt: "Estructura de techo de madera en construcción",
  },
  {
    src: "/imagen-3.jpg",
    alt: "Casa con estructura de madera y terraza",
  },
]

export function ImageCarousel({ images = defaultImages }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative group">
      {/* Main Image Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={500}
                height={600}
                className="w-full h-[600px] object-cover"
                priority={index === 0}
                style={{ objectPosition: "center 15%" }}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/90 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
    </div>
  )
}
