const Header = ({ course }) => <h1>{course.name}</h1> 

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  const result = parts.map(part => part.id)
  console.log(result)
  let total_ex = parts.map(part => part.exercises)
  console.log(total_ex)
  total_ex = total_ex.reduce(
    (i, currentVal) => i + currentVal, 0
  )
  console.log(total_ex)
  return(
<>
    {parts.map(part =>
      <Part key={part.id} part={part} />)}
    <Total sum={total_ex} />
</>)
}

const Course = ({course}) => {
  console.log(course.name)
  return(
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
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
      }
    ]
  }

  return <Course course={course} />
}

export default App