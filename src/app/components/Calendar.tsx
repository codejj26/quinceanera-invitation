'use client'

import styles from '@/styles/Calendar.module.css'

export default function Calendar() {
    const daysOfWeek = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

    // Mayo 2026 empieza el viernes 1
    // El 8 es el segundo viernes
    const monthDays = [
        null, null, null, null, null, 1, 2,  // Primera semana (May 1 es viernes)
        3, 4, 5, 6, 7, 8, 9,                // El 8 es el día especial
        10, 11, 12, 13, 14, 15, 16,
        17, 18, 19, 20, 21, 22, 23,
        24, 25, 26, 27, 28, 29, 30,
        31
    ];

    return (
        <div className={styles.calendarContainer}>
            <h3 className={styles.monthTitle}>MAYO 2026</h3>

            <div className={styles.calendarGrid}>
                {daysOfWeek.map((day, i) => (
                    <div key={i} className={styles.dayHeader}>{day}</div>
                ))}

                {monthDays.map((day, i) => (
                    <div
                        key={i}
                        className={`
              ${styles.dayCell} 
              ${day === 8 ? styles.specialDay : ''} 
              ${day === null ? styles.emptyCell : ''}
            `}
                    >
                        {day && (
                            <>
                                <span className={styles.dayNumber}>{day}</span>
                                {day === 8 && <span className={styles.butterflyIcon}>🦋</span>}
                            </>
                        )}
                    </div>
                ))}
            </div>

            <p className={styles.saveTheDate}>¡Sé parte de mi historia!</p>
        </div>
    );
}
