export interface Integrante {
  nombre: string;
  cargo: string;
  /** Solo se publica con autorización expresa de la persona. */
  autorizado: true;
}

/**
 * Equipo. Se deja vacío hasta contar con nombres, cargos y autorización de publicación.
 * Mientras esté vacío, la página "Nosotros" no muestra la sección.
 */
export const equipo: Integrante[] = [];
