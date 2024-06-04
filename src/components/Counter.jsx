import { useSelector,useDispatch } from "react-redux"
import { increment,decrement } from "../redux/slices/CounterSlices"

function Counter() {
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
    return (
        <>
        <div>
        <div>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <br />
      <br />
      <div>{count}</div>
      <br />
      <br />
      <button onClick={()=>dispatch(decrement())}>decrement</button>
     </div>
        </div>
        </>
    )
}

export default Counter
