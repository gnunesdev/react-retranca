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
  handleUpdateCurrentItems: (item: Array<{}>) => void;
}

const PaginationContext = createContext({} as PaginationContextData);

export const PaginationProvider = ({
  qtyItemsToShow,
  items,
  children,
}: PaginationProviderProps) => {
  const [currentItems, setCurrentItems] = useState(items);
  const [activePage, setActivePage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState(() =>
    currentItems.slice(0, qtyItemsToShow)
  );

  function handleUpdateCurrentItems(items: Array<{}>) {
    setCurrentItems(items);
    setItemsToShow(items.slice(0, qtyItemsToShow));
  }

  const qtyPages = Math.ceil(currentItems.length / qtyItemsToShow);

  function handleNextPage() {
    if (itemsToShow.length < currentItems.length) {
      setItemsToShow(
        currentItems.slice(
          qtyItemsToShow * activePage,
          qtyItemsToShow * activePage + 1
        )
      );
    }
    setActivePage(activePage + 1);
  }

  function handlePreviousPage() {
    setItemsToShow(
      currentItems.slice(
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
        handleUpdateCurrentItems,
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
