import { useState } from 'react'



const StatisticLine = ({text, val}) => (
  <tr>
    <td>{text}</td>
    <td>{val}</td>
  </tr>
)

const Display = ({ good, neutral, bad }) => {
  const sum = good - bad
  const num = good + neutral + bad
  if (num) {
    return (
      <div>
        <table  width="150px">
        <StatisticLine text="good" val={good} />
        <StatisticLine text="neutral" val={neutral} />
        <StatisticLine text="bad" val={bad} />
        <StatisticLine text="all" val={sum} />
        <StatisticLine text="average" val={sum / num} />
        <StatisticLine text="positive" val={Math.round(good / num * 10000) / 100 + "%"} />
        </table >
      </div>
    )
  }

  return (
    <p>No feedback given</p>
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
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Display good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App