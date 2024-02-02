import './App.css';
import IdCard from './components/idCard';
import BoxColor from './components/BoxColor';
import Greeting from './components/Greetings'
import Random from './components/Random'
import CreditCard from './components/CreditCard'


const App = () => {
  const idCardData = {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'Male',
    height: 178,
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg'
  };
  const idCardData2 = {
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'Female',
    height: 172,
    birth: new Date('1988-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg'
  };
  const BoxColorData = {
    r: 255,
    g: 0,
    b: 0
  };
  const BoxColorData2 = {
    r: 128,
    g: 255,
    b: 0
  };
  return (
    <div className="App">
      <div className="IdCard">
        <div className="header">IdCard</div>
        <IdCard {...idCardData} />
        <IdCard {...idCardData2} />
      </div>
      <Greeting lang="de" children="Ludwig"/>
      <Greeting lang="fr" children="François"/>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <div className="BoxColor">
        <div className="header"> BoxColor</div>
        <BoxColor {...BoxColorData} />
        <BoxColor {...BoxColorData2} />
      </div>

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
  };
  
  export default App;
