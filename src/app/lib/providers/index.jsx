"use client"
import HistoryContextProvider from "@/app/context/HistoryContextProvider";


const Providers = ({children}) => {
    return (
        <HistoryContextProvider>
            {children}
        </HistoryContextProvider>
    );
};

export default Providers;