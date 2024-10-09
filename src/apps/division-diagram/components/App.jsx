import React, { useState } from 'react'
import Controller from './Controller'
import DiagramContainer from './DiagramContainer'
import '../styles/App.css'

const INITIAL_PROBLEM = {
  n: 6,
  m: 1,
  a: 2,
  b: 5,
  dividendUnit: '',
  divisorUnit: '',
}

export default function App() {
  const [problem, setProblem] = useState(INITIAL_PROBLEM)

  const gatedSetProblem = (problem) => { setProblem(problem) }

  const gaurdedProblem = {
    ...problem,
    n: problem.n > 0 ? problem.n : 1,
    m: problem.m > 0 ? problem.m : 1,
    a: problem.a > 0 && problem.b >= problem.a ? problem.a : 1,
    b: problem.b > 0 && problem.b >= problem.a ? problem.b : 1,
  }

  return (
    <div className="content">
      <Controller problem={problem} setProblem={gatedSetProblem} />
      <DiagramContainer problem={gaurdedProblem} />
    </div>
  )
}