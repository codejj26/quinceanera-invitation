import Image from 'next/image';
import { Countdown } from './components/Countdown';
import MusicPlayer from './components/MusicPlayer';
import Calendar from './components/Calendar';

// ── Date of the event ──────────────────────────────────────────────────
const EVENT_DATE = '2026-05-08T19:00:00';

// ── Gallery items ──────────────────────────────────────────────────────
const galleryItems = [
  { url: '/1.jpeg', alt: 'Julieta Photo 1' },
  { url: '/2.jpeg', alt: 'Julieta Photo 2' },
  { url: '/3.jpeg', alt: 'Julieta Photo 3' },
  { url: '/4.jpeg', alt: 'Julieta Photo 4' },
  { url: '/5.jpeg', alt: 'Julieta Photo 5' },
  { url: '/6.jpeg', alt: 'Julieta Photo 6' },
];

// Pre-calculated butterfly fall configs (no Math.random in render)
const butterflyConfigs = [
  { left: '9%', size: '1.4rem', duration: '10s', delay: '0s' },
  { left: '18%', size: '1.8rem', duration: '12s', delay: '1.5s' },
  { left: '27%', size: '1.2rem', duration: '14s', delay: '3s' },
  { left: '36%', size: '2rem', duration: '16s', delay: '4.5s' },
  { left: '45%', size: '1.5rem', duration: '11s', delay: '0.8s' },
  { left: '54%', size: '1.7rem', duration: '13s', delay: '2.2s' },
  { left: '63%', size: '1.3rem', duration: '15s', delay: '5s' },
  { left: '72%', size: '1.9rem', duration: '17s', delay: '1s' },
  { left: '81%', size: '1.6rem', duration: '10s', delay: '3.5s' },
  { left: '90%', size: '1.4rem', duration: '12s', delay: '6s' },
];

// Section divider component
function ButterflyDivider() {
  return (
    <div className="butterfly-divider">
      <div className="butterfly-divider-inner">
        <span className="butterfly-divider-line-left" />
        <span className="butterfly-divider-icon">🦋</span>
        <span className="butterfly-divider-line-right" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="invitation-wrapper">
      {/* ═════════════════ SECCIÓN 1 – HERO ═════════════════ */}
      <section className="hero-section" id="inicio">

        {/* Background image */}
        <div className="hero-bg-image" aria-hidden="true" />

        {/* Falling butterflies */}
        <div className="butterflies-container" aria-hidden="true">
          {butterflyConfigs.map((cfg, i) => (
            <span
              key={i}
              className="butterfly-fall"
              style={{
                left: cfg.left,
                fontSize: cfg.size,
                animationDuration: cfg.duration,
                animationDelay: cfg.delay,
              }}
            >🦋</span>
          ))}
        </div>

        <div className="hero-content">

          <h1 className="hero-name">Julieta Rua David</h1>

          <p className="hero-fifteen">XV Años</p>

          <div className="hero-divider" aria-hidden="true">
            <span className="hero-divider-line" />
            <span className="hero-divider-butterfly">🦋</span>
            <span className="hero-divider-line right" />
          </div>

          <p className="hero-invitation-text">
            "Hay momentos que se guardan para siempre en el corazón.<br />
            Quiero compartir contigo esta noche repleta de ilusión,<br />
            celebrando junto a ti mis XV años."
          </p>

          <div className="hero-music-player-wrapper">
            <MusicPlayer />
          </div>
        </div>


      </section>

      <ButterflyDivider />

      {/* ══════════════════════ SECCIÓN 2 – MENSAJE ══════════════════════ */}
      <section className="message-section" id="mensaje">
        <div className="message-bg-image" aria-hidden="true">
          <div className="message-overlay" />
        </div>

        <div className="message-content">
          <div className="message-butterfly-left" aria-hidden="true">🦋</div>
          <div className="message-butterfly-right" aria-hidden="true">🦋</div>

          <p className="message-label">Un mensaje del corazón</p>
          <p className="message-quote">&ldquo;Comienza un nuevo capítulo&rdquo;</p>

          <div className="message-butterflies-row" aria-hidden="true">🦋 🦋 🦋</div>

          <p className="message-body">
            &ldquo;Cada momento de mi vida ha sido un regalo invaluable.<br />
            Con el corazón lleno de gratitud y emoción, te invito a compartir conmigo<br />
            la noche más mágica de mi vida. Tu presencia hará este momento<br />
            único e irrepetible.&rdquo;
          </p>

          <p className="message-signature">Con amor, Julieta ♡</p>
        </div>
      </section>

      <ButterflyDivider />

      {/* ══════════════════════ SECCIÓN 3 – DETALLES ══════════════════════ */}
      <section className="details-section" id="detalles">
        <div className="details-bg-image" aria-hidden="true" />
        <h2 className="section-title">Detalles del evento</h2>
        <p className="section-subtitle">
          Me llena de alegría compartir contigo este momento tan especial.
        </p>

        <div className="details-grid">
          <div className="detail-card">
            <div className="detail-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--gold)' }}>
                <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                <text x="12" y="18" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold" fontFamily="Montserrat, sans-serif">8</text>
              </svg>
            </div>
            <h3 className="detail-card-title">Fecha</h3>
            <p className="detail-card-text">
              <strong>Viernes, 8 de Mayo</strong><br />
              del año 2026
            </p>
          </div>

          <div className="detail-card">
            <div className="detail-icon">⏰</div>
            <h3 className="detail-card-title">Hora</h3>
            <p className="detail-card-text">
              <strong>7:00 PM</strong><br />
              (Puntualidad apreciada)
            </p>
          </div>

          <div className="detail-card">
            <div className="detail-icon">📍</div>
            <h3 className="detail-card-title">Lugar</h3>
            <p className="detail-card-text">
              <strong>Salón De Eventos Dinastia Encanto Real</strong><br />
              Cra. 39 #65 04, Villa Hermosa<br />
              Medellín, Antioquia
            </p>

            <a
              className="detail-map-link"
              href="https://www.google.com/maps/dir/?api=1&destination=Salón+De+Eventos+Dinastia+Encanto+Real+Cra+39+65+04+Medellin"
              target="_blank"
              rel="noopener noreferrer"
            >
              📍 Abrir en Google Maps
            </a>
          </div>

          <div className="detail-card">
            <div className="detail-icon">👗</div>
            <h3 className="detail-card-title">Vestimenta</h3>
            <p className="detail-card-text">
              <strong>Formal / Etiqueta</strong><br /><br />
            </p>
            <div>
              <p className="restricted-title">Colores Reservados para la Quinceañera:</p>
              {/* Gama Verde */}
              <div className="gamma-group">
                <span className="gamma-label">Gama Verde:</span>
                <div className="gamma-circles">
                  <span className="circle green-2"></span>
                  <span className="circle green-3"></span>
                  <span className="circle green-4"></span>
                </div>
              </div>

              {/* Gama Gris */}
              <div className="gamma-group">
                <span className="gamma-label">Gama Gris:</span>
                <div className="gamma-circles">
                  <span className="circle gray-2"></span>
                  <span className="circle gray-3"></span>
                  <span className="circle gray-4"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ButterflyDivider />

      {/* ══════════════════════ SECCIÓN 4 – COUNTDOWN ══════════════════════ */}
      <section className="countdown-section" id="cuenta-regresiva">
        <div className="countdown-bg-image" />
        <div className="countdown-bg-overlay" />
        <h2 className="section-title">¡El gran día se acerca!</h2>

        <Countdown targetDate={EVENT_DATE} />

        {/* ══ CALENDARIO MAYO 2026 ══ */}
        <Calendar />

        <div className="countdown-butterfly-divider" aria-hidden="true">
          🦋 🦋 🦋
        </div>
      </section>

      <ButterflyDivider />

      {/* ══════════════════════ SECCIÓN 5 – VERSÍCULO & RETRATO ══════════════════════ */}
      <section className="verse-photo-section" id="versiculo">
        <div className="verse-container">
          <blockquote className="verse-quote">
            &ldquo;Guárdame como a la niña de tus ojos; Escóndeme bajo la sombra de tus alas.&rdquo;
            <cite>Salmos 17:8</cite>
          </blockquote>
        </div>

        <div className="portrait-outer-frame">
          <div className="portrait-inner-frame">
            <Image
              src="/Julieta-versiculo.jpeg"
              alt="Julieta's Portrait"
              className="portrait-image"
              width={500}
              height={700}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="portrait-gold-corner top-left">🦋</div>
          <div className="portrait-gold-corner bottom-right">🦋</div>
        </div>
      </section>

      <ButterflyDivider />


      {/* ══════════════════════ SECCIÓN 6 – DETALLES Y REGALOS ══════════════════════ */}
      <section className="gifts-section">
        <div className="gifts-container">
          {/* Tarjeta Única de Regalos */}
          <div className="gift-card single-card">
            <div className="gift-card-icon">✉️</div>
            <h3 className="gift-card-title">Un presente del corazón</h3>
            <p className="gift-card-text">
              Tu compañía es mi regalo más preciado en esta noche de luz.
              Si nace de tu corazón hacerme un detalle,
              será recibido con inmensa gratitud y alegría.
            </p>
          </div>
        </div>
      </section>

      <ButterflyDivider />
      <section className="gallery-section" id="galeria">
        <div className="gallery-bg-garden" aria-hidden="true" />

        <p className="section-label">Momentos</p>
        <h2 className="section-title">Galería</h2>
        <p className="section-subtitle">
          Próximamente… aguarda los momentos más bellos de esta noche especial.
        </p>

        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <Image
                src={item.url}
                alt={item.alt}
                className="gallery-img"
                width={300}
                height={300}
                loading="lazy"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </section>

      <ButterflyDivider />

      {/* ══════════════════════ SECCIÓN 8 – RSVP ══════════════════════ */}
      <section className="rsvp-section" id="confirmar">
        <div className="rsvp-bg" aria-hidden="true" />

        <p className="section-label">Confirmación</p>
        <h2 className="section-title">¿Nos acompañas?</h2>
        <p className="section-subtitle">
          Por favor confirma tu asistencia hasta el {' '}
          <strong style={{ color: 'var(--gold-light)' }}>15 de Abril, 2026</strong>
        </p>

        <div className="rsvp-card">
          <div className="whatsapp-buttons-container">
            <a
              href="https://wa.me/573136601947?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20a%20los%20XV%20de%20Julieta"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <span className="whatsapp-icon">📱</span>
              Confirmar con Virsuly
            </a>

            <a
              href="https://wa.me/573218187458?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20a%20los%20XV%20de%20Julieta"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <span className="whatsapp-icon">📱</span>
              Confirmar con Julieta
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FOOTER ══════════════════════ */}
      <footer className="footer-section">
        <div className="footer-butterfly-bg" aria-hidden="true" />
        <div className="footer-hearts">🦋 ✨ 🦋</div>
        <p className="footer-name">Julieta Rua David</p>
        <p className="footer-tagline">XV Años • 08 de Mayo, 2026</p>
        <div className="footer-hearts">🦋 🦋 🦋</div>
        <p className="footer-closing">Hecho con amor para una noche inolvidable</p>
      </footer>

    </div>
  );
}
