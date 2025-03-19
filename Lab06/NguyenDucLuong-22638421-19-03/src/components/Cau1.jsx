import { useReducer, useRef } from 'react';

const initialState = {
  num1: '',
  num2: '',
  operation: '+',
  result: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_OPERATION':
      return { ...state, operation: action.payload };
    case 'SET_RESULT':
      return { ...state, result: action.payload };
    default:
      return state;
  }
}

function Cau1() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const operationRef = useRef(null);

  const handleCalculate = () => {

    const num1 = num1Ref.current.value;
    const num2 = num2Ref.current.value;
    const operation = operationRef.current.value;

    let result = 0;
    switch (operation) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        break;
    }
    dispatch({ type: 'SET_RESULT', payload: result });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 m-1">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-semibold text-center mb-6">Calculator</h1>
        <div className="flex justify-between mb-4">
          <div className="flex flex-col w-1/3 m-2">
            <h2 className="text-sm">a:</h2>
            <input
              className="p-2 border rounded-md w-full"
              type="number"
              ref={num1Ref}
              defaultValue = {state.num1}
            />
          </div>
          <div className="flex flex-col w-1/3 m-2">
            <h2 className="text-sm">Operation:</h2>
            <select
              className="p-2 border rounded-md w-full"
              ref = {operationRef}
              defaultValue={state.operation}
              onChange={(e) => dispatch({ type: 'SET_OPERATION', payload: e.target.value })}
            >
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
          </div>
          <div className="flex flex-col w-1/3 m-2">
            <h2 className="text-sm">b:</h2>
            <input
              className="p-2 border rounded-md w-full"
              type="number"
              ref={num2Ref}
              defaultValue = {state.num2}
            />
          </div>
        </div>

        <div className="text-center mb-4">
          <h2 className="text-xl font-medium">Result: {state.result}</h2>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleCalculate}
            className="bg-cyan-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-cyan-600 focus:outline-none"
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cau1;
