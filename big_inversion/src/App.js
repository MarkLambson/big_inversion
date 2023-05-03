import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Blonde"}/>
      <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={30} hairColor={"Brown"}/>
      <PersonCard firstName={"Hingle"} lastName={"McCringleberry"} age={28} hairColor={"Black"}/>
    </div>
  );
}

export default App;
