import React, { createContext, ReactElement, useContext, useState } from 'react';

import { BoardContextType, Options } from '../types';

const BoardContext = createContext<BoardContextType | undefined>(undefined);

function BoardContextProvider({ children }: { children: ReactElement }) {
  const [options, setOptions] = useState<Options>({ groupBy: 'status', orderBy: 'none' });

  return (
    <BoardContext.Provider value={{ options, setOptions }}>
      {children}
    </BoardContext.Provider>
  );
}

function useBoardContext() {
  const context = useContext(BoardContext);

  if (!context) {
    throw new Error('useBoardContext must be used within a BoardContextProvider');
  }

  return context;
}

export { BoardContextProvider, useBoardContext };
