'use client'

import { useCalculateDate } from "../hooks/useCalculateDate";
import { Timeline } from "../lib/definitions";

export default function CalendarDays({ timelines, dayDate }: { timelines: Timeline[], dayDate: Date }) {

  const currentDays = useCalculateDate(dayDate, timelines);

  return (
    <div className="table-content h-full grid grid-cols-7">
      {currentDays.map((day) => {
        return (
          <div
            key={day.date.toDateString()}
            className={`calendar-day border ${day.currentMonth ? "text-black" : "text-gray-400"}`}
          >
            <div className="text-sm text-end">
              {day.number.toString().padStart(2, "0")}/
              {(day.month + 1).toString().padStart(2, "0")}
            </div>
            <div
              className={`flex flex-col justify-center items-center mt-3 ${day.currentMonth ? "" : "hidden"} ${day.startTime ? "" : "text-gray-600"}`}
            >
              <span>Log Work: {day.logTime}</span>
              <span>Total: {day.workHours}</span>
              <span className={`text-red-500 ${day.startTime ? "" : "hidden"}`}>
                {day.startTime} - {day.endTime}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
