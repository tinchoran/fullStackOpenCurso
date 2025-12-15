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

const Total = ( { total } ) => <p><b>Number of exercises {total}</b></p>

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


export default Course