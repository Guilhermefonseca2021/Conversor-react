import "./App.css"
import InputAmount from './components/inputAmount';
import SelectCountry from "./components/selectCountry";
import SwitchCurrency from "./components/switchCurrency";

export default function App() {
  return (
    <div className="content">
      <p>
        Stay ahead with accurate
      </p>
      <div className="container">
        <InputAmount />
        <SelectCountry />
        <SwitchCurrency />
      </div>
    </div>
  );
}
