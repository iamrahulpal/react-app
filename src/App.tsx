import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [visible, setVisibility] = useState(false);

  return (
    <div>
      {visible && (
        <Alert onClose={() => setVisibility(false)}>
          Alert! You should check in on some of those fields below.
        </Alert>
      )}
      <Button color="primary" onClick={() => setVisibility(true)}>
        Login
      </Button>
    </div>
  );
}

export default App;
