import type { ButtonProps } from "@mui/material";

import classNames from "classnames";
import { useState } from "react";

import { Button, IconButton } from "@mui/material";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";

import CalendarIcon from "../../assets/icons/calendar-icon";
import { IDatePickerControl } from "../../types/common.type";
import { CustomDateRangePicker } from "../custom-date-range-picker";

interface Props {
  startDate: IDatePickerControl;
  onChangeStartDate: (newValue: IDatePickerControl) => void;
  endDate: IDatePickerControl;
  onChangeEndDate: (newValue: IDatePickerControl) => void;
  applySearch?: () => void;
  minDate?: IDatePickerControl | undefined;
  maxDate?: IDatePickerControl | undefined;
  className?: string;
  buttonProps?: ButtonProps;
  shouldShowControlButtons?: boolean;
  onClickPreviousDateRange?: () => void;
  onClickNextDateRange?: () => void;
}

export default function DateRangePicker({
  applySearch,
  className,
  buttonProps,
  shouldShowControlButtons = false,
  onClickPreviousDateRange,
  onClickNextDateRange,
  ...rest
}: Props) {
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const { startDate, endDate } = rest;

  return (
    <>
      <div className="relative flex gap-2 items-center justify-center">
        {shouldShowControlButtons && (
          <IconButton onClick={onClickPreviousDateRange}>
            <ChevronLeftRounded />
          </IconButton>
        )}
        <Button
          id="custom-button"
          type="button"
          variant="outlined"
          onClick={() => setDatePickerOpen(true)}
          className={classNames(
            " !bg-white rounded-lg border !border-[#d5d6d9] justify-center items-center gap-1 flex",
            className
          )}
          {...buttonProps}
        >
          <CalendarIcon className="text-foreground h-4 w-4" />
          <div className="px-0.5 justify-center items-center flex">
            <div className="text-foreground   leading-tight text-sm ">
              {startDate ? startDate?.format("MMM D, YYYY") : "Start Date"} –{" "}
              {endDate ? endDate?.format("MMM D, YYYY") : "End Date"}
            </div>
          </div>
        </Button>
        {shouldShowControlButtons && (
          <IconButton onClick={onClickNextDateRange}>
            <ChevronRightRounded />
          </IconButton>
        )}
      </div>

      <CustomDateRangePicker
        variant="calendar"
        open={datePickerOpen}
        onClose={() => {
          setDatePickerOpen(false);

          if (applySearch) {
            applySearch();
          }
        }}
        shouldShowControlButtons={shouldShowControlButtons}
        onClickPreviousDateRange={onClickPreviousDateRange}
        onClickNextDateRange={onClickNextDateRange}
        {...rest}
      />
    </>
  );
}
