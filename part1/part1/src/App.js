
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

import { useState } from 'react'

const App = () => {
  const [ counter, setCounter] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  return (
    <div>{counter}</div>
  )
}

export default App
