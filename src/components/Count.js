import React from 'react'

const Count = () => {
    const count=useSelector(()=>state.value.count)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>Count</h1>
      <p>{count}</p>
      <button onClick={()=>disptach(increase())}>+</button>
      <button onClick={()=>disptach(decrease())}>-</button>
    </div>
  )
}

export default Count
