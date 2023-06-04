import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("Logged in")}>
        Login
      </Button>
    </div>
  );
}

export default App;
