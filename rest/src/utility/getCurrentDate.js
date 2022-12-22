export const getCurrentDay = () => {
  const date = new Date();
  const currentDay = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  return currentDay;
};
