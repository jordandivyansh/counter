import react from "react";
import { useAppState } from "../Context";

export const Increment = () =>{
    const {incrementState}=useAppState();
    return(
        <button onClick={
            ()=>incrementState()
        }>Increment</button>
    );
}