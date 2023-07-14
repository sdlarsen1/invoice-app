import { createContext, ReactNode, RefObject, useContext, useRef } from "react";

interface IAppBarContext {
  subheaderRef: RefObject<HTMLDivElement>;
}

export const AppBarContext = createContext<IAppBarContext>({
  subheaderRef: { current: null },
});

const { Provider } = AppBarContext;

type P = {
  children: ReactNode;
};

export const AppBarProvider = ({ children }: P) => {
  const subheaderRef = useRef<HTMLDivElement>(null);
  return (
    <Provider
      value={{
        subheaderRef,
      }}
    >
      {children}
    </Provider>
  );
};

export function useAppBar() {
  const context = useContext(AppBarContext);
  if (!context) {
    throw new Error("useAppBar bust be used within an AppBarProvider");
  }
  return context;
}
