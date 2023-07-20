const Header = ({ course }) => <h1>{course.name}</h1> 

const Total = ({ sum }) => <p><b>Number of exercises</b> {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  let total_ex = parts.map(part => part.exercises)
  total_ex = total_ex.reduce(
    (i, currentVal) => i + currentVal, 0
  )
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

export {Course, Content, Part, Total, Header}