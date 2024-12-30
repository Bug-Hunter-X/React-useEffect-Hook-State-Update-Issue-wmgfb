The issue is resolved by adding the state variable 'counter' to the dependency array of the useEffect hook. This ensures the effect will run whenever 'counter' changes and properly updates the display.

```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [counter]); // Add 'counter' to the dependency array

  return (
    <div>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default MyComponent;
```