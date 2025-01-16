'use client'

import { Summary, Total, Overtime, Absence } from "../lib/definitions";

export default function Statistics({summary, total, overtime, absence}: {summary: Summary, total: Total, overtime: Overtime, absence: Absence}) {
  return (
    <div className="statistic grid grid-rows-16 border">
      <div className="border border-l-0 text-center place-content-center border-b-0 font-bold">
        Tổng hợp
      </div>
      <div className="row-span-15 grid grid-rows-14">
        <div className="flex flex-row items-center justify-between border border-l-0 px-1">
          <div>Công làm việc</div>
          <div>{total.work_day}</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số công chuẩn</div>
          <div>{total.standard_workday}</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số lần đi muộn</div>
          <div>{summary.numbers_late}</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số phút đi muộn</div>
          <div>{summary.minutes_late}</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số lần về sớm</div>
          <div>{summary.numbers_early}</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số phút về sớm</div>
          <div>{summary.minutes_early}</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Phạt</div>
          <div>{summary.fines}</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Thưởng</div>
          <div>{summary.bonus}</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số giờ OT tính công</div>
          <div>{overtime.actual}</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>
            <p>Số giờ OT tính công</p>
            <p>(Đã nhân hệ số)</p>
          </div>
          <div>{overtime.multiplied_by_rate}</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số giờ OT nghỉ bù</div>
          <div>{overtime.compensatory_leave}</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số giờ vắng mặt - nghỉ bù</div>
          <div>{absence.absence_compensatory_leave}</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số phép còn lại</div>
          <div>{summary.timekeeping_holidays}</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số lần sai log work</div>
          <div>{summary.numbers_log_work_diff}</div>
        </div>
      </div>
    </div>
  );
}
