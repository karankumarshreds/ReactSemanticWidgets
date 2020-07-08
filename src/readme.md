##### useEffect() deep dive 

If you make reference to any piece of state/props inside of useEffect(), you need to add it in
the dependencies array to avoid the warning.

##### wrong:
```javascript
const [errors, setErrors] = useState([]);
const [results, setResults] = useState();
useEffect(()=> {
    // while using results, add it in dependency array
    if (!results.length) {
        console.log(errors);
    }
}, [errors]);
```

##### correct: 
```javascript
const [errors, setErrors] = useState([]);
const [results, setResults] = useState();
useEffect(()=> {
    if (!results.length) {
        console.log(errors);
    }
    // this will result invoking useEffect() twice!
}, [errors, results]);
```

*To avoid the twice rendering of the useEffect() as shown above:* 


