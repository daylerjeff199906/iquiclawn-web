export interface NavItem {
  label: string;
  href: string;
}

/** Navegación principal (sin la acción destacada "Participa"). */
export const mainNav: NavItem[] = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Qué hacemos', href: '/que-hacemos' },
  { label: 'Actividades', href: '/actividades' },
  { label: 'Novedades', href: '/novedades' },
  { label: 'Contacto', href: '/contacto' },
];

export const ctaNav: NavItem = { label: 'Participa', href: '/participa' };

export const footerExplore: NavItem[] = [
  { label: 'Inicio', href: '/' },
  ...mainNav.slice(0, 4),
  ctaNav,
];

export const footerLegal: NavItem[] = [
  { label: 'Contacto', href: '/contacto' },
  { label: 'Política de privacidad', href: '/privacidad' },
  { label: 'Créditos de imágenes', href: '/creditos' },
];
