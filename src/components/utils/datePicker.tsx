import { TextField } from "@mui/material";
import {
  LocalizationProvider,
  DesktopDatePicker,
  MobileDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

export const DatePickerDeskTop = ({
  value,
  updateDue,
}: {
  value: Dayjs | null;
  updateDue: (newValue: any) => void;
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="due"
        inputFormat="MM/DD/YYYY"
        value={value}
        onChange={updateDue}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export const DatePickerMobile = ({
  value,
  updateDue,
}: {
  value: Dayjs | null;
  updateDue: (newValue: any) => void;
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        label="due"
        inputFormat="MM/DD/YYYY"
        value={value}
        onChange={updateDue}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};
