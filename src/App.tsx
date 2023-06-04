import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";

function App() {
  const [visible, setVisibility] = useState(false);

  return (
    <div>
      <Like />
    </div>
  );
}

export default App;
