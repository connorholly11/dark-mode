import React, {useState, useEffect} from 'react'
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
    console.log(key)

    useEffect(() =>{
        if (darkMode === true){
            return window.document.body.classList.add('dark-mode')            
        }else{
            return window.document.body.classList.remove('dark-mode')
        }
    }, [darkMode])

    return [darkMode, setDarkMode]
    
}


export default useDarkMode;

