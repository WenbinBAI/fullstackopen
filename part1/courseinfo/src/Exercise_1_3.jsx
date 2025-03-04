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
  
    return (
      <div>
        <Header course={course} />
        <Content part1={part1} part2={part2} part3={part3} />
        <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      </div>
    )
  }

// 定义Header组件，显示课程名称
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

// 定义Part组件，显示课程部分的名称和练习数量
const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

// 定义Content组件，显示所有课程部分
const Content = (props) => {
  return (
    <div>
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} />
    </div>
  )
}

// 定义Total组件，显示练习总数
const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

export default App