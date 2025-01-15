export const scaleValue = (num) => {
  const minNew = 1;
  const maxNew = 5;
  return minNew + num * (maxNew - minNew);
};
