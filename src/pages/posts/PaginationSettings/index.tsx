import { Button } from "../../../components/Button";

import { PaginationsPostsContainer } from "./styles";

import { usePagination } from "../../../context/usePaginationContext";

export function PaginationSettings() {
  const { qtyPages, activePage, handleNextPage, handlePreviousPage } =
    usePagination();

  function handlePreviousPageClick() {
    handlePreviousPage();
  }

  function handleNextPageClick() {
    handleNextPage();
  }

  return (
    <PaginationsPostsContainer>
      <Button
        description="Voltar"
        width={100}
        onClick={handlePreviousPageClick}
        fontSize={1.4}
        disabled={activePage === 1 ? true : false}
      ></Button>
      <ul>
        {[...Array(qtyPages)].map((item, index) => (
          <li key={index}>
            <span
              className={activePage === index + 1 ? "is--active" : ""}
            ></span>
          </li>
        ))}
      </ul>
      <Button
        description="Avançar"
        width={100}
        onClick={handleNextPageClick}
        fontSize={1.4}
        disabled={activePage === qtyPages ? true : false}
      ></Button>
    </PaginationsPostsContainer>
  );
}
