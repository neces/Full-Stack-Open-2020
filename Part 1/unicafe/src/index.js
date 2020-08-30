import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)
  
  const Reviews = ({ text, number }) => <p>{text} {number}</p>

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const Total = ({ good, neutral, bad }) => <p>Total {good + neutral + bad}</p>

  const Average = ({ good, neutral, bad }) => <p>Average {(good - bad)/(good + neutral + bad)}</p>

  const Positive = ({ good, neutral, bad }) => <p>Positive {((good)/(good + neutral + bad)*100)} %</p>

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button
          handleClick={addGood}
          text='Good'
        />
        <Button
          handleClick={addNeutral}
          text='Neutral'
        />
        <Button
          handleClick={addBad}
          text='Bad'
        />

        <h1>Statistics</h1>
        <Reviews text='Good' number={good} />
        <Reviews text='Neutral' number={neutral} />
        <Reviews text='Bad' number={bad} />

        <Total good={good} neutral={neutral} bad={bad} />
        <Average good={good} neutral={neutral} bad={bad} />
        <Positive good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
