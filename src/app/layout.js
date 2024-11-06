import NavBar from '@/components/navbar/NavBar'
import './globals.css'

export const metadata = {
  title: 'Grupo Zurita',
  description:
    'Grupo Zurita somos una empresa dedicada a ofrecer soluciones integrales de construcción, especializada en aberturas de PVC, cerramientos de aluminio, trabajos en vidrio, estructuras de acero y hierro, etc. Nos comprometemos con la calidad y durabilidad en cada proyecto, brindando soluciones personalizadas y eficientes que cumplen con los más altos estándares. Con una sólida trayectoria en el sector, en Grupo Zurita nos destacamos por la confianza, el profesionalismo y la atención al detalle en todos nuestros acabados y servicios complementarios',
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
