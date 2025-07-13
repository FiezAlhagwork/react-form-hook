import { useReducer } from "react";

interface initialStateType {
  count: number;
  step: number;
}

const initialState: initialStateType = {
  count: 0,
  step: 1,
};
const reduce = (
  state: initialStateType,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "reset":
      return initialState;
    case "setStep":
      return { ...state, step: action.payload };
    default:
      return state;
  }
};

const Hooks = () => {
  const [state, dispatch] = useReducer(reduce, initialState);
  return (
    <div>
      <h1>{state.count}</h1>

      <div>
        <div>
          {state.count >= 25 ? (
            "not add increment"
          ) : (
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
          )}
        </div>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "reset" })}>reset </button>
      </div>

      <div>
        <label>Step :</label>
        <input
          type="number"
          value={state.step}
          onChange={(e) =>
            dispatch({ type: "setStep", payload: Number(e.target.value) })
          }
        />
      </div>
    </div>
  );
};

export default Hooks;
