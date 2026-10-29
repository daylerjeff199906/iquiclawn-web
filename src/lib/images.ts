import grupoImagen from '../assets/fotos/prevencion-suicidio-grupo-iquiclown.jpg';
import distintivoImagen from '../assets/fotos/prevencion-suicidio-colocando-distintivo.jpg';
import listonImagen from '../assets/fotos/prevencion-suicidio-colocando-liston-amarillo.jpg';
import hospitalSalaImagen from '../assets/fotos/clown-hospitalario-visita-silbatos-en-sala.jpg';
import hospitalSaludandoImagen from '../assets/fotos/clown-hospitalario-integrantes-saludando.jpg';
import festivalImagen from '../assets/fotos/festival-belen-circulo-en-el-salon.jpg';

/**
 * Imágenes institucionales, todas del archivo de Iquiclown.
 * Para cambiar las fotografías del banner, reemplaza los imports y actualiza `alt`.
 */
export const portadaCredito = 'Archivo de Iquiclown';

/** Collage del banner de la portada. La primera imagen es la principal. */
export const portadaFotos = [
  {
    image: grupoImagen,
    alt: 'Ocho integrantes de Iquiclown con nariz roja y vestuario colorido, de noche en un espacio público, sonríen y sostienen carteles con mensajes de esperanza.',
  },
  {
    image: hospitalSalaImagen,
    alt: 'Dos integrantes de Iquiclown, con bata blanca y vestido turquesa de lunares, soplan silbatos de colores en una sala con una camilla.',
  },
  {
    image: hospitalSaludandoImagen,
    alt: 'Integrantes de Iquiclown levantan los brazos y saludan a la cámara en una escalera, con títeres y peluches en las manos.',
  },
  {
    image: festivalImagen,
    alt: 'Muchas personas forman un gran círculo en un salón decorado con banderines de colores, bajo un banner del Festival de Belén.',
  },
];

/** Fotografías de la página «Nosotros». */
export const nosotrosFotos = [
  {
    image: distintivoImagen,
    alt: 'Un integrante de Iquiclown, con nariz roja, se inclina para prender un distintivo en la camiseta de un joven que está de espaldas.',
  },
  {
    image: listonImagen,
    alt: 'Una persona con lentes prende un listón amarillo en la ropa de una joven, en un espacio público de noche.',
  },
];
