// Career start date used for the dynamic experience total across the portfolio.
export const CAREER_START_DATE = new Date(2021, 0, 1);

export function getYearsOfExperience(asOf = new Date()): number {
  const elapsedYears = asOf.getFullYear() - CAREER_START_DATE.getFullYear();
  const anniversaryHasPassed =
    asOf.getMonth() > CAREER_START_DATE.getMonth() ||
    (asOf.getMonth() === CAREER_START_DATE.getMonth() &&
      asOf.getDate() >= CAREER_START_DATE.getDate());

  return Math.max(0, elapsedYears - (anniversaryHasPassed ? 0 : 1));
}

export function getExperienceLabel(asOf = new Date()): string {
  return `${getYearsOfExperience(asOf)}+`;
}