import logo from './logo.svg';
import Greetings from './components/Greetings';
import './App.css';
import Random from './components/Random'
import CreditCard from './components/CreditCard'
function App() {
  return (
    <div className="App">
      <Greetings  lang ="de" children="Ludwig" />
      <Greetings  lang ="fr" children="François"/>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
        />
      
      
    </div>
  );
}

export default App;
