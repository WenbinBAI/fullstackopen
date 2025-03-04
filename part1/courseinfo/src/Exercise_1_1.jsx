const App = () => {
    // 定义课程对象，包含课程名称和课程部分
  const course = {
    // 课程名称
    name: 'Half Stack application development',
    // 课程各部分的数组
    parts: [
      {
        name: 'Fundamentals of React', // React基础
        exercises: 10, // 练习题数量
        id: 1 // 唯一标识符
      },
      {
        name: 'Using props to pass data', // 使用props传递数据
        exercises: 7, // 练习题数量
        id: 2 // 唯一标识符
      },
      {
        name: 'State of a component', // 组件状态
        exercises: 14, // 练习题数量
        id: 3 // 唯一标识符
      }
    ]
  }

  // 使用reduce方法计算所有练习题的总数
  // 初始值为0，遍历parts数组，将每个部分的exercises值加到sum中
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)//0是sum初始值

  // 返回React组件树
  return (
    <div>
      {/* 渲染Header组件，传入课程名称 */}
      <Header course={course.name} />
      {/* 渲染Content组件，传入课程部分数组 */}
      <Content parts={course.parts} />
      {/* 渲染Total组件，传入练习题总数 */}
      <Total total={totalExercises} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

// Content组件：负责渲染课程内容部分
const Content = (props) => {
  return (
    <div>
      {/* 使用map方法遍历parts数组，为每个课程部分创建Part组件 */}
      {/* key属性用于React的虚拟DOM优化 */}
      {/* part.name传递课程名称，exercises传递练习数量 */}
      {props.parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />)}//map遍历数组
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

export default App