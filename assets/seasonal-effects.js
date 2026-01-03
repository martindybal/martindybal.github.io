(async () => {
  if (isChristmasSeason() && !isNewYearCelebration()) {
    try {
      const module = await import("https://cdn.skypack.dev/magic-snowflakes");
      const Snowflakes = module.default;
      new Snowflakes();
    } catch (error) {
      console.error("Failed to load snowflakes effect:", error);
    }
  }

  if (isNewYearCelebration()) {
    try {
      const module = await import("https://cdn.skypack.dev/fireworks-js");
      const { Fireworks } = module;
      
      const container = document.createElement("div");
      container.style.position = "fixed";
      container.style.top = "0";
      container.style.left = "0";
      container.style.width = "100%";
      container.style.height = "100%";
      container.style.pointerEvents = "none";
      container.style.zIndex = "9999";

      document.body.appendChild(container);

      const fireworks = new Fireworks(container);
      fireworks.start();
    } catch (error) {
      console.error("Failed to load fireworks effect:", error);
    }
  }
})();

function isChristmasSeason() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  var january = 0;
  var november = 10;
  if (month >= november) {
    const christmasEve = new Date(year, 11, 24);
    const firstAdventSunday = new Date(christmasEve).setDate(
      christmasEve.getDate() - christmasEve.getDay() - 21
    );
    return today >= firstAdventSunday;
  } else if (month == january) {
    const epiphany = new Date(year, 0, 6);
    return today <= epiphany;
  }

  return false;
}

function isNewYearCelebration() {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  // December 31st (month is 11 for December) or January 1st (month is 0 for January)
  return (month === 11 && day === 31) || (month === 0 && day === 1);
}
