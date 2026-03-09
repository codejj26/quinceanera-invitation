'use client'

import { useState, useRef, useEffect } from 'react'
import styles from '@/styles/MusicPlayer.module.css'

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.4; // Volumen fijo al 40%
        }
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className={styles.musicPlayerContainer}>
            <audio
                ref={audioRef}
                loop
                src="/music/querida-yo.mp3"
                onError={() => console.log('No se pudo cargar la música')}
            />

            <div className={styles.musicPlayer}>
                {/* Información de la canción */}
                <div className={styles.songInfo}>
                    <div className={styles.songIcon}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                        </svg>
                    </div>
                    <div className={styles.songDetails}>
                        <p className={styles.songTitle}>XV Años</p>
                        <p className={styles.songArtist}>Música de Julieta</p>
                    </div>
                </div>

                {/* Controles */}
                <div className={styles.controls}>
                    <button
                        className={styles.playButton}
                        onClick={togglePlay}
                        aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
                    >
                        {isPlaying ? (
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Visualizador de audio */}
                <div className={styles.visualizerContainer}>
                    <div className={`${styles.audioVisualizer} ${isPlaying ? styles.playing : ''}`}>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
