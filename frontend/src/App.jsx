import { Route, Routes } from "react-router";
import { Homepage } from "./pages/HomePage";
import { CreatePage } from "./pages/CreatePage";
import { NoteDetailPage } from "./pages/NoteDetailPage";

function App() {
  return (
    <div data-theme='forest'>
      <button className='btn btn-primary'>Click me</button>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
