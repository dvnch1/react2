import {useState} from "react";

// useToggle - custom React hook that allows a component to toggle a value between true and false
export const useToggle =(defaultValue:boolean) =>{
    const [value, setValue] = useState<boolean>(defaultValue);

    function toggleValue(valueState:boolean) {
        setValue(prevValue => !valueState);
    }
    return [value, toggleValue];
};

let [value, toggleValue] =useToggle(true);




