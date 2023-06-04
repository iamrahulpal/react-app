import ListGroup from "./components/ListGroup";

function App() {
  const cityData = ["Mumbai", "Delhi", "Jaipur", "Chennai", "Jammu"];
  const schoolData = [ "Arts", "Science", "Commerece", "law", "Medical" ]
  return (
    <div>
      <ListGroup data={cityData} heading="Cities"/>
      <ListGroup data={schoolData} heading="School"/>
    </div>
  );
}

export default App;
