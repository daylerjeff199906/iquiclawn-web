/**
 * Datos centrales de la organización. Es la única fuente para nombre, descripción,
 * ubicación y canales de contacto. Todo lo que no esté confirmado queda vacío:
 * la interfaz solo muestra lo que tiene valor aquí.
 */
export interface SocialLink {
  /** Nombre de la red, por ejemplo "Facebook". */
  label: string;
  /** URL verificada del perfil oficial. */
  url: string;
}

export const organization = {
  name: 'Iquiclown',
  tagline: 'Arte, juego y encuentro desde Iquitos',
  shortDescription:
    'Organización de voluntariado artístico y social de Iquitos, Loreto, vinculada al clown comunitario y hospitalario.',
  description:
    'Iquiclown es una organización de voluntariado artístico y social de Iquitos, Loreto, Perú. Trabaja con el clown comunitario y hospitalario, combinando arte, juego, sensibilidad, acompañamiento y responsabilidad social.',
  location: {
    locality: 'Iquitos',
    region: 'Loreto',
    country: 'Perú',
    countryCode: 'PE',
  },
  /** Año desde el que existen referencias públicas de su trayectoria. */
  referenceYear: 2014,
  contact: {
    /** Correo confirmado. Se define con PUBLIC_CONTACT_EMAIL. */
    email: import.meta.env.PUBLIC_CONTACT_EMAIL || undefined,
    /** Endpoint real del formulario. Se define con PUBLIC_CONTACT_ENDPOINT. */
    formEndpoint: import.meta.env.PUBLIC_CONTACT_ENDPOINT || undefined,
  },
  /** Redes sociales verificadas. Añadir solo perfiles confirmados por la organización. */
  social: [] as SocialLink[],
} as const;

export const hasContactChannel = Boolean(
  organization.contact.email || organization.contact.formEndpoint || organization.social.length,
);
