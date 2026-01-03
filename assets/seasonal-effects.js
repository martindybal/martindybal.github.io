(async () => {
  if (isChristmasSeason() && !isNewYearCelebration()) {
    try {
      const { default: Snowflakes } = await import("https://cdn.skypack.dev/magic-snowflakes");
      new Snowflakes();
    } catch (error) {
      console.error("Failed to load snowflakes effect:", error);
    }
  }

  if (isNewYearCelebration()) {
    try {
      const { Fireworks } = await import("https://cdn.skypack.dev/fireworks-js");
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
  const january = 0;
  const november = 10;

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  if (month >= november) {
    const christmasEve = new Date(year, 11, 24);
    const firstAdventSunday = new Date(christmasEve).setDate(
      christmasEve.getDate() - christmasEve.getDay() - 21
    );
    return today >= firstAdventSunday;
  }

  return month == january && today.getDate() <= 6;
}

function isNewYearCelebration() {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();

  const january = 0;
  const december = 11;
  return (month === december && day === 31) || (month === january && day === 1);
}