import React, {useState, useEffect} from 'react'
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key) => {
    const [mode, setMode] = useLocalStorage(key);

    useEffect(() =>{
        if (key === true){
            document.body.classList.add('dark-mode')            
        }
    }, [mode])

    return [mode, key]
    
}


export default useDarkMode;

