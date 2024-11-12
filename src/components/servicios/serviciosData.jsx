import Window from '@/assets/icon/Window'
import image_one from '@/assets/image/cards_image/aberturas.png'
import image_two from '@/assets/image/cards_image/vidrios.png'
import image_three from '@/assets/image/cards_image/cerramientos.png'
import image_four from '@/assets/image/cards_image/complementarios.png'
import background_page_one from '@/assets/image/cards_image/aberturas_background.jpg'
import background_page_two from '@/assets/image/cards_image/vidrios_background.jpg'
import background_page_three from '@/assets/image/cards_image/estructuras.jpg'
import Glass from '@/assets/icon/Glass'
import Complemetarios from '@/assets/icon/Complemetarios'
import Aluminio from '@/assets/icon/Aluminio'

import abertura from '@/assets/image/works/aberturas.jpg'
import abertura_1 from '@/assets/image/works/aberturas1.jpg'
import abertura_3 from '@/assets/image/works/aberturas3.jpg'
import abertura_4 from '@/assets/image/works/aberturas4.jpg'
import abertura_5 from '@/assets/image/works/aberturas5.jpg'
import abertura_6 from '@/assets/image/works/aberturas6.jpg'
import abertura_7 from '@/assets/image/works/aberturas7.jpg'
import abertura_8 from '@/assets/image/works/aberturas8.jpg'
import abertura_9 from '@/assets/image/works/aberturas9.jpg'
import abertura_10 from '@/assets/image/works/aberturas10.jpg'
import abertura_11 from '@/assets/image/works/aberturas11.jpg'
import abertura_12 from '@/assets/image/works/aberturas12.jpg'
import abertura_13 from '@/assets/image/works/aberturas13.jpg'
import abertura_14 from '@/assets/image/works/aberturas14.jpg'
import abertura_15 from '@/assets/image/works/aberturas15.jpg'
import abertura_16 from '@/assets/image/works/aberturas16.jpeg'
import abertura_17 from '@/assets/image/works/aberturas17.jpeg'
import abertura_18 from '@/assets/image/works/aberturas18.jpeg'
import abertura_19 from '@/assets/image/works/aberturas19.jpeg'
import abertura_20 from '@/assets/image/works/aberturas20.jpeg'
import abertura_21 from '@/assets/image/works/aberturas21.jpeg'

import cerramientos from '@/assets/image/works/cerramientos.jpg'

import vidrios from '@/assets/image/works/vidrios.jpg'
import vidrios_1 from '@/assets/image/works/vidrios1.jpg'
import vidrios_2 from '@/assets/image/works/vidrios2.jpeg'
import vidrios_3 from '@/assets/image/works/vidrios3.jpeg'
import vidrios_4 from '@/assets/image/works/vidrios4.jpeg'
import vidrios_5 from '@/assets/image/works/vidrios5.jpeg'
import vidrios_6 from '@/assets/image/works/vidrios6.jpeg'

import complemetarios from '@/assets/image/works/complementarios.jpg'
import complemetarios_1 from '@/assets/image/works/complementarios1.jpg'
import complemetarios_2 from '@/assets/image/works/complementarios2.jpg'
import complemetarios_3 from '@/assets/image/works/complementarios3.jpg'
import complemetarios_4 from '@/assets/image/works/complementarios4.jpg'
import complemetarios_5 from '@/assets/image/works/complementarios5.jpeg'
import complemetarios_6 from '@/assets/image/works/complementarios6.jpeg'
import complemetarios_7 from '@/assets/image/works/complementarios7.jpeg'
import complemetarios_8 from '@/assets/image/works/complementarios8.jpeg'
import complemetarios_9 from '@/assets/image/works/complementarios9.jpeg'
import complemetarios_10 from '@/assets/image/works/complementarios10.jpeg'
import complemetarios_11 from '@/assets/image/works/complementarios11.jpeg'
import complemetarios_12 from '@/assets/image/works/complementarios12.jpeg'
import complemetarios_13 from '@/assets/image/works/complementarios13.jpeg'
import complemetarios_14 from '@/assets/image/works/complementarios14.jpeg'

export const servicios = [
  {
    id: '1',
    icon: <Window width='60px' height='50px' />,
    nombre: 'Aberturas de PVC',
    descripcion:
      'Aberturas de PVC duraderas con excelente aislamiento térmico.',
    backgroundImg: image_one,
    backgroundImg_page: background_page_one,
    image_array: [
      abertura,
      abertura_1,
      abertura_3,
      abertura_4,
      abertura_5,
      abertura_6,
      abertura_7,
      abertura_8,
      abertura_9,
      abertura_10,
      abertura_11,
      abertura_12,
      abertura_13,
      abertura_14,
      abertura_15,
      abertura_16,
      abertura_17,
      abertura_18,
      abertura_19,
      abertura_20,
      abertura_21,
    ],
  },
  {
    id: '2',
    icon: <Glass width='60px' height='60px' />,
    nombre: 'Vidrios',
    descripcion:
      'Soluciones en vidrio de alta calidad para un diseño moderno y seguro.',
    backgroundImg: image_two,
    backgroundImg_page: background_page_two,
    image_array: [
      vidrios,
      vidrios_1,
      vidrios_2,
      vidrios_3,
      vidrios_4,
      vidrios_5,
      vidrios_6,
    ],
  },
  {
    id: '3',
    icon: <Aluminio width='60px' height='60px' />,
    nombre: 'Cerramientos de Aluminio',
    descripcion:
      'Cerramientos resistentes y estéticos en aluminio para todos tus espacios.',
    backgroundImg: image_three,
    backgroundImg_page: background_page_three,
    image_array: [cerramientos],
  },
  {
    id: '4',
    icon: <Complemetarios width='60px' height='60px' />,
    nombre: 'Complementarios',
    descripcion: 'Estructuras en acero, hierro y espejos de alta calidad.',
    backgroundImg: image_four,
    backgroundImg_page: background_page_one,
    image_array: [
      complemetarios,
      complemetarios_1,
      complemetarios_2,
      complemetarios_3,
      complemetarios_4,
      complemetarios_5,
      complemetarios_6,
      complemetarios_7,
      complemetarios_8,
      complemetarios_9,
      complemetarios_10,
      complemetarios_11,
      complemetarios_12,
      complemetarios_13,
      complemetarios_14,
    ],
  },
]
