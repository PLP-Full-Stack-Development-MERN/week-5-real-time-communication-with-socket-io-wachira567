import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NoteEditor from './NoteEditor';

function Home() {
  const navigate = useNavigate();
  const createNote = async () => {
    const res = await fetch('https://real-time-notes-backend-6qdj.onrender.com/api/notes', { method: 'POST' });
    const data = await res.json();
    navigate(`/notes/${data._id}`);
  };

  return (
    <div>
      Welcome! <button onClick={createNote}>Create a New Note</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes/:id" element={<NoteEditor />} />
      </Routes>
    </Router>
  );
}

export default App;