import React, {useState} from 'react';

const Calculator = ()=>{
    const [amount, setAmount] = useState({
        principal: 0,
        interest: 0
    });
return(
    <div>This is calculator</div>
);
};

export default Calculator;