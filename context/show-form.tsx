import { createContext, useCallback, useState } from 'react';

type AddModalType = {
  show: boolean;
  price: number;
  open: (price: number) => void;
  close: () => void;
};

const ShowFormModalContext = createContext<AddModalType>({
  show: false,
  price: 0,
  open: (price) => {},
  close: () => {},
});

type PropsType = { children: React.ReactNode };

export const ShowFormModalProvider = ({ children }: PropsType) => {
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState(0);

  const open = useCallback((price: number) => {
    setShow(true);
    setPrice(price);
  }, []);

  const close = useCallback(() => {
    setShow(false);
  }, []);

  return <ShowFormModalContext.Provider value={{ show, open, close, price }}>{children}</ShowFormModalContext.Provider>;
};

export default ShowFormModalContext;
