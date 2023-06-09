import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleclick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  let [vote_array, setVoteArray] = useState(new Uint8Array(anecdotes.length))

  console.log(vote_array)
  const vote = () => {
    // https://www.react.express/hooks/usestate 
   let vote_copy = [...vote_array]
    vote_copy[selected] += 1
    setVoteArray(vote_copy)
  }

  const highest_vote = () => {
    return vote_array.indexOf(Math.max(...vote_array))
  }
  const cal_rand_num = () => {
    let random_num = Math.floor(Math.random() * anecdotes.length);
    return random_num
  }

  const setSelectedValue = newValue => {
    setSelected(newValue)
 }

  return (
    <div>
      <h1>Anecdote of the day!</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote_array[selected]} votes</p>
      <Button handleclick={() => setSelectedValue(cal_rand_num())}
                                 text= "next anecdote" />
      <Button handleclick={() => vote()} text= "vote"> </Button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[highest_vote()]}</p>
      <p> has {vote_array[highest_vote()]} votes</p>

    </div>
  )
}

export default App
 