import { Timeline } from "../lib/definitions";

export const calculateDate = (dayDate: Date, timelines: Timeline[]) => {

  let idx = 0;

  const firstDayOfMonth = new Date(
    dayDate.getFullYear(),
    dayDate.getMonth(),
    1
  );
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const currentDays = [];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 6);
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekdayOfFirstDay + 1)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let workHours = 0;
    let startTime = "";
    let endTime = "";
    let logTime = 0;

    if (firstDayOfMonth.getMonth() === dayDate.getMonth()) {
      const data = timelines[idx];
      workHours = data?.work_hours;
      startTime = data?.time_in_final;
      endTime = data?.time_out_final;
      logTime = data?.log_work?.time_spent_hour;
      idx = idx + 1;
    }

    const calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === dayDate.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === dayDate.toDateString(),
      year: firstDayOfMonth.getFullYear(),
      workHours: workHours || 0,
      startTime: startTime || null,
      endTime: endTime || null,
      logTime: logTime || 0,
    };

    currentDays.push(calendarDay);
  }

  const lastIndex = currentDays[35].currentMonth ? 42 : 35;

  return currentDays.slice(0, lastIndex);
};
