import Snowflakes from "https://cdn.skypack.dev/magic-snowflakes";
import { Fireworks } from "https://cdn.skypack.dev/fireworks-js";

if (isChristmasSeason() && !isNewYearCelebration()) {
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
    
    const fireworks = new Fireworks(container)
    fireworks.start();
}

function isChristmasSeason() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    
    // If we're in January, check against previous year's Christmas season
    const christmasYear = month === 0 ? year - 1 : year;
    
    // Calculate first Advent Sunday (4th Sunday before Christmas Eve)
    const christmasEve = new Date(christmasYear, 11, 24);
    const firstAdventSunday = new Date(christmasEve);
    firstAdventSunday.setDate(christmasEve.getDate() - christmasEve.getDay() - 21);
    
    // Epiphany is January 6 of the year after Christmas
    const epiphany = new Date(christmasYear + 1, 0, 6);
    
    return today >= firstAdventSunday && today <= epiphany;
}

function isNewYearCelebration() {
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDate();
    // December 31st (month is 11 for December) or January 1st (month is 0 for January)
    return (month === 11 && day === 31) || (month === 0 && day === 1);
}
