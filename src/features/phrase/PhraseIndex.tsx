import {
  Box,
  Container,
  Grid2,
} from "@mui/material";

import { Phrase } from "./types/phrase";
import DialogAddPhrase from "./components/ModalAddPhrase";
import { useToggle } from "../../hooks/useToggle";
import EmptyState from "./components/EmptyState";
import PhraseCard from "./components/PhraseCard";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import AddPhraseButton from "./components/AddPhraseButton";
import TopBar from "./components/TopBar";

const PhraseIndex = () => {
  const [isDialogToggled, handleDialogToggle] = useToggle();
  const [searchValue, setSearchValue] = useState("");
  const filteredPhrases: Phrase[] = [
    {
      id: "1",
      text: "Hello, World!",
      createdAt: new Date(),
    },
    {
      id: "2",
      text: "Goodbye, World!",
      createdAt: new Date(),
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, minHeight: "100vh", bgcolor: "grey.50" }}>
      <TopBar title="Phrases App" />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <SearchBar value={searchValue} onChange={setSearchValue} />
        <Grid2 container spacing={3}>
          {filteredPhrases.map((phrase) => (
            <PhraseCard
              phrase={phrase}
              deletePhrase={() => console.log("buenos dias")}
            />
          ))}
        </Grid2>
        {filteredPhrases.length === 0 && <EmptyState />}

        <AddPhraseButton handleDialogToggle={handleDialogToggle} />
        <DialogAddPhrase
          closeDialog={handleDialogToggle}
          isDialogOpen={isDialogToggled}
        />
      </Container>
    </Box>
  );
};

export default PhraseIndex;
