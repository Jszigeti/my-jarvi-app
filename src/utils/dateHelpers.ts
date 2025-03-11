const getISODate = (date: Date) => date.toISOString().split("T")[0];

const getLastMonday = () => {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const dayOfWeek = today.getUTCDay();
  const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  today.setUTCDate(today.getUTCDate() - daysSinceMonday);
  return today;
};

export const getStartDate = () => {
  const lastMonday = getLastMonday();
  lastMonday.setUTCDate(lastMonday.getUTCDate() - 56); // 🔥 On recule de 8 semaines
  return getISODate(lastMonday);
};

export const getEndDate = () => {
  return getISODate(getLastMonday());
};
