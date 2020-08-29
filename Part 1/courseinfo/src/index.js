import React from 'react'
import ReactDOM from 'react-dom'

// const course = 'Half Stack application development'
// const part1 = 'Fundamentals of React'
// const exercises1 = 10
// const part2 = 'Using props to pass data'
// const exercises2 = 7
// const part3 = 'State of a component'
// const exercises3 = 14

// const Header = (props) => {
//   return (
//          <h1>{props.course}</h1>
//   )
// }

// const Content = () => {
//   return (
//     <>
//       <Part part={part1} exercise={exercises1}/>
//       <Part part={part2} exercise={exercises2}/>
//       <Part part={part3} exercise={exercises3}/>
//     </>
//   )
// }

// const Part = (props) => {
//   return (
//     <>
//       <p>
//         {props.part} {props.exercise}
//       </p>
//     </>
//   )
// }

// const Total = (props) => {
//   return (
//     <>
//     <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
//     </>
//   )
// }

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  console.log(course)
  console.log(part1)

  return (
    <div>
      <h1>{course}</h1>
      <p>{part1.name} {part1.exercises}</p>
      <p>{part2.name} {part2.exercises}</p>
      <p>{part3.name} {part3.exercises}</p>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))