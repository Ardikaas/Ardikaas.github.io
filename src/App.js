import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing ";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
