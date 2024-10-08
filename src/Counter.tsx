import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice'; // Путь к вашему редюсеру
import { RootState } from './types';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter); // Теперь state будет иметь тип RootState
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Увеличить</button>
      <button onClick={() => dispatch(decrement())}>Уменьшить</button>
    </div>
  );
};

export default Counter;