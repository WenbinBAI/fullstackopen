import { useState } from 'react'

const Hello = ({ name, age }) => {
  // 计算出生年份的辅助函数
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Counter = () => {
  // 使用 useState 钩子创建状态  useState钩子接受一个参数作为初始状态的值
  // 并返回一个包含当前状态和一个用于更新状态的函数的数组
  // 解构赋值将数组中的两个元素分别赋值给变量 counter 和 setCounter
  //函数的话是不存在状态的，运行一边就结束了
  //但是函数组件是可以使用状态的，因为函数组件是可以被调用的，每次调用都会重新渲染
  const [ counter, setCounter ] = useState(0)

  // 定义
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={decreaseByOne}>minus</button>
      <button onClick={setToZero}>zero</button>
      
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <h2>Counter</h2>
      <Counter />
    </div>
  )
}

export default App