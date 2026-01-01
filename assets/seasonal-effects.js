import Snowflakes from "https://cdn.skypack.dev/magic-snowflakes";
import { Fireworks } from "https://cdn.skypack.dev/fireworks-js";

if (isChristmasSeason()) {
    new Snowflakes();
}

if (isNewYearCelebration()) {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    document.body.appendChild(container);

    const fireworks = new Fireworks(container, {
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
        intensity: 30,
        flickering: 50,
        lineStyle: 'round',
        hue: {
            min: 0,
            max: 360
        },
        delay: {
            min: 30,
            max: 60
        },
        rocketsPoint: 50,
        lineWidth: {
            explosion: {
                min: 1,
                max: 3
            },
            trace: {
                min: 1,
                max: 2
            }
        },
        brightness: {
            min: 50,
            max: 80
        },
        decay: {
            min: 0.015,
            max: 0.03
        },
        mouse: {
            click: false,
            move: false
        }
    });
    fireworks.start();
}

function isChristmasSeason() {
    const today = new Date();
    const year = today.getFullYear();
    const christmasEve = new Date(year, 11, 24);
    const firstAdventSunday = new Date(christmasEve).setDate(christmasEve.getDate() - christmasEve.getDay() - 21);
    const epiphany = new Date(year, 0, 6);
    return today >= firstAdventSunday && today <= epiphany;
}

function isNewYearCelebration() {
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDate();
    // December 31st (month is 11 for December) or January 1st (month is 0 for January)
    return (month === 11 && day === 31) || (month === 0 && day === 1);
}
