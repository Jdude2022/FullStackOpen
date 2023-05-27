
const Header = (props) => {
  console.log(props)
  return (
      <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  return (
  <div>
    <Part part={props.course.parts[0]} />
    <Part part={props.course.parts[1]} />
    <Part part={props.course.parts[2]} /> 
  </div>
  )
}

const Total = (props) => {

  return (
  <div>
    <p>
      Number of Exercises {props.course.parts[0].exercises +
                           props.course.parts[1].exercises +
                           props.course.parts[2].exercises}
    </p>
  </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name}, {props.part.exercises}
    </p>
  )
}

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
    name: 'State of component',
    exercises: 14
  }
]}

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

// import { useState } from 'react'

//   const Display = ({ counter }) => <div>{counter}</div>

//   const Button = ({handleClick, text}) => (
//     <button onClick={handleClick}>
//       {text}
//       </button>
//   )

//   const App = () => {
//   const [ counter, setCounter] = useState(0)
//   console.log('rendering with counter value', counter)

//   const increaseByOne = () => {
//     console.log('increasing, value before', counter)
//     setCounter(counter + 1)
//   }

//   const decreaseByOne = () => {
//     console.log('deacreasing, value before', counter)
//     setCounter(counter - 1)
//   }

//   const setToZero = () => {
//     console.log('resetting to zero, value before', counter)
//     setCounter(0)
//   }

//   return (
//     <div>
//       <Display counter={counter}/>
//          <Button
//          handleClick={increaseByOne}
//          text='plus'
//          /> 
//          <Button
//          handleClick={setToZero}
//          text='zero'
//          /> 
//          <Button
//          handleClick={decreaseByOne}
//          text='minus'
//          /> 
  
//     </div>
//   )
// }

// // import { useState  } from "react"

// const Display = props => <div>{props.value}</div>

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )
// const App = () => {
//   const [value, SetValue] = useState(10)

// const setToValue = (newValue) => () => {
//   console.log('value now', newValue)
//   SetValue(newValue)
// }

//   return (
//     <div>
//       <Display value={value} />
//       <Button handleClick={setToValue(1000)} text='thousand' />
//       <Button handleClick={setToValue(0)} text='reset' />
//       <Button handleClick={setToValue(value + 1)} text='increment' />
//     </div>
//   )
// }

export default App
