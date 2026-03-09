'use client';
import { useState, useEffect } from 'react';

// URL de tu script de Google Apps - Usando variable de entorno para Vercel
const GOOGLE_SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || 'https://script.google.com/macros/s/AKfycbyZf8PHxueoq_CsvIS7GBQwLLanY7r4PCeSOvAmf5JKvQIJbh-9GyikX6WHELA7pE5v-Q/exec';

export function RSVPForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [guestCount, setGuestCount] = useState(1);
    const [names, setNames] = useState<string[]>(['']);
    const [message, setMessage] = useState('');

    // Sincronizar el número de campos con la cantidad de invitados
    useEffect(() => {
        setNames(prev => {
            const next = [...prev];
            if (next.length < guestCount) {
                // Agregar campos vacíos
                return [...next, ...Array(guestCount - next.length).fill('')];
            } else if (next.length > guestCount) {
                // Quitar campos sobrantes
                return next.slice(0, guestCount);
            }
            return next;
        });
    }, [guestCount]);

    const handleNameChange = (index: number, value: string) => {
        const newNames = [...names];
        newNames[index] = value;
        setNames(newNames);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            fecha: new Date().toLocaleString(),
            invitados: guestCount,
            nombres: names.join(', '),
            mensaje: message
        };

        try {
            await fetch(GOOGLE_SHEET_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            setSubmitted(true);
        } catch (error) {
            console.error('Error al enviar:', error);
            alert('Hubo un error al enviar la confirmación. Por favor intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="rsvp-success">
                <div className="rsvp-success-icon">🦋</div>
                <div className="rsvp-success-title">¡Confirmado!</div>
                <p className="rsvp-success-text">
                    Gracias por confirmar tu asistencia.<br />
                    Los nombres registrados son: <strong>{names.filter(n => n).join(', ')}</strong>.<br />
                    ¡Nos vemos pronto! ✨
                </p>
            </div>
        );
    }

    return (
        <form className="rsvp-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="rsvp-guests">¿Cuántos nos acompañarán?</label>
                <select
                    id="rsvp-guests"
                    value={guestCount}
                    onChange={e => setGuestCount(parseInt(e.target.value))}
                >
                    {[1, 2, 3, 4, 5, 6].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'Invitado' : 'Invitados'}</option>
                    ))}
                </select>
            </div>

            <div className="names-container" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {names.map((name, index) => (
                    <div className="form-group" key={index}>
                        <label htmlFor={`name-${index}`}>
                            {index === 0 ? 'Nombre del contacto principal' : `Nombre del invitado ${index + 1}`}
                        </label>
                        <input
                            id={`name-${index}`}
                            type="text"
                            placeholder="Escribe el nombre completo..."
                            required
                            value={name}
                            onChange={e => handleNameChange(index, e.target.value)}
                        />
                    </div>
                ))}
            </div>

            <div className="form-group">
                <label htmlFor="rsvp-message">Dinos algo especial (opcional)</label>
                <textarea
                    id="rsvp-message"
                    placeholder="Escribe tus buenos deseos..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
            </div>

            <button
                type="submit"
                id="rsvp-submit-btn"
                className="rsvp-btn"
                disabled={loading}
                style={{ opacity: loading ? 0.7 : 1 }}
            >
                {loading ? 'Enviando...' : '✨ Confirmar Asistencia'}
            </button>
        </form>
    );
}
