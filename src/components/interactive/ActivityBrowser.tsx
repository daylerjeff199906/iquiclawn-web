import { useEffect, useState } from 'react';
import './ActivityBrowser.css';
import '../../styles/activity-card.css';

export interface BrowserItem {
  id: string;
  titulo: string;
  resumen: string;
  categoria: string;
  categoriaLabel: string;
  fechaLabel?: string;
  fechaIso?: string;
  imagen?: { src: string; width: number; height: number; alt: string };
}

interface Props {
  items: BrowserItem[];
}

/**
 * Listado de actividades con filtro por categoría.
 * El HTML del servidor ya incluye todas las actividades; los filtros aparecen solo
 * cuando React se hidrata, así que sin JavaScript el listado sigue completo.
 */
export default function ActivityBrowser({ items }: Props) {
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState('todas');
  useEffect(() => setReady(true), []);

  const categories = Array.from(new Map(items.map((i) => [i.categoria, i.categoriaLabel])).entries());
  const visible = active === 'todas' ? items : items.filter((i) => i.categoria === active);

  return (
    <div className="activity-browser">
      {ready && (
        <div className="activity-browser__filters" role="group" aria-label="Filtrar actividades por categoría">
          {[['todas', 'Todas'] as const, ...categories].map(([id, label]) => (
            <button
              key={id}
              type="button"
              className="activity-browser__chip"
              aria-pressed={active === id}
              onClick={() => setActive(id)}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <p className="visually-hidden" role="status" aria-live="polite">
        {ready ? `Mostrando ${visible.length} ${visible.length === 1 ? 'actividad' : 'actividades'}.` : ''}
      </p>

      <ul className="activity-grid activity-browser__list" key={active}>
        {visible.map((item, index) => (
          <li key={item.id}>
            <article className="activity-card">
              <div className="activity-card__media">
                {item.imagen ? (
                  <img
                    src={item.imagen.src}
                    width={item.imagen.width}
                    height={item.imagen.height}
                    alt={item.imagen.alt}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                ) : (
                  <div className="activity-card__placeholder" aria-hidden="true">
                    <span>{item.categoriaLabel}</span>
                  </div>
                )}
              </div>
              <div className="activity-card__body">
                <ul className="post-meta">
                  <li className="post-meta__tag">{item.categoriaLabel}</li>
                  {item.fechaLabel && (
                    <li>{item.fechaIso ? <time dateTime={item.fechaIso}>{item.fechaLabel}</time> : item.fechaLabel}</li>
                  )}
                </ul>
                <h3>
                  <a href={`/actividades/${item.id}`}>{item.titulo}</a>
                </h3>
                <p>{item.resumen}</p>
                <span className="activity-card__more" aria-hidden="true">
                  Ver actividad →
                </span>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
