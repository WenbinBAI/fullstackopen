// const Header = (props) => {
//   return (
//     <h1>{props.course}</h1>
//   )
// }

// const Part = (props) => {
//   return (
//     <p>{props.part} {props.exercises}</p>
//   )
// }

// const Total = (props) => {
//   return (
//     <p>Number of exercises {props.total}</p>
//   )
// }
// // props代表了参数
// // Part(数组) 数组有两个变量一个是part 一个是props 
// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
//       <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
//       <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
//     </div>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)

//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total total={totalExercises} />
//     </div>
//   )
// }

// export default App