import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({ text, value, percentage }) => (
  <div>
    {text} {Math.round(value * 100) / 100} {percentage}
  </div>
)

const Statistics = ({ good, neutral, bad}) => {
  let total = good + neutral + bad

  if (total === 0) {
    return <p>No feedback given</p>
  }
  else {
    return (
      <>
        <Statistic text="Good" value ={good} />
        <Statistic text="Neutral" value ={neutral} />
        <Statistic text="Bad" value ={bad} />
        <Statistic text="Total" value ={total} />
        <Statistic text="Average" value ={(good - bad)/total} />
        <Statistic text="Positive" value ={((good/total)*100)} percentage={'%'}/>
      </>
      )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button text='Good' handleClick={addGood} />
        <Button text='Neutral' handleClick={addNeutral} />
        <Button text='Bad' handleClick={addBad} />

        <h1>Statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
