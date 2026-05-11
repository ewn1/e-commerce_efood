import RestaurantItem from '../models/RestaurantItem'
import star_favorite from '../assets/star_favorite.png'
import ichirakuMenu from './ichirakuMenu'
import panteaoMenu from './panteaoMenu'
import trattoriaMenu from './trattoriaMenu'
import solarTejoMenu from './solarTejoMenu'
import solCuscoMenu from './solCuscoMenu'
import colchaguaMenu from './colchaguaMenu'

const restaurantes: RestaurantItem[] = [
  {
    id: 1,
    title: 'Ichiraku Ramen Sushi',
    description:
      'Inspirado no balcão mais famoso de Aldeia da Folha, o Ichiraku Ramen Sushi traz para o mundo real o refúgio favorito dos ninjas. Mais do que um restaurante, somos o ponto de encontro para quem busca o conforto de um ramen fumegante e a precisão de sushis feitos com a maestria de um Jounin.',
    infos: ['Destaque da semana', 'japonesa'],
    image:
      'https://media.istockphoto.com/id/654181882/pt/foto/horumonyaki-shop-entrance.jpg?s=612x612&w=0&k=20&c=RE3nNzq0HJ0M-b0It4okkFZYIJMkJ9gcZjYf1riVt_g=',
    score: 5,
    icon: star_favorite,
    menu: ichirakuMenu,
  },
  {
    id: 2,
    title: 'Panteão Restô',
    description:
      'Panteão Restô: O sabor dos deuses na sua mesa. Viva uma experiência épica com o melhor da Grécia. Ingredientes frescos, vinhos selecionados e a tradição do Olimpo em cada detalhe. Um banquete imortal espera por você. Venha nos visitar ou peça diretamente pelo nosso delivery especial',
    infos: ['Grega'],
    image:
      'https://images.unsplash.com/photo-1663333780804-92f57006d366?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGdyZWVjZSUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D',
    score: 4.8,
    icon: star_favorite,
    menu: panteaoMenu,
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Venha nos visitar ou peça em nosso delicioso delivery: entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['italiano'],
    image:
      'https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGl0YWxpYW4lMjByZXN0YXVyYW50fGVufDB8fDB8fHww',
    score: 4.9,
    icon: star_favorite,
    menu: trattoriaMenu,
  },
  {
    id: 4,
    title: 'Solar do Tejo',
    description:
      'A autêntica alma portuguesa à sua mesa. Descubra o equilíbrio perfeito entre a tradição lusitana e ossabores do mar. Desfrute de bacalhaus nobres, vinhos deseleção e doces conventuais em um ambiente acolhedor. Sinta o abraço de Portugal e viva uma experiência única, ora pois!',
    infos: ['português'],
    image:
      'https://images.unsplash.com/photo-1643275477296-5db35ec00918?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHVndWVzZSUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D',
    score: 4.7,
    icon: star_favorite,
    menu: solarTejoMenu,
  },
  {
    id: 5,
    title: 'Sol de Cusco',
    description:
      'O brilho da culinária peruana no seu prato. Explore a riqueza dos Andes através de sabores vibrantes eingredientes ancestrais. Do frescor do ceviche à intensidadedos temperos criollos, cada mordida é uma viagem ao coração do Peru. Descubra o destino mais saboroso da América Latina.',
    infos: ['peruano'],
    image:
      'https://images.unsplash.com/photo-1743027876738-eb38afca5145?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVydSUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D',
    score: 5,
    icon: star_favorite,
    menu: solCuscoMenu,
  },
  {
    id: 6,
    title: 'Aroma de Colchagua',
    description:
      'A essência dos vales chilenos. Sinta a harmonia entre vinhos premiados e a rica culináriada terra. De carnes nobres a sabores rústicos, oferecemos uma imersão sensorial única e sofisticada. Viaje pelas parreiras do Chile sem sair da mesa. O brinde perfeito também pode ser feito no conforto do seu lar, peça também pelo delivery!',
    infos: ['chileno'],
    image:
      'https://plus.unsplash.com/premium_photo-1745946640151-7bd1d1f93554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpbGVhbiUyMGJpc3Ryb3xlbnwwfHwwfHx8MA%3D%3D',
    score: 4.9,
    icon: star_favorite,
    menu: colchaguaMenu,
  },
]

export default restaurantes
