import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
Router;
import "./App.css";

function App() {
  const [count, setCount] = useState(12);

  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-black">
          this the main section for now..
        </div>
      </Router>
    </>
  );
}

export default App;
