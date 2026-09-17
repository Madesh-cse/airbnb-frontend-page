
'use client';

import { useState } from 'react';

interface CalendarProps {
  checkIn: string;
  checkOut: string;
  nights: number;
  location: string;
}

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function parseDate(dateStr: string): Date | null {
  if (!dateStr) {
    return null;
  }

  const date = new Date(dateStr);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date;
}

function buildMonthGrid(
  year: number,
  month: number
): (number | null)[] {
  if (!Number.isFinite(year) || !Number.isFinite(month)) {
    return [];
  }
  const firstDate = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0);
  if (
    Number.isNaN(firstDate.getTime()) ||
    Number.isNaN(lastDate.getTime())
  ) {
    return [];
  }

  const firstDay = firstDate.getDay();
  const daysInMonth = lastDate.getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) {
    cells.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(day);
  }

  return cells;
}

function formatDisplay(dateStr: string): string {
  const date = parseDate(dateStr);

  if (!date) {
    return 'Select date';
  }

  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function Calendar({
  checkIn,
  checkOut,
  nights,
  location,
}: CalendarProps) {
  const checkInDate = parseDate(checkIn);
  const checkOutDate = parseDate(checkOut);
  const today = new Date();
  const initialDate = checkInDate ?? today;
  const [viewYear, setViewYear] = useState(
    initialDate.getFullYear()
  );
  const [viewMonth, setViewMonth] = useState(
    initialDate.getMonth()
  );

  const isInRange = (
    year: number,
    month: number,
    day: number
  ) => {
    if (!checkInDate || !checkOutDate) {
      return false;
    }

    const date = new Date(year, month, day);

    return (
      date >= checkInDate &&
      date <= checkOutDate
    );
  };

  const isEndpoint = (
    year: number,
    month: number,
    day: number
  ) => {
    if (!checkInDate || !checkOutDate) {
      return false;
    }

    const date = new Date(year, month, day);
    const sameAsCheckIn =
      date.getFullYear() === checkInDate.getFullYear() &&
      date.getMonth() === checkInDate.getMonth() &&
      date.getDate() === checkInDate.getDate();

    const sameAsCheckOut =
      date.getFullYear() === checkOutDate.getFullYear() &&
      date.getMonth() === checkOutDate.getMonth() &&
      date.getDate() === checkOutDate.getDate();

    return sameAsCheckIn || sameAsCheckOut;
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((year) => year + 1);
    } else {
      setViewMonth((month) => month + 1);
    }
  };

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((year) => year - 1);
    } else {
      setViewMonth((month) => month - 1);
    }
  };

  const renderMonth = (
    year: number,
    month: number
  ) => {
    const days = buildMonthGrid(year, month);

    return (
      <div className="flex-1">
        <p className="font-semibold mb-4 text-center">
          {MONTH_NAMES[month]} {year}
        </p>
        <div className="grid grid-cols-7 gap-y-2 text-center text-xs text-gray-500 mb-2">
          {WEEKDAYS.map((weekday, index) => (
            <span key={`${weekday}-${index}`}>
              {weekday}
            </span>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-y-1 text-center text-sm">
          {days.map((day, index) => {
            if (day === null) {
              return (
                <span key={`empty-${index}`} />
              );
            }

            const inRange = isInRange(
              year,
              month,
              day
            );

            const endpoint = isEndpoint(
              year,
              month,
              day
            );

            return (
              <span
                key={`${year}-${month}-${day}`}
                className={`w-9 h-9 mx-auto flex items-center justify-center rounded-full ${
                  endpoint
                    ? 'bg-black text-white font-semibold'
                    : inRange
                    ? 'bg-gray-100'
                    : ''
                }`}
              >
                {day}
              </span>
            );
          })}
        </div>
      </div>
    );
  };

  const secondMonth =
    viewMonth === 11
      ? 0
      : viewMonth + 1;

  const secondYear =
    viewMonth === 11
      ? viewYear + 1
      : viewYear;

  return (
    <div className="mb-8 pb-8 border-b border-gray-200">
      <h2 className="text-xl font-semibold mb-1">
        {nights} nights in {location}
      </h2>
      <p className="text-gray-500 mb-6">
        {formatDisplay(checkIn)} -{' '}
        {formatDisplay(checkOut)}
      </p>
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={prevMonth}
          aria-label="Previous month"
          className="p-2 rounded-full hover:bg-gray-100"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={nextMonth}
          aria-label="Next month"
          className="p-2 rounded-full hover:bg-gray-100"
        >
          ›
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-10">
        {renderMonth(
          viewYear,
          viewMonth
        )}

        {renderMonth(
          secondYear,
          secondMonth
        )}
      </div>
      <button
        type="button"
        className="mt-6 text-sm underline font-semibold"
      >
        Clear dates
      </button>
    </div>
  );
}
