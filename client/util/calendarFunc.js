export const calcendarFunc = (year, month) => {
  const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const curFirstDate = new Date(year, month, 1);
  const curFirstDayIdx = curFirstDate.getDay();

  let prevLastDateNum = new Date(year, month, 0).getDate();
  let curLastDateNum;
  if (curFirstDate.getFullYear() % 4 === 0) {
    curLastDateNum = leapYear[month];
  } else {
    curLastDateNum = notLeapYear[month];
  }

  // 최대 6 주
  let result = [];
  let day = 1;
  for (let weekCnt = 0; weekCnt < 6; weekCnt++) {
    // 불필요한 6주차제거
    if (weekCnt === 5 && day <= 10) break;

    let weeksArray = [];
    for (let dayIdx = 0; dayIdx <= 6; dayIdx++) {
      let insert = day;
      let isGray = false;
      // 첫째주
      if (weekCnt === 0) {
        if (dayIdx < curFirstDayIdx) {
          insert = prevLastDateNum - (curFirstDayIdx - 1) + dayIdx;
          isGray = true;
        } else {
          day++;
        }
      }
      // 마지막주
      else if (weekCnt === 5) {
        if (day >= curLastDateNum) {
          day = 1;
          isGray = true;
        } else {
          if (day <= 10) {
            isGray = true;
          }
          day++;
        }
      } else {
        if (weekCnt >= 4 && day <= 10) {
          isGray = true;
        }
        if (day >= curLastDateNum) {
          day = 0;
        }

        day++;
      }
      weeksArray.push({ day: insert, isGray });
    }
    result.push(weeksArray);
  }
  return result;
};
