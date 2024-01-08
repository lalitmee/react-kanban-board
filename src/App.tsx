import './App.css';

import KanbanBoard from './components/KanbanBoard';
import { BoardContextProvider } from './context/board';

function App() {
  return (
    <BoardContextProvider>
      <KanbanBoard />
    </BoardContextProvider>
  );
}

export default App;
