import { useState } from "react"

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {

  const calcAverage = (good, neutral, bad) => {
    const total = good + bad + neutral
    bad = bad * -1
    return((good + bad) / total)
  }

  const calcPos = (good, neutral, bad) => {
    const total = good + bad + neutral
    const rating = (good / total) * 100 + " %"
    return(
      (good / total) * 100 + " %"
    )
  }


  if ((props.good > 0) || (props.neutral > 0) || (props.bad > 0)){
  return (
    <table>
      <tbody>
      <StatisticsLine text="Good" value={props.good} />
      <StatisticsLine text="Neutral" value={props.neutral} />
      <StatisticsLine text="Bad" value={props.bad} />
      <StatisticsLine text="All" value={props.good + props.neutral + props.bad} />
      <StatisticsLine text="Average" value={calcAverage(props.good,
                                                        props.neutral,
                                                        props.bad)} />
      <StatisticsLine text="Positive" value={calcPos(props.good,
                                                     props.neutral,
                                                     props.bad)} />
      </tbody>
    </table> 
    )
  }
  // if all props 0
  return (
    <div>
      <p> No feedback given</p>
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
