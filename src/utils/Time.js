export const getTimeRemaining = (weddingDate) => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

export const getDayName = (dateString, locale) => {
  return new Date(dateString).toLocaleDateString(locale, {
    weekday: "long",
  });
};

export const getDateParts = (dateString, locale) => {

  const date = new Date(dateString);

  return {
    date: date.toLocaleDateString(locale, {
      day: "numeric",
    }),

    month: date.toLocaleDateString(locale, {
      month: "long",
    }),

    year: date.toLocaleDateString(locale, {
      year: "numeric",
    }),
  };
};
