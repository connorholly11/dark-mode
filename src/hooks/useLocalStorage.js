import React, {useState} from 'react';
import { ParsedError } from 'pretty-error';

const useLocalStorage = (key, initialValue) => {
    const [storedvalue, setStoredValue] = useState(() => {
        //get local storage key
        const item = window.localStorage.getItem(key);
        //return stores json, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
    })

    const setValue = value => {
        //setting state to the value
        setStoredValue(value)
        //save to local storage
        //stringify is to put it into a string no matter what
        window.localStorage.setItem(key, JSON.stringify(value))
    }


    return[storedvalue, setValue]
}

export default useLocalStorage;