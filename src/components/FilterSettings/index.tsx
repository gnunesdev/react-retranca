import { useState } from "react";

import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Button } from "../Button";

import { usePostsContext } from "../../context/usePostsContext";

import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { FilterSettingsContainer } from "./styles";

export function FilterSettings() {
  const { colors } = useContext(ThemeContext);

  const [nameToSearch, setNameToSearch] = useState("");

  const { handleSearchByName } = usePostsContext();

  const handleChangeNameToSearch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNameToSearch(event.target.value);
  };

  function searchByNamePosts() {
    if (nameToSearch) {
      handleSearchByName(nameToSearch);
    }
  }

  function clearSearch() {
    setNameToSearch("");
    handleSearchByName("");
  }

  return (
    <FilterSettingsContainer>
      <div className="filter-settings__search">
        <div className="filter-settings__input">
          <input
            type="text"
            placeholder="Procurar pelo título..."
            value={nameToSearch}
            onChange={(event) => handleChangeNameToSearch(event)}
          />
          <Button width={100} onClick={clearSearch} hasIcon={true}>
            <MdClear size={15} color={colors.text}></MdClear>
          </Button>
        </div>
        <Button width={100} onClick={searchByNamePosts} hasIcon={true}>
          <FaSearch size={15}></FaSearch>
        </Button>
      </div>
    </FilterSettingsContainer>
  );
}
