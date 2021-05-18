import { useState } from "react";
import { Button } from "../../../components/Button";
import { FilterSettingsContainer } from "./styles";

export function FilterSettings() {
  const [nameToSearch, setNameToSearch] = useState("");

  function handleNameToSearchChange() {
    setNameToSearch(nameToSearch);
  }

  function searchByNamePosts() {
    console.log("dadadada");
  }

  return (
    <FilterSettingsContainer>
      <input type="text" onChange={handleNameToSearchChange} />
      <Button width={100} onClick={searchByNamePosts} description="Pesquisar" />
    </FilterSettingsContainer>
  );
}
