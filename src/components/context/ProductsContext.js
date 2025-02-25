import { useState, createContext ,useContext, useEffect } from "react";
import React from "react";

const ProContext = createContext('')
//This For products details context
const initialData = {
    
}

const getSaveState = () => {
    const saveState = localStorage.getItem('pro');
    return saveState ? JSON.parse(saveState) : initialData;
}

export const ProProvider = ({children}) => {

    const [pro , setPro] = useState(getSaveState);  
    useEffect(()=>{
        localStorage.setItem('pro' , JSON.stringify(pro))
    },[pro])

    return <ProContext.Provider value={[pro ,setPro]}> 
        {children}
    </ProContext.Provider>
}

export const useProduct = () => useContext(ProContext);
