import React from "react";
import {
  Stack,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";

function Vote() {
  return (
    <Stack>
      <Grid container spacing={24} justifyContent="center">
        <Grid item xs={3}>
          <Card>
            <Button sx={{ width: "100%" }}>
              <CardActions>
                <CardContent>
                  <Typography variant="h5">Vote</Typography>
                </CardContent>
              </CardActions>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <Button sx={{ width: "100%" }}>
              <CardActions>
                <CardContent>
                  <Typography variant="h5">Vote</Typography>
                </CardContent>
              </CardActions>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <Button sx={{ width: "100%" }}>
              <CardActions>
                <CardContent>
                  <Typography variant="h5">Vote</Typography>
                </CardContent>
              </CardActions>
            </Button>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <Button sx={{ width: "100%" }}>
              <CardActions>
                <CardContent>
                  <Typography variant="h5">Vote</Typography>
                </CardContent>
              </CardActions>
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Vote;
