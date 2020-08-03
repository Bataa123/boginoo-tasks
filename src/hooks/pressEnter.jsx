import { useState, useEffect } from 'react'

export const usePress = (target) => {
    const [press, setPressed] = useState(false);

    const downHandler = (e) => {
        if (e.keyCode === target) {
            setPressed(true);
        }
    }

    const upHandler = (e) => {
        if (e.keyCode === target) {
            setPressed(false);
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", downHandler);
        document.addEventListener("keyup", upHandler);
        return () => {
            document.removeEventListener("keydown", downHandler);
            document.removeEventListener("keyup", upHandler);
        }
    }, [target])

    return press
}