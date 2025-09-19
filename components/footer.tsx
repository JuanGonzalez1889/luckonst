import { Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Centered Content */}
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/logo-redondo.webp"
              alt="Luckonst Logo"
              width={120}
              height={80}
              className="rounded-full object-contain"
            />
          </div>

          {/* Description */}
          <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Especialistas en techos metálicos, estructuras de madera y zinguería. Más de 7 años brindando soluciones de
            calidad en Rosario, Argentina.
          </p>

          {/* Social Media */}
          <div className="flex justify-center space-x-4">
            <Link
              href="https://www.facebook.com/luckonstcontrucciones/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-3 rounded-lg hover:bg-secondary transition-colors group"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>
            <Link
              href="https://instagram.com/luckonst"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all group"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/luckonst-construcci%C3%B3nes-4ba4b4370/?originalSubdomain=ar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-3 rounded-lg hover:bg-secondary transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-400/30 mt-12 pt-8 text-center">
          <p className="text-blue-200 text-sm mb-4">© 2025 LUCKONST. Todos los derechos reservados.</p>
          
        </div>
      </div>
    </footer>
  )
}
