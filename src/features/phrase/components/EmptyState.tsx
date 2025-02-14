import { Box, Typography } from "@mui/material";

const EmptyState = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 8,
      }}
    >
      <Typography variant="body1" color="text.secondary">
        No phrases yet. Click the + button to add one!
      </Typography>
    </Box>
  );
};

export default EmptyState;
