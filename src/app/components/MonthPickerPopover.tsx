'use client'

import React, { useEffect } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";
import { Button } from "./button";
import { CalendarIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { MonthPicker } from "./monthpicker";

export default function MonthPickerPopover({handleSetDate} : {handleSetDate: (date: Date) => void}) {
  const [date, setDate] = React.useState<Date>();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(false);
    if (date) {
      handleSetDate(date);
    }
  }, [date]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          //variant={"outline"}
          className={cn(
            "w-[100%] justify-end text-end font-bold",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>Pick a month</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <MonthPicker onMonthSelect={setDate} selectedMonth={date} />
      </PopoverContent>
    </Popover>
  );
}
