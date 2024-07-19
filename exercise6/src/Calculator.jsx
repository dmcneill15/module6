import { useState } from "react";

export function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operator, setOperator] = useState('');
    const [answer, setAnswer] = useState('');

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
            answer = "Undefined operation"
        }
        setAnswer(answer);
    }

    return (
        <div className="calcForm">
            <form onSubmit={handleSubmit}>
                <label>Number 1:
                    <input name="num1" title={num1}
                        onChange={(e) => setNum1(e.target.value)} />
                </label><br></br>
                <label>Operation: +-*/: 
                    <input name="operator" title={operator}
                        onChange={(e) => setOperator(e.target.value)} />
                </label><br></br>
                <label>Number 2:
                    <input name="num2" title={num2}
                        onChange={(e) => setNum2(e.target.value)} />
                </label><br></br>
                <button>Calculate</button>
            </form>
            <p>Answer = {answer}</p>
        </div>
    )
}