const Header = ( { course } ) => <h1>{course}</h1>

const Content = ( { parts } ) => {
  
    return (
    <div>
      {parts.map( part => <Part key={part.id} part={part} />)}
    </div>
  )
}

const Part = ( { part } ) => {
  return(
  <p>
    {part.name} {part.exercises}
  </p>
  )
}

const Total = ( { total } ) => <b><p>Number of exercises {total}</p></b>

const Course = ( { course } ) => {
  const valorInicial = 0;
  const total = course.parts.reduce( (acumulador, actual) => acumulador + actual.exercises, valorInicial );
  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        total={ total }
      />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App