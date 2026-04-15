"use client"
import React, { useState } from 'react';
import { HistoryContext } from './HistoryContext';


const HistoryContextProvider = ({children}) => {
    const [logHistory,setLogHistory]=useState([]);
    const [callHistory,setCallHistory]=useState([]);
    const [videoHistory,setVideoHistory]=useState([]);
    const [textHistory,setTextHistory]=useState([]);
    const data= {logHistory,setLogHistory,callHistory,setCallHistory,videoHistory,setVideoHistory,textHistory,setTextHistory};
    return (
        <HistoryContext.Provider value={data}>
            {children}
        </HistoryContext.Provider>
    );
};

export default HistoryContextProvider;