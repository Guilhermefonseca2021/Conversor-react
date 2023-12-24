import { Grid, TextField } from "@mui/material";

export default function InputAmount() {
  return (
    <Grid item>
        <TextField
            label="Amount"
            fullWidth
            size="small"
            inputProps={{
                type: "number"
            }}
        />
    </Grid>
  )
}

