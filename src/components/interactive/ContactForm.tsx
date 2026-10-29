import { useRef, useState, type SyntheticEvent } from 'react';
import './ContactForm.css';

interface Props {
  endpoint: string;
  privacyHref?: string;
  /** Correo alternativo confirmado, si existe. */
  fallbackEmail?: string;
}

const MOTIVOS = [
  'Consulta general',
  'Voluntariado',
  'Colaboración artística',
  'Colaboración institucional',
  'Apoyo con materiales u otras necesidades',
  'Información o imágenes de una actividad',
  'Otro motivo',
] as const;

type FieldName = 'nombre' | 'email' | 'motivo' | 'mensaje';
type Errors = Partial<Record<FieldName, string>>;
type Status = 'idle' | 'sending' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Record<FieldName, string>): Errors {
  const errors: Errors = {};
  if (!values.nombre.trim()) errors.nombre = 'Escribe tu nombre.';
  if (!values.email.trim()) errors.email = 'Escribe tu correo electrónico.';
  else if (!EMAIL_RE.test(values.email.trim()))
    errors.email = 'El correo electrónico no parece válido. Revisa que tenga el formato nombre@dominio.com.';
  if (!values.motivo) errors.motivo = 'Elige el motivo de tu mensaje.';
  if (!values.mensaje.trim()) errors.mensaje = 'Escribe tu mensaje.';
  else if (values.mensaje.trim().length < 10)
    errors.mensaje = 'El mensaje es muy corto. Cuéntanos un poco más (mínimo 10 caracteres).';
  return errors;
}

const LABELS: Record<FieldName, string> = {
  nombre: 'Nombre',
  email: 'Correo electrónico',
  motivo: 'Motivo',
  mensaje: 'Mensaje',
};

export default function ContactForm({ endpoint, privacyHref = '/privacidad', fallbackEmail }: Props) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const summaryRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  async function onSubmit(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      nombre: String(data.get('nombre') ?? ''),
      email: String(data.get('email') ?? ''),
      motivo: String(data.get('motivo') ?? ''),
      mensaje: String(data.get('mensaje') ?? ''),
    };

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus('idle');
      // Espera al render para mover el foco al resumen de errores.
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, _gotcha: String(data.get('_gotcha') ?? '') }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const errorList = Object.entries(errors) as [FieldName, string][];

  const describe = (name: FieldName, hint?: string) =>
    [errors[name] ? `${name}-error` : '', hint ?? ''].filter(Boolean).join(' ') || undefined;

  if (status === 'success') {
    return (
      <div className="contact-form__status contact-form__status--ok" role="status" tabIndex={-1} ref={statusRef}>
        <h3>Mensaje enviado</h3>
        <p>Gracias por escribirnos. Hemos recibido tu mensaje y lo revisaremos.</p>
        <button type="button" className="contact-form__link" onClick={() => setStatus('idle')}>
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" action={endpoint} method="post" onSubmit={onSubmit} noValidate>
      {errorList.length > 0 && (
        <div className="contact-form__summary" role="alert" tabIndex={-1} ref={summaryRef}>
          <h3>
            {errorList.length === 1 ? 'Hay 1 campo por corregir' : `Hay ${errorList.length} campos por corregir`}
          </h3>
          <ul>
            {errorList.map(([name, message]) => (
              <li key={name}>
                <a href={`#cf-${name}`}>
                  {LABELS[name]}: {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === 'error' && (
        <div className="contact-form__status contact-form__status--error" role="alert" tabIndex={-1} ref={statusRef}>
          <h3>No pudimos enviar tu mensaje</h3>
          <p>
            Ocurrió un problema al enviarlo y no se envió.
            {fallbackEmail ? (
              <>
                {' '}
                Puedes intentarlo de nuevo en unos minutos o escribirnos a <a href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a>.
              </>
            ) : (
              ' Revisa tu conexión e inténtalo de nuevo en unos minutos.'
            )}
          </p>
        </div>
      )}

      <div className="field">
        <label htmlFor="cf-nombre">Nombre</label>
        <input
          id="cf-nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={errors.nombre ? true : undefined}
          aria-describedby={describe('nombre')}
        />
        {errors.nombre && (
          <p className="field__error" id="nombre-error">
            {errors.nombre}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="cf-email">Correo electrónico</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-required="true"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={describe('email')}
        />
        {errors.email && (
          <p className="field__error" id="email-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="cf-motivo">Motivo</label>
        <select
          id="cf-motivo"
          name="motivo"
          defaultValue=""
          required
          aria-required="true"
          aria-invalid={errors.motivo ? true : undefined}
          aria-describedby={describe('motivo')}
        >
          <option value="" disabled>
            Elige un motivo
          </option>
          {MOTIVOS.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        {errors.motivo && (
          <p className="field__error" id="motivo-error">
            {errors.motivo}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="cf-mensaje">Mensaje</label>
        <textarea
          id="cf-mensaje"
          name="mensaje"
          rows={6}
          required
          aria-required="true"
          aria-invalid={errors.mensaje ? true : undefined}
          aria-describedby={describe('mensaje')}
        />
        {errors.mensaje && (
          <p className="field__error" id="mensaje-error">
            {errors.mensaje}
          </p>
        )}
      </div>

      {/* Campo trampa para bots: queda fuera de la vista y del orden de tabulación. */}
      <div className="contact-form__trap" aria-hidden="true">
        <label htmlFor="cf-gotcha">No rellenar este campo</label>
        <input id="cf-gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="contact-form__privacy">
        Usaremos tu nombre, correo y mensaje solo para responder a tu consulta. Consulta la{' '}
        <a href={privacyHref}>política de privacidad</a>.
      </p>

      <button type="submit" className="contact-form__submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
      </button>
    </form>
  );
}
