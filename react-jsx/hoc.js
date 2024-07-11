import React from 'react';

// HOC - Text
const Text = ({ children }) => {
  return (
    <p>{children}</p>
  );
};

export default Text;

// reuse HOC
import React from 'react';
import Text from './Text';

function MyComponent() {
  return (
    <div>
      <Text>This is some reusable text.</Text>
      <Text>You can pass any content you want.</Text>
    </div>
  );
}

