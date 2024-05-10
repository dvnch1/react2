// useStorage - hook that allows a component to store a value in the browser's LocalStorage

import {useEffect, useState} from "react";

const useStorage = (key, localstorageObject, defaulValue) => {
    const [value, setValue] = useState((): void => {
        let jsonValue = localstorageObject.getItem(key);
        if (jsonValue !==null) return JSON.parse(jsonValue);
        if (typeof defaulValue === 'function') {
            return defaulValue();
        } else {
            return defaulValue;
        }
        });
    useEffect(() => {
        if (value === undefined) return localstorageObject.removeItem(key);
        localstorageObject.setItem(key, JSON.stringify(value));
    }, [key, value, localstorageObject]);
    return [value, setValue];

}

useStorage("ssss","2222", window.localStorage)