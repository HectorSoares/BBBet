import { Autocomplete, Divider, TextField } from "@mui/material";

interface AutocompleteBetProps {
  items?: any;
  label: string;
  value?: any;
  defaultValue?: any;
  onChange: (value: any) => void;
}

const AutocompleteBet = ({
  items,
  label,
  value,
  defaultValue,
  onChange,
}: AutocompleteBetProps) => {
  return (
    <Autocomplete
      options={items || []}
      fullWidth
      defaultValue={defaultValue || value || null}
      value={value}
      getOptionLabel={(option: any) => option?.name || option.id || option}
      renderInput={(params) => (
        <>
          <TextField {...params} label={label} />
          <Divider />
        </>
      )}
      onChange={(_, v: any) => onChange(v)}
      sx={{ mt: 1 }}
    />
  );
};

export default AutocompleteBet;
