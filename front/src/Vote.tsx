import React from "react";
import {
  Stack,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  CardActions,
  Dialog,
  DialogTitle,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addVote, getListProjet, getListVote } from "./services/api";
import { useQuery } from "@tanstack/react-query";

function Vote() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const dayjs = require("dayjs");
  const { data } = useQuery(
    ["getListProjet"],
    async () => await getListProjet(),
    {
      retry: false,
    }
  );

  const validationSchema = Yup.object({
    valeurVote: Yup.boolean().required("Veuillez choisir une valeur"),
    date: Yup.date().required("Veuillez choisir une date"),
  });

  const formik = useFormik({
    initialValues: {
      valeurVote: false,
      date: dayjs().format("YYYY-MM-DD"),
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      console.log(formik.values);
      refetch().then(async ({ data }) => {
        console.log(data);
      });
      setDialogOpen(false);
    },
  });

  const addVoteArgs = {
    valeurVote: formik.values.valeurVote ? 1 : 0,
    date: formik.values.date,
    idUtilisateurVote: 1,
    idProjetVote: 1,
  };

  const getListVoteArgs = {
    id: 1,
  };

  const { refetch } = useQuery(
    ["addVote", addVoteArgs],
    async () => await addVote(addVoteArgs),
    {
      enabled: false,
      retry: false,
    }
  );

  const { data: votes } = useQuery(
    ["getListVote"],
    async () => await getListVote(getListVoteArgs),
    {
      retry: false,
    }
  );

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Stack>
      <Grid container spacing={24} justifyContent="center">
        {data?.map((projet) => (
          <Grid item xs={3}>
            <Card>
              <Button sx={{ width: "100%" }} onClick={handleDialogOpen}>
                <CardActions>
                  <CardContent>
                    <Typography variant="h5">{projet.nomProjet}</Typography>
                  </CardContent>
                </CardActions>
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Vote</DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              id="valeurVote"
              name="valeurVote"
              label="Je suis pour"
              value={formik.values.valeurVote}
              onChange={formik.handleChange}
              sx={{ marginBottom: "30px" }}
            />
          </FormGroup>
          <Typography>{`Votes pour : ${votes?.valeurPour}`}</Typography>
          <Typography>{`Votes contre : ${votes?.valeurContre}`}</Typography>
          <Button type="submit">Valider</Button>
        </form>
      </Dialog>
    </Stack>
  );
}

export default Vote;
