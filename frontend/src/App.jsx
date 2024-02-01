import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SequenceSymphonyTest from "./pages/Games/SequenceSymphonyTest";
import TypingTest from "./pages/Games/TypingTest";
import UltraInstinctTest from "./pages/Games/UltraInstinctTest";
import WorkingMemoryTest from "./pages/Games/WorkingMemoryTest";
import DigitPlaybackTest from "./pages/Games/DigitPlaybackTest";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/sign-up"
          element={<h1 className="text-4xl">sign-up page comming soon!</h1>}
        />
        <Route
          path="/login"
          element={<h1 className="text-4xl">login page comming soon!</h1>}
        />
        <Route path="/tests">
          <Route path="sequence" element={<SequenceSymphonyTest />} />
          <Route path="typing" element={<TypingTest />} />
          <Route path="working-memory" element={<WorkingMemoryTest />} />
          <Route path="ultra-instinct" element={<UltraInstinctTest />} />
          <Route path="digit-playback" element={<DigitPlaybackTest />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
