import { useState, useCallback } from "react";

import type {
  UseDateRangePickerProps,
  UseDateRangePickerReturn,
} from "./types";
import { IDatePickerControl } from "../../types/common.type";
import { fDateRangeShortLabel, fIsAfter } from "../utils/formatTime";

// ----------------------------------------------------------------------

export function useDateRangePicker({
  end,
  start,
  maxDate,
  minDate,
}: UseDateRangePickerProps): UseDateRangePickerReturn {
  const [open, setOpen] = useState(false);

  const [endDate, setEndDate] = useState(end as IDatePickerControl);

  const [startDate, setStartDate] = useState(start as IDatePickerControl);

  const error = fIsAfter(startDate, endDate);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onChangeStartDate = useCallback((newValue: IDatePickerControl) => {
    setStartDate(newValue);
  }, []);

  const onChangeEndDate = useCallback(
    (newValue: IDatePickerControl) => {
      if (error) {
        setEndDate(null);
      }
      setEndDate(newValue);
    },
    [error]
  );

  const onReset = useCallback(() => {
    setStartDate(null);
    setEndDate(null);
  }, []);

  return {
    startDate: startDate as IDatePickerControl,
    endDate: endDate as IDatePickerControl,
    minDate,
    maxDate,
    onChangeStartDate,
    onChangeEndDate,
    //
    open,
    onOpen,
    onClose,
    onReset,
    //
    selected: !!startDate && !!endDate,
    error,
    //
    label: fDateRangeShortLabel(startDate, endDate, true),
    shortLabel: fDateRangeShortLabel(startDate, endDate),
    //
    setStartDate,
    setEndDate,
  };
}
