import react from "react";
import { useAppState } from "../Context";

export const Decrement = () =>{
    const {decrementState} = useAppState();
    return(
        <button onClick={
            ()=> decrementState()
            }
        >Decrement</button>
    )

}