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

  // As long as new anecdotes are not added during program use should work.
  const arr_len = anecdotes.length
  let vote_arr = Array(arr_len).fill(0)
  const [selected, setSelected] = useState(0)

  const cal_rand_num = () => {
    let random_num = Math.floor(Math.random() * anecdotes.length);
    return random_num
  }

  const setSelectedValue = newValue => {
    setSelected(newValue)
 }

  const vote = () => {
    let arr_copy = [...vote_arr]
    arr_copy[selected] += 1
    vote_arr = arr_copy
    console.log(vote_arr)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Button handleclick={() => setSelectedValue(cal_rand_num())} text= "next anecdote" />
      <Button handleclick={() => vote()} text= "vote"> </Button>
    </div>
  )
}

export default App
 