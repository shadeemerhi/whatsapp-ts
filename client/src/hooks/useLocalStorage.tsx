import { useEffect, useState } from 'react';

const PREFIX = 'whatsapp-clone-';

export default function useLocalStorage(key:string, initialValue:string | Function) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if(jsonValue !== null) return JSON.parse(jsonValue);
    if(typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue;
    }
  });
  
  useEffect(() => {
    console.log(value);
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}