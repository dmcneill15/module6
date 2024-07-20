import { useState } from "react";
import ErrorMessage from './ErrorMessage'
import { ErrorBoundary } from 'react-error-boundary'

export function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operator, setOperator] = useState('');
    const [answer, setAnswer] = useState('');
    const [operationValid, setOperationValid] = useState('valid');

    const handleSubmit = (e) => {
        e.preventDefault();
        let answer = null;
        let num1Int = parseInt(num1);
        let num2Int = parseInt(num2);

        if (operator == '+') {
            answer = num1Int + num2Int;
        }
        else if (operator == '-') {
            answer = num1Int - num2Int;
        }
        else if (operator == '*') {
            answer = num1Int * num2Int;
        }
        else if (operator == '/') {
            answer = num1Int / num2Int;
        }
        else {
            return setOperationValid('notValid');
            //answer = "Undefined operation";
            //throw new Error(' Undefined Opertaion ');
            /*NOTE: throwing the error here does not work correctly - React Boundary cannot throw an error driectly from an event handler.
                Instead, move the error handling outside. Otherwise could use try/catch in the event handler
                Better to use the react boundary though as it can encompass more than try/catch can*/
        }

        setOperationValid('valid');
        return setAnswer(answer);
        //setAnswer(answer);
    }

    return (
        <div className="calcForm">
            <form onSubmit={handleSubmit}>
                <label>Number 1:
                    <input name="num1" value={num1}
                        onChange={(e) => setNum1(e.target.value)} />
                </label><br></br>
                <label>Operation: +-*/:
                    <input name="operator" value={operator}
                        onChange={(e) => setOperator(e.target.value)} />
                </label><br></br>
                <label>Number 2:
                    <input name="num2" value={num2}
                        onChange={(e) => setNum2(e.target.value)} />
                </label><br></br>
                <button>Calculate</button>
            </form>
            <ErrorBoundary FallbackComponent={ErrorMessage}
                onReset={() => {
                    setNum1('');
                    setNum2('');
                    setOperator('');
                    setAnswer('');
                    setOperationValid('valid');
                }}
            >
                <DisplayAnswer answer={answer} operationValid={operationValid}></DisplayAnswer>
            </ErrorBoundary>
        </div>
    )
}


//this component needs to take parameters as an object
function DisplayAnswer({answer, operationValid}) {
    if (operationValid == 'valid') {
        return <p>Answer = {answer}</p>
    }
    else {
        throw new Error(' Undefined Opertaion ');
    }
}