'use client'

import React from "react";
import { useState } from "react";
import CalendarDays from "@/app/components/CalendarDays";
import Statistics from "@/app/components/Statistics";
import MonthPickerPopover from "@/app/components/MonthPickerPopover";
import { Timeline, Summary, Total, Absence, Overtime } from "../lib/definitions";

export default function Calendar({ setMonthYear, summary, total, timelines, overtime, absence }: { setMonthYear: (date: string) => void, summary: Summary; total: Total; timelines: Timeline[], overtime: Overtime, absence: Absence }) {

  const weekdays = [
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
    "Chủ nhật",
  ];

  const [currentDate, setCurrentDate] = useState(new Date(Date.now()));

  const handleSetDate = (date: Date) => {
    setCurrentDate(date);
    setMonthYear(`${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getFullYear()}`);
  };

  return (
    <div className="calendar w-[100%] h-[80%] mt-6 m-auto">
      <div
        id="calendar-header"
        className="w-[100%] h-[5%] flex items-center justify-between"
      >
        <div className="font-bold flex gap-2 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
          </span>
          Tháng {(currentDate.getMonth() + 1).toString().padStart(2, "0")} /{" "}
          {currentDate.getFullYear()}
        </div>
        <div className="w-[10%]">
          <MonthPickerPopover handleSetDate={handleSetDate} />
        </div>
      </div>
      <div className="calendar-body w-[100%] h-[95%] grid grid-cols-7">
        <div className="calendar-content h-[100%] col-span-6 grid grid-rows-16 border">
          <div className=" grid grid-cols-7">
            {weekdays.map((weekday, idx) => {
              return (
                <div
                  key={idx}
                  className="weekday place-content-center font-bold text-center border border-b-0"
                >
                  {weekday}
                </div>
              );
            })}
          </div>
          <div className="row-span-15">
            <CalendarDays timelines={timelines} dayDate={currentDate} />
          </div>
        </div>
        <Statistics summary={summary} total={total} overtime={overtime} absence={absence} />
      </div>
    </div>
  );
}
