import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

function FirstCounter()  {
    const count = useSelector(selectCount);
    const mySecondVar = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
  
    let bro = Array(3).fill().map(Math.random);
  
    return (
      <div>
          <p>My second variable is {mySecondVar}</p>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <span className={styles.value}>{count}</span>
          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() =>  
                { if(count - 1 > 0){
                    // a conditional of false disables the decrement button, and rightly so
                    // a condtional of if count>=1 does nothing
                    // a condtional of if count %3 === 0 works as intended
                    // a condtional of if count - 1 === 0 works as intended
                    // a condtional of if count - 1 > 0 works as intended  
                            dispatch(decrement())
                        }  }}
          >
            -
          </button>
        </div>
        <div> 
            {/* source :https://stackoverflow.com/questions/18499935/idiom-for-repeat-n-times */}
          {Array(5).fill().map(( ) => {
                  return (<><span>Bro</span><text> | </text></>)
              })} Bro 
          <ul> 
              {Array(count).fill().map(( ) => {
                  return (<li>Hi</li>)
              })} 
          </ul>
        </div>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={e => setIncrementAmount(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
          >
            Add Async
          </button>
        </div>
      </div>
    );
  }

function SecondCounter()  {
    const count = useSelector(selectCount);
    const mySecondVar = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
  
    let bro = Array(3).fill().map(Math.random);
  
    return (
      <div>
          <p>My second variable is {mySecondVar}</p>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <span className={styles.value}>{count}</span>
          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => 
                    { if(count - 1 > 0){
                        // a conditional of false disables the decrement button, and rightly so
                        // a condtional of if count>=1 does nothing
                        // a condtional of if count %3 === 0 works as intended
                        // a condtional of if count - 1 === 0 works as intended
                        // a condtional of if count - 1 > 0 works as intended  
                                dispatch(decrement())
                            }  }
            }
          >
            -
          </button>
        </div>
        <div> 
          {Array(5).fill().map(( ) => {
                  return (<><span>Bro</span><text> | </text></>)
              })} Bro 
          <ul> 
              {Array(count).fill().map(( ) => {
                  return (<li>Hi</li>)
              })} 
          </ul>
        </div>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={e => setIncrementAmount(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
          >
            Add Async
          </button>
        </div>
      </div>
    );
  }
export function Counter() 
{
    return(<><FirstCounter/><SecondCounter/></>)
}
