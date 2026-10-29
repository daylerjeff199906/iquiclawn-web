export interface Valor {
  titulo: string;
  texto: string;
}

/** Valores comunicados por la organización. Los textos explicativos son editoriales. */
export const valores: Valor[] = [
  {
    titulo: 'Sinceridad y sensibilidad',
    texto:
      'El clown parte de lo que somos y de lo que sentimos. Mostrarse con honestidad abre la puerta a un encuentro verdadero.',
  },
  {
    titulo: 'Libertad de expresión',
    texto:
      'Cada persona tiene derecho a expresarse a su manera. El juego y el arte son lenguajes para hacerlo sin miedo.',
  },
  {
    titulo: 'Igualdad y respeto',
    texto:
      'Nadie está por encima de nadie. Se acompaña de igual a igual, reconociendo la dignidad de cada persona.',
  },
  {
    titulo: 'Compromiso con la comunidad',
    texto:
      'El trabajo voluntario se construye con responsabilidad hacia las personas y los lugares donde se realiza.',
  },
  {
    titulo: 'Arte y juego como medios de encuentro',
    texto:
      'Reír, jugar y crear juntos son formas de acercarse, de escucharse y de compartir un momento.',
  },
];
