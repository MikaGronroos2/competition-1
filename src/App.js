import './App.css';
import IdCard from './components/idCard';
import BoxColor from './components/BoxColor';
import Greeting from './components/Greetings'
import Random from './components/Random'
import CreditCardBackup from './components/CreditCardBackup';


const App = () => {
  const idCardData = {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 1.78,
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg'
  };
  const idCardData2 = {
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: 1.72,
    birth: new Date('1993-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg'
  };
  const BoxColorData = {
    r: 255,
    g: 0,
    b: 0,
    code: '#ff0000',
    color: 'white'
  };
  const BoxColorData2 = {
    r: 128,
    g: 255,
    b: 0,
    code: '#80ff00',
    color: 'black'
  };
  return (
    <div className="App">
      <div className="header">IdCard</div>
      <div className="idCardBox">
        <IdCard {...idCardData} />
      </div>
      <div className="idCardBox">
        <IdCard {...idCardData2} />
      </div>
      <div className="header">Greetings</div>
      <div className="box">
        <Greeting lang="de" children="Ludwig"/>
      </div>
      <div className="box">
        <Greeting lang="fr" children="François"/>
      </div>
      <div className="header">Random</div>
      <div className="box">
        <Random min={1} max={6} />
      </div>
      <div className="box">
      <Random min={1} max={100} />
      </div>
      <div className="header"> BoxColor</div>
       <div className="boxColorBox">
          <BoxColor {...BoxColorData} />
      </div>
        <div className="boxColorBox">
          <BoxColor {...BoxColorData2} />
      </div>
      <div className="header">CreditCard</div>
      <div className="creditCardBox">
      <CreditCardBackup 
      type="Visa"
      number="0123456789018845"
      expirationMonth={3}
      expirationYear={2021}
      bank="BNP"
      owner="Maxence Bouret"
      bgColor="#11aa99"
      color="white" 
      />
     
      
      <CreditCardBackup
      type="Master Card"
      number="0123456789010995"
      expirationMonth={3}
      expirationYear={2021}
      bank="N26"
      owner="Maxence Bouret"
      bgColor="#eeeeee"
      color="#222222"
      />

      <CreditCardBackup
      type="Visa"
      number="0123456789016984"
      expirationMonth={12}
      expirationYear={19}
      bank="Name of the Bank"
      owner="Firstname Lastname"
      bgColor="rgb(221, 187, 86)"
      color="white"
      />
      </div>

    </div>
  );
  };
  
  export default App;
