const getISODate = (date: Date): string => date.toISOString().split("T")[0];

// Returns the date of the last Monday
const getLastMonday = (): Date => {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const dayOfWeek = today.getUTCDay();

  // If it's Monday, take the previous week
  const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  today.setUTCDate(today.getUTCDate() - daysSinceMonday);

  return today;
};

// Returns the date of Monday 8 weeks ago (start of the period)
export const getStartDate = (): string => {
  const lastMonday = getLastMonday();
  lastMonday.setUTCDate(lastMonday.getUTCDate() - 56);
  return getISODate(lastMonday);
};

// Returns the date of the last Monday in ISO format (end of the period)
export const getEndDate = (): string => {
  return getISODate(getLastMonday());
};

// Returns dates in user-friendly format
export const formatWeekRange = (isoDate: string): string => {
  const startDate = new Date(isoDate);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);

  const formatDate = (date: Date) =>
    date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });

  return `du ${formatDate(startDate)} au ${formatDate(endDate)}`;
};
