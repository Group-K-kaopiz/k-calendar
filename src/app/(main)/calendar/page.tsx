'use client'

import Calendar from "@/app/components/calendar";
import { fetchOwnerCalendarData } from "@/app/lib/data";
import { useState, useEffect } from "react";

export default function Page() {
  const dayDate = new Date(Date.now());

  const currentMonth = dayDate.getMonth() + 1;
  const currentYear = dayDate.getFullYear();

  const [monthYear, setMonthYear] = useState<string>(
    `${currentMonth.toString().padStart(2, "0")}-${currentYear}`
  );

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const dataFetch = await fetchOwnerCalendarData(monthYear);
      setData(dataFetch);
    };

    fetchData();
  }, [monthYear]);

  return (
    <div>
      <Calendar
        setMonthYear={setMonthYear}
        summary={data?.summary}
        total={data?.total}
        timelines={data?.timelines}
        overtime={data?.overtime}
        absence={data?.absence}
      />
    </div>
  );
}