import type { CategoriaId } from './categorias';

export interface Linea {
  slug: string;
  categoria: CategoriaId;
  titulo: string;
  /** Frase breve para portada y listados. */
  resumen: string;
  /** Qué es, en lenguaje sencillo. */
  enQueConsiste: string;
  /** Cómo se desarrolla. */
  comoSeDesarrolla: string;
  /** Qué busca aportar. */
  queBuscaAportar: string;
  /** Cómo conocer sus actividades. */
  comoConocerla: string;
  /** Tiene contenido suficiente para una página de detalle. */
  detalle?: {
    lema: string;
    secciones: { titulo: string; parrafos: string[] }[];
    aclaracion?: string;
  };
}

export const lineas: Linea[] = [
  {
    slug: 'clown-comunitario',
    categoria: 'clown-comunitario',
    titulo: 'Clown comunitario',
    resumen: 'El juego y la escucha como punto de encuentro en barrios, plazas y espacios compartidos.',
    enQueConsiste:
      'Es una forma de arte escénico y de relación que usa el clown para encontrarse con las personas en los espacios de la comunidad.',
    comoSeDesarrolla:
      'Parte del juego, la improvisación y la escucha. No hay un público pasivo: se busca que cada persona pueda participar desde donde se sienta cómoda.',
    queBuscaAportar:
      'Momentos de encuentro, risa compartida y reconocimiento mutuo entre quienes participan.',
    comoConocerla:
      'Las actividades documentadas se reúnen en el registro de actividades del sitio.',
    detalle: {
      lema: 'Encontrarnos jugando, en los lugares donde la vida ocurre.',
      secciones: [
        {
          titulo: 'Un clown que sale al encuentro',
          parrafos: [
            'El clown comunitario lleva el arte a los espacios donde la gente se reúne y convive. Más que ofrecer un espectáculo cerrado, propone un intercambio: quien juega con otra persona también se deja afectar por ella.',
            'Esa manera de hacer arte se apoya en la sensibilidad, en la atención al otro y en la disposición a equivocarse con humor.',
          ],
        },
        {
          titulo: 'Lo que lo caracteriza',
          parrafos: [
            'Se trabaja con el cuerpo, la mirada, el gesto y la palabra. El error no se esconde, se vuelve parte del juego.',
            'Cada encuentro es distinto, porque depende de las personas, del lugar y del momento. Por eso la escucha es tan importante como la actuación.',
          ],
        },
        {
          titulo: 'Una forma de estar en comunidad',
          parrafos: [
            'Iquiclown entiende esta línea como un compromiso con la comunidad: se llega con respeto, se construye de igual a igual y se evita cualquier mirada de lástima.',
          ],
        },
      ],
    },
  },
  {
    slug: 'clown-hospitalario',
    categoria: 'clown-hospitalario',
    titulo: 'Clown hospitalario',
    resumen: 'Acompañamiento con juego, presencia y sensibilidad en entornos de salud.',
    enQueConsiste:
      'Es una práctica de acompañamiento que lleva el lenguaje del clown a entornos de salud, con una presencia cuidadosa y respetuosa.',
    comoSeDesarrolla:
      'Se basa en la observación, la delicadeza y el ritmo de cada persona. El juego se propone, nunca se impone, y se respeta siempre el contexto y las indicaciones de cada lugar.',
    queBuscaAportar:
      'Compañía, un respiro de ligereza y un trato cercano y humano para quienes viven situaciones difíciles.',
    comoConocerla:
      'Cuando haya actividades documentadas y autorizadas para compartirse, aparecerán en el registro de actividades.',
    detalle: {
      lema: 'Presencia, delicadeza y juego, siempre con respeto.',
      secciones: [
        {
          titulo: 'Acompañar sin invadir',
          parrafos: [
            'El clown hospitalario trabaja desde la sensibilidad. Antes de proponer cualquier juego, observa, saluda y pide permiso, porque cada persona vive su momento a su manera.',
            'La intención no es entretener a toda costa, sino ofrecer una compañía amable y honesta.',
          ],
        },
        {
          titulo: 'Un trabajo de cuidado y de equipo',
          parrafos: [
            'Entrar en un entorno de salud exige atención al espacio, a las personas que allí trabajan y a las normas de cada institución. La práctica se entiende como un acompañamiento que convive con esa realidad.',
          ],
        },
        {
          titulo: 'Privacidad y dignidad',
          parrafos: [
            'Iquiclown cuida la dignidad de las personas acompañadas. Por eso no se publican imágenes ni datos de pacientes, familiares o personal de salud sin autorización expresa.',
          ],
        },
      ],
      aclaracion:
        'El clown hospitalario es una práctica artística y de acompañamiento. No es un tratamiento clínico ni reemplaza la atención médica.',
    },
  },
  {
    slug: 'formacion-y-talleres',
    categoria: 'formacion',
    titulo: 'Formación y talleres',
    resumen: 'Espacios para aprender y practicar el clown y el trabajo con la sensibilidad.',
    enQueConsiste:
      'Son espacios de aprendizaje donde se exploran las herramientas del clown: el juego, la escucha, la expresión y el trabajo en grupo.',
    comoSeDesarrolla:
      'Se plantean como encuentros prácticos, con ejercicios de juego e improvisación y un ambiente de confianza para probar sin miedo a equivocarse.',
    queBuscaAportar:
      'Recursos para expresarse con libertad, trabajar en equipo y preparar a quienes quieran sumarse al voluntariado artístico.',
    comoConocerla:
      'Las fechas, los lugares y las condiciones de participación se comunicarán en novedades y en el registro de actividades cuando estén confirmados.',
    detalle: {
      lema: 'Aprender jugando, con otras personas y a nuestro ritmo.',
      secciones: [
        {
          titulo: 'Aprender haciendo',
          parrafos: [
            'La formación en clown se apoya en la práctica. Se juega, se improvisa y se observa lo que ocurre en el grupo, para descubrir la propia manera de estar en escena y en la relación con otras personas.',
          ],
        },
        {
          titulo: 'Un ambiente de confianza',
          parrafos: [
            'Sinceridad, respeto e igualdad guían estos espacios. Se busca que cada participante pueda expresarse con libertad y cuidar a quienes comparten el ejercicio.',
          ],
        },
        {
          titulo: 'Preparación para el voluntariado',
          parrafos: [
            'La formación puede ser también un camino para conocer el enfoque de Iquiclown antes de acompañar otras actividades. Las condiciones concretas se darán a conocer cuando estén confirmadas. Un ejemplo es el proceso de los Talleres de Clown de Hospital, cuya ceremonia de clausura está en el registro de actividades.',
          ],
        },
      ],
    },
  },
  {
    slug: 'participacion-cultural-y-comunitaria',
    categoria: 'cultura-comunitaria',
    titulo: 'Participación cultural y comunitaria',
    resumen: 'Presencia en citas culturales de Iquitos, como actividades relacionadas con el Festival de Belén.',
    enQueConsiste:
      'Es la presencia de Iquiclown en eventos y actividades culturales y comunitarias de Iquitos.',
    comoSeDesarrolla:
      'Se participa en citas organizadas por otras personas o instituciones, aportando la mirada y el lenguaje del clown.',
    queBuscaAportar:
      'Cercanía con la vida cultural de la ciudad y lazos con otras organizaciones y vecinos.',
    comoConocerla:
      'La participación en actividades relacionadas con el Festival de Belén tiene su propia ficha en el registro de actividades.',
  },
];

export const getLinea = (slug: string) => lineas.find((l) => l.slug === slug);
export const lineasConDetalle = lineas.filter((l) => l.detalle);
