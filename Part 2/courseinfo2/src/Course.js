import React from 'react'

const Header = ({ name }) => {
    return (
      <h2>{name}</h2>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      parts.map((part) => <Part key={part.id} name={part.name} exercise={part.exercises}/> )
    )
  }
  
  const Part = ({ name, exercise }) => {
    return (
      <p>
        {name} {exercise}
      </p>
    )
  }
  
  const Total = ({ parts }) => {
    let initialValue = 0
    let sum = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, initialValue)
  
    return (
      <>
      <p><b>Number of exercises {sum}</b></p>
      </>
    )
  }

  const Courses = ({ courses }) => {
    return (
        courses.map((course) => <Course key={course.id} name={course.name} parts={course.parts}/> )
    )
  }
  
  const Course = ({ name, parts }) => {
    return (
      <div>
        <Header name={name} />
        <Content parts={parts} />
        <Total parts={parts} />
      </div>
    )
  }

  export default Courses