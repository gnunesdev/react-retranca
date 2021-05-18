import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface PaginationProviderProps {
  children: ReactNode;
  qtyItemsToShow: number;
  items: Array<{}>;
}

interface PaginationContextData {
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  itemsToShow: Array<any>;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  qtyPages: number;
}

const PaginationContext = createContext({} as PaginationContextData);

export const PaginationProvider = ({
  qtyItemsToShow,
  items,
  children,
}: PaginationProviderProps) => {
  const [activePage, setActivePage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState(
    items.slice(0, qtyItemsToShow)
  );

  const qtyPages = Math.ceil(items.length / qtyItemsToShow);

  function handleNextPage() {
    if (itemsToShow.length < items.length) {
      setItemsToShow(
        items.slice(
          qtyItemsToShow * activePage,
          qtyItemsToShow * activePage + 1
        )
      );
    }
    setActivePage(activePage + 1);
  }

  function handlePreviousPage() {
    setItemsToShow(
      items.slice(
        qtyItemsToShow * (activePage - 2),
        qtyItemsToShow * (activePage - 1)
      )
    );
    setActivePage(activePage - 1);
  }

  return (
    <PaginationContext.Provider
      value={{
        activePage,
        setActivePage,
        itemsToShow,
        handleNextPage,
        handlePreviousPage,
        qtyPages,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export function usePagination() {
  const context = useContext(PaginationContext);

  return context;
}
