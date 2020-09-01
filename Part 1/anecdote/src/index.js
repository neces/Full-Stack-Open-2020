import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const MostVotes = ({ votes }) => {
  let max = votes.indexOf(Math.max(...votes));

  return (
    <>
    <div>{anecdotes[max]}</div>
    <div>Has {votes[max]} votes</div>
    </>
  )
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])

  let min = 0
  let max = 5

  const randomize = () =>
  setSelected(Math.floor(Math.random() * (max - min + 1)) + min)

  const addVote = () => {
    const newVotes = votes.slice()
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <>
    <h1>Anecdote of the day</h1>
    <div>{anecdotes[selected]}</div>
    <div>Has {votes[selected]} votes</div>
    <div>
      <Button text='Vote' handleClick={addVote} />
      <Button text='Next anecdote' handleClick={randomize} />
    </div>

    <h1>Anecdote with most votes</h1>
    <MostVotes votes={votes} />
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)