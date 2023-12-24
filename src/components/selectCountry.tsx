import { Autocomplete, Grid, TextField } from "@mui/material";
import useAxios from "../hooks/useAxios";

export default function SelectCountry() {
  const [data] = useAxios("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_QEBV1pBhHxozJLqZkTsRTt9Z0ieEMXIOsdfmfu12")
  console.log(data)

  return (
    <Grid item>
      <Autocomplete
        size="small"
        options={data}
        renderInput={(params) => <TextField {...params} label="from" />}
      />
    </Grid>
  );
}