export const calendarFunc = (year, month) => {
  const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const curFirstDate = new Date(year, month, 1);
  const curFirstDayIdx = curFirstDate.getDay();

  let prevLastDate = new Date(year, month, 0);
  let prevLastDateNum = prevLastDate.getDate();
  let curLastDateNum;
  if (curFirstDate.getFullYear() % 4 === 0) {
    curLastDateNum = leapYear[month];
  } else {
    curLastDateNum = notLeapYear[month];
  }

  // 최대 6 주
  let result = [];
  let resultYear = year;
  let resultMonth = month;

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
          resultMonth = month - 1;
          insert = prevLastDateNum - (curFirstDayIdx - 1) + dayIdx;
          isGray = true;

          if (month === 0) {
            resultYear = year - 1;
            resultMonth = 11;
          }
        } else {
          day++;
          resultYear = year;
          resultMonth = month;
        }
      }
      // 마지막주
      else if (weekCnt === 5) {
        if (day >= curLastDateNum) {
          day = 1;
          isGray = true;
          resultMonth = month;
        } else {
          if (day <= 10) {
            resultMonth = month + 1;
            isGray = true;

            if (month === 11) {
              resultYear = year + 1;
              resultMonth = 0;
            }
          } else {
            resultYear = year;
            resultMonth = month;
          }
          day++;
        }
      } else {
        if (weekCnt >= 4 && day <= 10) {
          isGray = true;
          resultMonth = month + 1;

          if (month === 11) {
            resultYear = year + 1;
            resultMonth = 0;
          }
        } else {
          resultMonth = month;
        }
        if (day >= curLastDateNum) {
          day = 0;
          resultMonth = month;
        }

        day++;
      }
      weeksArray.push({ day: insert, isGray, key: changeDataFormat(resultYear, resultMonth, insert) });
    }
    result.push(weeksArray);
  }
  return result;
};

export const changeDataFormat = (year, month, date) => {
  const monthString = month.length === 1 ? `0${month + 1}` : String(month + 1);
  const dateString = date.length === 1 ? `0${date}` : String(date);

  return `${year}-${monthString}-${dateString}`;
};
