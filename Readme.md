# React Top Loading Bar

React Top Loading Bar is a customizable React component that provides a top-loading bar for indicating progress.

## Installation

You can install React Top Loading Bar via npm:

```bash
npm install react-lazy-loading-bar
```

## Usage

Import the TopLoadingBar component and use it in your React application:

```jsx
import React, { useState, useEffect } from "react";
import TopLoadingBar from "react-lazy-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 10);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div>
      <h1>Your App</h1>
      <TopLoadingBar
        progress={progress}
        color="#007bff"
        height="2px"
        transitionDuration="0.3s"
        transitionTimingFunction="ease"
      />
    </div>
  );
};

export default App;
```

### Props

- `progress`: The progress of the loading bar (0-100).
- `color`: The color of the loading bar (default: #007bff).
- `height`: The height of the loading bar (default: 2px).
- `transitionDuration`: The duration of the width transition (default: 0.3s).
- `transitionTimingFunction`: The timing function for the width transition (default: ease).
