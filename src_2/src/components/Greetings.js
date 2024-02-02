
const Greetings = ({lang, children}) => {
    const Greetings = [
        {
            "lang": "fr",
            "greeting":"Bonjour"
        },
        {
            "lang": "de",
            "greeting":"Hallo"
        },
        {
            "lang": "en",
            "greeting":"Hello"
        },
        {
            "lang": "es",
            "greeting":"Hola"
        }
    ];
    console.log("Hello");
    const Greet = Greetings.find(item => item.lang === lang);
    console.log(Greet.greeting);


  return (
    <div className="greeting">
      {Greet.greeting}, {children}
    </div>
  )
}

export default Greetings
