const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = props => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = props => {
  let parts = props.course.parts
  return (
    <div>
      <p>
        {parts[0].name} {parts[0].exercises}
      </p>
      <p>
        {parts[1].name} {parts[1].exercises}
      </p>
      <p>
        {parts[2].name} {parts[2].exercises}
      </p>
    </div>
  )
}

const Total = props => {
  let parts = props.course.parts
  let ans = 0
  parts.forEach(element => {
    ans += element.exercises
  });
  return (
    <div>
      <p>Number of exercises {ans}</p>
    </div>
  )
}


export default App