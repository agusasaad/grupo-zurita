import NavBar from '@/components/navbar/NavBar'
import './globals.css'
import Footer from '@/components/footer/Footer'

export const metadata = {
  metadataBase: new URL('https://grupo-zurita.vercel.app/'),
  title: 'Grupo Zurita - Soluciones en Construcción y Aberturas de Calidad',
  description:
    'Grupo Zurita, empresa familiar desde 1984 en Buenos Aires, ofrece productos y servicios de alta calidad en la industria de la construcción, incluyendo aberturas de PVC, cerramientos de aluminio, soluciones en vidrio y complementarios en acero e hierro.',
  keywords:
    'Grupo Zurita, construcción Buenos Aires, aberturas de PVC, cerramientos de aluminio, soluciones en vidrio, estructuras de acero, estructuras de hierro, espejos, servicios de construcción, empresa de construcción en Argentina, productos de alta calidad para construcción, asesoramiento en construcción, innovación en construcción, confianza en construcción, servicios personalizados, industria de la construcción Buenos Aires',
  author: 'Grupo Zurita',
  openGraph: {
    title: 'Grupo Zurita - Calidad y Confianza en Construcción desde 1984',
    description:
      'Desde 1984, Grupo Zurita ofrece soluciones integrales en construcción: aberturas de PVC, cerramientos de aluminio, vidrio y estructuras complementarias de alta calidad en Buenos Aires.',
    images: '/image.jpeg', // Asegúrate de que esta imagen esté disponible en el directorio público
    url: 'https://grupo-zurita.vercel.app/',
    type: 'website',
    site_name: 'Grupo Zurita',
  },
  alternates: {
    canonical: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grupo Zurita - Soluciones en Aberturas y Construcción',
    description:
      'Desde 1984, calidad y confianza en cada proyecto de construcción.',
    images: '/image.jpeg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
