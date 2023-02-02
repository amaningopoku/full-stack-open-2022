import './App.css';

const Header = (props) =>{
  return(
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}
const Part = ({name, exercise}) =>{
  return(
    <div>
      <p>
        {name} {exercise}
      </p>
    </div>
  )
}
const Content = ({parts}) =>{
  return(
    <div>
      <Part name={parts[0].name} exercise={parts[0].exercise}/>
      <Part name={parts[1].name} exercise={parts[1].exercise}/>
      <Part name={parts[2].name} exercise={parts[2].exercise}/>
    </div>
  )
}
const Total = (props) =>{
  return(
    <div>
      <p>
        Number of exercises {props.total}
      </p>
    </div>
  )
}

function App() {
  
  const course = {
    name: 'Half Stack application development',
    parts : [
      {name: 'Fundamentals of React', exercise: 10},
      {name: 'Using props to pass data', exercise: 7},
      {name: 'State of a component', exercise: 14}
    ]
  }
  const total = course.parts[0].exercise + course.parts[1].exercise + course.parts[2].exercise
  return (
    <div className="App">
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
}

export default App;
