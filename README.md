# redux-hooks-practice

Implement Redux Hooks - udemy course

### Instruction to create project

## Set up project

- Use CRA to create redux-hooks

```
    npx create-react-app redux-hooks
```

### Create Navigation

- Install dependencies for router
  ```
      npm install react-router-dom
  ```

### Create Project items component

- Install material ui dependencies
  ```
      npm install @material-ui/core
  ```

### Install Redux

```
    npm install redux react-redux
```

### Changed state management from Redux to Context API

    - Removed Redux store
    - Added a new folder named context to hold the state: productsProvider
    - Used useContext hook

### Downside of Contex API

    - Context API it's not meant to hold global state, only for low frequency state updates
    - Performance is not optimized to handle high frequency state changes. The way Context API works is that whenever something changes in your context it doesn't have a way to figuring out which component is concern about the change and which component is not. Meaning that every component using contenxt will rebuil or re render when a change occurs in the context.
    - Context is great to handle amall changes like authentications but not all state.

### Create a Custom Hook as a Store

    - It will only use React hooks - useState and useEffect
