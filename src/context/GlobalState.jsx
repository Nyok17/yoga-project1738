import React, { createContext, useEffect, useState } from 'react';

export const GlobalContext= createContext(null);

const GlobalState = ({children}) => {
    const[quotes, setQuotes]= useState([]);
    const[stars, setStars]= useState(Array(5).fill(''));
    const[user, setUser]= useState(null)

    const getQuote= async ()=>{
        try {
            const api_url= "https://api.quotable.io/random";
        const response= await fetch(api_url);
        const data= await response.json();
        console.log(data);
        setQuotes(data)
        } catch (error) {
           console.log(error) 
        }
    }

    useEffect(()=>{
        getQuote();
    },[])
   
  return (
   <GlobalContext.Provider value={{quotes, stars, setStars, user, setUser}}>{children}</GlobalContext.Provider>
  )
}
 
export default GlobalState

//48gNmGvbPVsD5AfmMoHw8g==MblKa0UYuz8VvKvH