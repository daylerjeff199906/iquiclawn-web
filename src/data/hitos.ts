export interface Hito {
  /** Año o etiqueta temporal; se omite cuando no hay fecha confirmada. */
  fecha?: string;
  titulo: string;
  texto: string;
  /** Enlace interno opcional al detalle. */
  href?: string;
}

/**
 * Hitos verificables. Añadir nuevos hitos solo con fecha y fuente confirmadas.
 * Los hitos sin fecha se muestran sin etiqueta temporal.
 */
export const hitos: Hito[] = [
  {
    fecha: '2014',
    titulo: 'Primeras referencias públicas',
    texto:
      'Desde 2014 existen referencias públicas de la trayectoria de Iquiclown como colectivo de voluntariado artístico en Iquitos.',
  },
  {
    titulo: 'Participación en el Festival de Belén',
    texto:
      'Iquiclown ha participado en actividades relacionadas con el Festival de Belén, una cita cultural de Iquitos.',
    href: '/actividades/festival-de-belen',
  },
  {
    titulo: 'Mensajes de esperanza por el Día mundial para la prevención del suicidio',
    texto:
      'Integrantes de Iquiclown compartieron mensajes de esperanza y listones amarillos en una actividad por esta fecha.',
    href: '/actividades/dia-mundial-prevencion-del-suicidio',
  },
  {
    titulo: 'Invitación de DEVIDA al plan de acción anual en Túpac Amaru',
    texto:
      'DEVIDA invitó a Iquiclown a participar en la elaboración del plan de acción anual del proyecto de prevención del consumo de drogas en el Pueblo Joven Túpac Amaru.',
    href: '/actividades/devida-plan-de-accion-tupac-amaru',
  },
  {
    titulo: 'Clausura de los Talleres de Clown de Hospital',
    texto:
      'Iquiclown cerró su más reciente proceso de formación en clown de hospital y dio la bienvenida a nuevos integrantes.',
    href: '/actividades/clausura-talleres-clown-de-hospital',
  },
];
