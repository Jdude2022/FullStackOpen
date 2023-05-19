
// const Header = (props) => {
//   console.log(props)
//   return (
//       <h1>{props.course.name}</h1>
//   )
// }

// const Content = (props) => {
//   return (
//   <div>
//     <Part part={props.course.parts[0]} />
//     <Part part={props.course.parts[1]} />
//     <Part part={props.course.parts[2]} /> 
//   </div>
//   )
// }

// const Total = (props) => {

//   return (
//   <div>
//     <p>
//       Number of Exercises {props.course.parts[0].exercises +
//                            props.course.parts[1].exercises +
//                            props.course.parts[2].exercises}
//     </p>
//   </div>
//   )
// }

// const Part = (props) => {
//   return (
//     <p>
//       {props.part.name}, {props.part.exercises}
//     </p>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//   {
//     name: 'Fundamentals of React',
//     exercises: 10
//   },
//   {
//     name: 'Using props to pass data',
//     exercises: 7
//   },
//   {
//     name: 'State of component',
//     exercises: 14
//   }
// ]}

//   return (
//     <div>
//       <Header course={course} />
//       <Content course={course} />
//       <Total course={course} />
//     </div>
//   )
// }

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return(
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 +10} />
        <Hello name={name} age = {age} />
      </div>
    )
}

export default App
