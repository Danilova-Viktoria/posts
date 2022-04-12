import * as React from "react";
import { Box, Typography } from "@mui/material";
import MainLayout from "../layout/MainLayout";

const NotFoundView = () => {
  return (
    <MainLayout name="Not found">
      <Box display="flex" justifyContent="center" alignItems="center" width="100%" flex="1">
        <Typography variant="h3">PAGE NOT FOUND</Typography>
      </Box>
    </MainLayout>
  );
};

export default NotFoundView;
