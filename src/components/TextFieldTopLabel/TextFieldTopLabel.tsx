import type { TextFieldProps } from "@mui/material";

import classNames from "classnames";
import { memo, forwardRef } from "react";

import { Box, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import mainPath from "../../configs/constants/path";

type TextFieldTopLabelProps = TextFieldProps & {
  containerClassname?: string;
  link?: string;
};

const TextFieldTopLabel = forwardRef<HTMLInputElement, TextFieldTopLabelProps>(
  (
    { containerClassname, inputProps, required, label, link, ...props },
    ref
  ) => {
    return (
      <Box
        component="div"
        className={classNames(
          "space-y-2 flex w-full flex-col",
          containerClassname
        )}
      >
        <div className="flex flex-row w-full justify-between text-start">
          {label && (
            <Typography
              sx={{
                fontFamily: "'Inter', 'Inter Fallback' !important",

                "& .MuiInputBase-root": {
                  fontFamily: "'Inter', 'Inter Fallback' !important",
                },
                "& .MuiOutlinedInput-input": {
                  fontFamily: "'Inter', 'Inter Fallback' !important",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "'Inter', 'Inter Fallback' !important",
                },
              }}
              className="!text-sm !font-medium !leading-none !peer-disabled:cursor-not-allowed !peer-disabled:opacity-70 !flex !items-center"
            >
              {label} {required && <span className="text-red-01">*</span>}
            </Typography>
          )}
          {link && (
            <NavLink
              className="ml-auto inline-block text-sm underline"
              to={mainPath.login}
            >
              {link}
            </NavLink>
          )}
        </div>
        <TextField
          slotProps={{
            htmlInput: {
              className:
                "!flex !w-full !rounded-md !border !border-input !bg-transparent !px-3 !py-1 !text-sm !shadow-sm !transition-colors !file:border-0 !file:bg-transparent !file:text-sm !file:font-medium !placeholder:text-muted-foreground !focus-visible:outline-none !focus-visible:ring-1 !focus-visible:ring-ring !disabled:cursor-not-allowed !disabled:opacity-50 !peer",
              style: {
                height: "2.25rem !important",
                fontFamily: "'Inter', 'Inter Fallback' !important",
              },
              ...inputProps,
            },
          }}
          sx={{
            "& .MuiInputBase-root": {
              fontFamily: "'Inter', 'Inter Fallback' !important",
            },
            "& .MuiOutlinedInput-input": {
              fontFamily: "'Inter', 'Inter Fallback' !important",
            },
            "& .MuiInputLabel-root": {
              fontFamily: "'Inter', 'Inter Fallback' !important",
            },
          }}
          {...props}
          inputRef={ref}
        />
      </Box>
    );
  }
);

export default memo(TextFieldTopLabel);
