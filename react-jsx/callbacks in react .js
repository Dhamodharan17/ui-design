import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <ChildComponent count={count} onCountChange={setCount} /> //method as peops
    </div>
  );
};

export default ParentComponent;


import React from 'react';

const ChildComponent = ({ count, onCountChange }) => {
  const handleLocalIncrement = () => {
    onCountChange(count + 1); // Call the callback function provided by the parent
  };

  return (
    <div>
      <p>Child Count: {count}</p>
      <button onClick={handleLocalIncrement}>Increment in Child</button>
    </div>
  );
};

export default ChildComponent;
