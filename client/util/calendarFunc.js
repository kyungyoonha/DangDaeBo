export const calcendarFunc = (year = new Date().getFullYear(), month = new Date().getMonth()) => {
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];
  const monthList = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const first = new Date(year, month, 1).getDate();
  const last = new Date(year, month, 0).getDate();
  console.log({ first, last });

  return { first, last };
};
