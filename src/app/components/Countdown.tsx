'use client';
import { useEffect, useState } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export function Countdown({ targetDate }: { targetDate: string }) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculate = () => {
            const now = new Date().getTime();
            const target = new Date(targetDate).getTime();
            const diff = target - now;

            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((diff % (1000 * 60)) / 1000),
            });
        };

        calculate();
        const interval = setInterval(calculate, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    const items = [
        { value: timeLeft.days, label: 'Días' },
        { value: timeLeft.hours, label: 'Horas' },
        { value: timeLeft.minutes, label: 'Minutos' },
        { value: timeLeft.seconds, label: 'Segundos' },
    ];

    return (
        <div className="countdown-grid">
            {items.map(({ value, label }) => (
                <div key={label} className="countdown-item">
                    <span className="countdown-number">{String(value).padStart(2, '0')}</span>
                    <span className="countdown-label">{label}</span>
                </div>
            ))}
        </div>
    );
}
