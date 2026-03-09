'use client';
import { useEffect, useState } from 'react';

export function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
            <span className="nav-logo">Sofía</span>
            <ul className="nav-links">
                <li><a href="#detalles">Detalles</a></li>
                <li><a href="#programa">Programa</a></li>
                <li><a href="#galeria">Galería</a></li>
                <li><a href="#rsvp">RSVP</a></li>
            </ul>
        </nav>
    );
}
