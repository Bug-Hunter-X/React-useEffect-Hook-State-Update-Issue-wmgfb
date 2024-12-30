# React useEffect Hook State Update Issue

This repository demonstrates a common issue encountered when using the `useEffect` hook in React.  The problem arises when attempting to update state within an effect that has an empty dependency array (`[]`).  This typically results in the state update not triggering a re-render, leading to unexpected behavior.

The `bug.js` file contains the problematic code. The `bugSolution.js` file provides a corrected version.

## Bug Description
The counter variable is supposed to increment over time, but it remains at 0 due to an incorrect use of the `useEffect` hook.