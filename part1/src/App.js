import './App.css';
const Hello = (props) =>{
  console.log(props)
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

function App() {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b)

  const name = "Peter"
  const age = 1

  const friends = [
    {name: "Peter", age: 10},
    {name: "Amaning", age: 10}
  ]
  return (
    <div className="App">
      <p>Hello World, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <h1>Greetings</h1>
      <Hello name='Prince' age={26 + 10} />
      <Hello name={name} age={age} />
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  );
}

export default App;
