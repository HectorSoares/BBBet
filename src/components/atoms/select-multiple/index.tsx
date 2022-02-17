import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface SelectMultipleProps {
  items: any;
  label: string;
  onChange: any;
  betIndex: string;
}

export default function SelectMultiple({
  items,
  label,
  onChange,
  betIndex,
}: SelectMultipleProps) {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={items}
      disableCloseOnSelect
      onChange={(event: any, newValue: any | null) => {
        onChange(newValue, betIndex);
      }}
      getOptionLabel={(option: any) => option?.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option?.name}
        </li>
      )}
      style={{ width: "100%", marginBottom: 6 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
