import dummy from '../config/dummy.json';

export const makeData = (dateArray) => {
  const result = {};
  dummy.forEach((item) => {
    if (result[item.date]) {
      result[item.date].push(item);
    } else {
      result[item.date] = [item];
    }
  });

  return result;
};
