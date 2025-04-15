import type { Dayjs } from "dayjs";

import { useState, useEffect, useCallback } from "react";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FormHelperText from "@mui/material/FormHelperText";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";

import type { UseDateRangePickerReturn } from "./types";
import { fIsAfter } from "../utils/formatTime";

// ----------------------------------------------------------------------

export function CustomDateRangePicker({
  open,
  endDate,
  onClose,
  startDate,
  onChangeEndDate,
  variant = "input",
  onChangeStartDate,
  title,
  minDate,
  maxDate,
  shouldShowControlButtons,
  onClickPreviousDateRange,
  onClickNextDateRange,
}: Omit<
  UseDateRangePickerReturn,
  "onOpen" | "onReset" | "setStartDate" | "setEndDate"
>) {
  const isCalendarView = variant === "calendar";

  const [tempStartDate, setTempStartDate] = useState<Dayjs | null>(startDate);
  const [tempEndDate, setTempEndDate] = useState<Dayjs | null>(endDate);

  const error = fIsAfter(tempStartDate, tempEndDate);

  const handleApply = useCallback(() => {
    onChangeStartDate(tempStartDate);
    onChangeEndDate(tempEndDate);
    onClose();
  }, [tempStartDate, tempEndDate, onChangeStartDate, onChangeEndDate, onClose]);

  const handleCancel = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    setTempStartDate(startDate);
  }, [startDate]);

  useEffect(() => {
    setTempEndDate(endDate);
  }, [endDate]);

  return (
    <Dialog
      fullWidth
      maxWidth={isCalendarView ? false : "xs"}
      open={open}
      onClose={handleCancel}
      PaperProps={{ sx: { ...(isCalendarView && { maxWidth: 720 }) } }}
    >
      <DialogTitle sx={{ pb: 2 }}>{title}</DialogTitle>

      <DialogContent sx={{ ...(isCalendarView && { overflow: "unset" }) }}>
        <Stack
          justifyContent="center"
          spacing={isCalendarView ? 3 : 2}
          direction={isCalendarView ? "row" : "column"}
          sx={{ pt: 1 }}
        >
          {isCalendarView ? (
            <div className="flex flex-col gap-3">
              {shouldShowControlButtons && (
                <div className="flex w-full items-center justify-between">
                  <IconButton onClick={onClickPreviousDateRange}>
                    <ChevronLeftRounded />
                  </IconButton>
                  <IconButton onClick={onClickNextDateRange}>
                    <ChevronRightRounded />
                  </IconButton>
                </div>
              )}

              <div className="flex items-center justify-center gap-4">
                <Paper
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    borderColor: "divider",
                    borderStyle: "dashed",
                  }}
                >
                  <DateCalendar
                    value={tempStartDate}
                    onChange={setTempStartDate}
                    minDate={minDate as Dayjs | undefined}
                    maxDate={maxDate as Dayjs | undefined}
                  />
                </Paper>

                <Paper
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    borderColor: "divider",
                    borderStyle: "dashed",
                  }}
                >
                  <DateCalendar
                    value={tempEndDate}
                    onChange={setTempEndDate}
                    minDate={minDate as Dayjs | undefined}
                    maxDate={maxDate as Dayjs | undefined}
                  />
                </Paper>
              </div>
            </div>
          ) : (
            <>
              <DatePicker
                label="Start date"
                value={tempStartDate}
                onChange={setTempStartDate}
                minDate={minDate as Dayjs | undefined}
                maxDate={maxDate as Dayjs | undefined}
              />

              <DatePicker
                label="End date"
                value={tempEndDate}
                onChange={setTempEndDate}
                minDate={minDate as Dayjs | undefined}
                maxDate={maxDate as Dayjs | undefined}
              />
            </>
          )}
        </Stack>

        {error && (
          <FormHelperText error sx={{ px: 2 }}>
            End date error
          </FormHelperText>
        )}
      </DialogContent>

      <DialogActions>
        <Button disabled={error} variant="contained" onClick={handleApply}>
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
}
