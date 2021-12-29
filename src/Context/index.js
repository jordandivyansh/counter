import React from "react"

export const AppState =  React.createContext({
    title: "Welcome to counter application!",
    counter: 0,
});
export const useAppState = () =>{
    return React.useContext(AppState);
}