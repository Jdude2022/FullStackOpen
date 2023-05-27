import { useState } from "react"

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {

  const calcAverage = (good, neutral, bad) => {
    const total = good + bad + neutral
    bad = bad * -1
    return((good + bad) / total)
  }

  const calcPos = (good, neutral, bad) => {
    const total = good + bad + neutral
    return(
      good / total
    )
  }

  return (
    <div>
    <h2>statistics</h2>
          <p> good {props.good}<br></br>
          neutral {props.neutral}<br></br>
          bad {props.bad}<br></br>
          all {props.good + props.neutral + props.bad}<br></br>
          average {calcAverage(props.good, props.neutral, props.bad)}<br></br>
          positive {calcPos(props.good, props.neutral, props.bad)} %</p>
    </div> 
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBed] = useState(0)

  const setGoodValue = newValue => {
    setGood(newValue)
  }
  const setBadValue = newValue => {
    setBed(newValue)
  }
  const setNeutralValue = newValue => {
    setNeutral(newValue)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGoodValue(good + 1)} text = "good" />
      <Button handleClick={() => setNeutralValue(neutral + 1)} text = "neutral" />
      <Button handleClick={() => setBadValue(bad + 1)} text = "bad" />
    <Statistics good={good} bad={bad} neutral={neutral} />
 </div>
  )
}
export default App;
