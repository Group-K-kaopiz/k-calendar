export type calendarDay = {
  currentMonth: boolean;
  date: Date;
  month: number;
  number: number;
  selected: boolean;
  year: number;
  workHours: number;
  startTime: string | null;
  endTime: string | null;
  logTime: number;
};

export type Month = {
  number: number;
  name: string;
};

export type MonthCalProps = {
  selectedMonth?: Date;
  onMonthSelect?: (date: Date) => void;
  onYearForward?: () => void;
  onYearBackward?: () => void;
  callbacks?: {
    yearLabel?: (year: number) => string;
    monthLabel?: (month: Month) => string;
  };
  variant?: {
    calendar?: {
      main?: ButtonVariant;
      selected?: ButtonVariant;
    };
    chevrons?: ButtonVariant;
  };
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
};

export type ButtonVariant =
  | "default"
  | "outline"
  | "ghost"
  | "link"
  | "destructive"
  | "secondary"
  | null
  | undefined;

export type State = {
  toggleSideNav: boolean;
}

type ApprovedApplicationForm = {
  id: number;
  user_id: number;
  type_id: number;
  start_date: string;
  end_date: string;
  data: {
    tracking_times: {
      date: string;
      time: string;
      reason_id: number;
    }[];
  };
  created_at: string;
};

type LogWork = {
  id: number;
  user_id: number;
  time_spent: number; // Thời gian làm việc tính bằng giây
  date: string;
  time_spent_hour: number; // Thời gian làm việc tính bằng giờ
};

export type Timeline = {
  date: string; // Ngày
  time_in: string | null; // Giờ vào làm (hoặc null nếu không có)
  time_out: string | null; // Giờ ra làm (hoặc null nếu không có)
  symbol: string | null; // Ký hiệu (có thể null)
  location: string; // Địa điểm (chuỗi rỗng nếu không có)
  time_in_final: string | null; // Giờ vào làm cuối cùng (sau khi chỉnh sửa)
  time_out_final: string | null; // Giờ ra làm cuối cùng (sau khi chỉnh sửa)
  work: string; // Trạng thái công việc (ví dụ: "1" hoặc "N")
  work_days: number; // Số ngày làm việc
  work_hours: number; // Số giờ làm việc
  work_start: string | null; // Giờ bắt đầu làm việc
  work_end: string | null; // Giờ kết thúc làm việc
  minutes_late: number; // Phút đi muộn
  minutes_early: number; // Phút về sớm
  approved_application_forms: ApprovedApplicationForm[]; // Danh sách đơn được duyệt
  log_work: LogWork | null; // Nhật ký công việc (có thể null)
  log_work_diff: number; // Chênh lệch thời gian làm việc
  log_work_needed: number; // Thời gian làm việc cần thiết
};

export type Summary = {
  minutes_late: number;
  minutes_early: number;
  numbers_late: number;
  numbers_early: number;
  fines: number;
  bonus: number;
  actual_working_day: number;
  timekeeping_holidays: number;
  numbers_log_work_diff: number;
}

export type Total = {
  work_hour: number;
  work_day: number;
  standard_workday: number;
  log_work_hour: number;
  log_work_diff: number;
}
export type Overtime = {
  actual: number;
  multiplied_by_rate: number;
  compensatory_leave: number;
}

export type Absence = {
  absence_compensatory_leave: number;
}
