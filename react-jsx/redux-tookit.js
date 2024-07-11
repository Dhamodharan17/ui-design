//step 1 - create store

import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers'; // Your root reducer file

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware]
});

export default store;

//step 2 - root reducer

import { combineReducers } from '@reduxjs/toolkit';
// Import your reducers here
// import counterReducer from '../features/counter/counterSlice';
// import todoReducer from '../features/todo/todoSlice';

const rootReducer = combineReducers({
  // counter: counterReducer,
  // todo: todoReducer,
  // Add your reducers here
});

export default rootReducer;

//step 3 - individual reducers
import { createSlice } from '@reduxjs/toolkit';

//intial state
const initialState = {
  value: 0,
  loading: false
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount, setLoading } = counterSlice.actions;

export default counterSlice.reducer;

//step 4- use in react app

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, setLoading } from './features/counter/counterSlice';

function App() {
  const { value, loading } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = (amount) => {
    dispatch(incrementByAmount(amount));
  };

  const handleAsyncIncrement = () => {
    dispatch(setLoading(true)); // Set loading state before async action

    // Simulate an asynchronous action (e.g., API call)
    setTimeout(() => {
      dispatch(incrementByAmount(10)); // Dispatch the actual action after delay
      dispatch(setLoading(false)); // Clear loading state after async action
    }, 1000);
  };

  return (
    <div>
      <h1>Redux Toolkit Example</h1>
      <div>
        <p>Count: {value}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={() => handleIncrementByAmount(5)}>Increment by 5</button>
        <button onClick={handleAsyncIncrement} disabled={loading}>
          {loading ? 'Loading...' : 'Async Increment'}
        </button>
      </div>
    </div>
  );
}

export default App;

// step 5 - provider
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
//step 2- 
