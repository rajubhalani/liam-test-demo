import { PhotoCamera } from "@mui/icons-material";
import { Box, Button, Grid, Paper, TextField, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FormEvent, useEffect, useState } from "react";

const useStyle = makeStyles((theme: Theme) => ({
  image: {
    borderRadius: "50%",
    height: "100px",
  },
  updateButton:{
    backgroundColor:theme.palette.primary.main  
  }
}));

function MyProfile() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    image: "",
  });

  const classes = useStyle();
  useEffect(() => {
    let data: any = localStorage.getItem("data");
    let parsedData = JSON.parse(data);
    setValues(parsedData?.value);
  }, []);

  const handelChange = (e: any) => {
    if (e.target.type === "file") {
      getBase64(e.target.files[0]).then((res: any) =>
        setValues((values) => ({ ...values, [e.target.name]: res }))
      );
    }
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.setItem("data", JSON.stringify({ value: values }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 165px)",
      }}
    >
      <form onSubmit={handleSave}>
        <Box sx={{background:"#e8f1ff",padding:"25px", borderRadius: "10px"}}>
          <Paper style={{ width: "150px", margin: "auto",paddingTop:"10px" }}>
            <Box
              width="150px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <input
                type="file"
                accept="image/*"
                name="image"
                id="file"
                onChange={(e) => handelChange(e)}
                style={{ display: "none" }}
              />
              <img
                src={
                  values?.image
                    ? values?.image
                    : "https://media.istockphoto.com/photos/mountain-landscape-with-green-grass-meadows-scenic-camping-himalayas-picture-id1284679139?s=2048x2048"
                }
                className={classes.image}
                id="output"
                width="100"
                alt="test"
                aria-required
              />
            </Box>
            <Box display="flex" justifyContent="flex-end" padding="10px 20px">
              <label htmlFor="file" style={{ cursor: "pointer" }}>
                <PhotoCamera />
              </label>
            </Box>
          </Paper>
          <Box
            sx={{
              display: "grid",
              gap: "10px",
              marginTop: "10px",
              width: "300px",
            }}
          >
            <Grid item xs={12}>
              <TextField
                id="name"
                label="name"
                name="name"
                value={values?.name}
                onChange={(e) => handelChange(e)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="email"
                name="email"
                type="email"
                required
                value={values?.email}
                onChange={(e) => handelChange(e)}
                fullWidth
              />
            </Grid>
          </Box>
          <Button fullWidth variant="contained" type="submit" className={classes.updateButton} sx={{ marginTop: "10px",background:"#112a48" }}>
            Update
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default MyProfile;

const getBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};
