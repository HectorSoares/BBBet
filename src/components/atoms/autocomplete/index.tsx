import { Autocomplete, TextField } from "@mui/material";


interface AutocompleteBetProps  {
    items?: any,
    label: string,
    onChange: Function
};


const AutocompleteBet = ({items, label, onChange}: AutocompleteBetProps) => {

    return (<Autocomplete
                options={items || []}
                fullWidth
                getOptionLabel={(option: any) => option?.name || option.id || option}
                renderInput={(params) => <TextField {...params} label = {label} />}
                onChange={(_, value: any) => onChange(value)}
                sx={{mt: 1}}
            />)


}

export default AutocompleteBet;