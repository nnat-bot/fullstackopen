import { useState } from 'react'

const Statistic = (props) => {
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>all {props.good + props.neutral + props.bad}</p>
    </div>
  )
}

const Average = (props) => {
  return (
    <div>
      <p>average {(props.good - props.bad) / (props.good + props.neutral + props.bad)}</p>
    </div>
  )
}

const Positive = (props) => {
  return (
    <div>
      <p>positive {props.good / (props.good + props.neutral + props.bad) * 100} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>
      <h1>statistics</h1>
      <Statistic good={good} neutral={neutral} bad={bad} />
      <Total good={good} neutral={neutral} bad={bad} />
      <Average good={good} neutral={neutral} bad={bad} />
      <Positive good={good} neutral={neutral} bad={bad} />
    </div>
  )
}



export default App