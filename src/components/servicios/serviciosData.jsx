import Window from '@/assets/icon/Window'
import image_one from '@/assets/image/cards_image/aberturas.png'
import image_two from '@/assets/image/cards_image/vidrios.png'
import image_three from '@/assets/image/cards_image/cerramientos.png'
import image_four from '@/assets/image/cards_image/complementarios.png'
import Glass from '@/assets/icon/Glass'
import Complemetarios from '@/assets/icon/Complemetarios'
import Aluminio from '@/assets/icon/Aluminio'

export const servicios = [
  {
    id: '1',
    icon: <Window width='60px' height='50px' />,
    nombre: 'Aberturas de PVC',
    descripcion:
      'Aberturas de PVC duraderas con excelente aislamiento térmico.',
    backgroundImg: image_one,
  },
  {
    id: '2',
    icon: <Glass width='60px' height='60px' />,
    nombre: 'Vidrios',
    descripcion:
      'Soluciones en vidrio de alta calidad para un diseño moderno y seguro.',
    backgroundImg: image_two,
  },
  {
    id: '3',
    icon: <Aluminio width='60px' height='60px' />,
    nombre: 'Cerramientos de Aluminio',
    descripcion:
      'Cerramientos resistentes y estéticos en aluminio para todos tus espacios.',
    backgroundImg: image_three,
  },
  {
    id: '4',
    icon: <Complemetarios width='60px' height='60px' />,
    nombre: 'Complementarios',
    descripcion: 'Estructuras en acero, hierro y espejos de alta calidad.',
    backgroundImg: image_four,
  },
]
