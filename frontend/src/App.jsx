import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MoodTracker from "./pages/MoodTracker";
import AITherapist from "./pages/AITherapist";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mood-tracker" element={<MoodTracker />} />
          <Route path="ai-therapist" element={<AITherapist />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
