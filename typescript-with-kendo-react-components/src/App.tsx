import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
import MyDatePicker from "./components/MyDatePicker";

function App() {
  return (
    <div className="App">
      <MyDatePicker format="dd-MM-yyyy" errorMessage="Please enter the date" />
    </div>
  );
}

export default App;
