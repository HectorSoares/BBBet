import { Autocomplete, Divider, TextField } from "@mui/material";

interface AutocompleteBetProps {
  items?: any;
  label: string;
  value?: any;
  onChange: (value: any) => void;
}

const AutocompleteBet = ({
  items,
  label,
  value,
  onChange,
}: AutocompleteBetProps) => {
  return (
    <Autocomplete
      options={items || []}
      fullWidth
      defaultValue={value || null}
      getOptionLabel={(option: any) => option?.name || option.id || option}
      renderInput={(params) => (
        <>
          <TextField {...params} label={label} />
          <Divider />
        </>
      )}
      onChange={(_, value: any) => onChange(value)}
      sx={{ mt: 1 }}
    />
  );
};

export default AutocompleteBet;
