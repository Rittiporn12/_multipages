import { useState } from 'react';
import Variable from '../Variable/Variable';
import './Add.css';


function Add() {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    return ( 
        <div className='add-container'>
            <h3 className='title'>ADD</h3>
            <h2><span className='badge bg-secondary'>A = {a}</span>
            <span className='badge bg-primary'>A+B = {a + b}</span>
            <span className='badge bg-secondary'>B = {b}</span></h2>
            <div className='var-container'>
                <Variable name={'A'} value={a} setValue={setA} type={'int'} />
                <Variable name={'B'} value={b} setValue={setB} type={'int'} />
            </div>
        </div> 
    );
}

export default Add;