import { useState } from 'react'

// 历史记录组件，根据点击历史的长度进行条件渲染
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        Please click a button
      </div>
    )
  }

  return (
    <div>
      Botton Click History: {props.allClicks.join(' ')}
    </div>
  )
}

// 按钮组件，接收点击处理函数和显示文本
// 按钮组件，接收两个props:
// - handleClick: 点击事件处理函数
// - text: 按钮显示的文本内容
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [value, setValue] = useState(10)  // 添加新的状态

  // 左按钮点击处理函数
  const handleLeftClick = () => {
    // 使用 concat 而不是 push，因为不应直接修改状态
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  // 右按钮点击处理函数
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }
  // 添加返回函数的函数示例
  const setToValue = (newValue) => () => {
    console.log('当前值为', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <div>
        <p>{left}      {right}</p>     
        <Button handleClick={handleLeftClick} text="Left" />
        <Button handleClick={handleRightClick} text="Right" />
      </div>
      <History allClicks={allClicks} />
      
      {/* 添加新的按钮示例 */}
      <div>
        <p>Current Value: {value}</p>
        <Button handleClick={setToValue(1000)} text="设为1000" />
        <Button handleClick={setToValue(0)} text="重置" />
        <Button handleClick={setToValue(value + 1)} text="加1" />
      </div>
    </div>
  )
}

export default App