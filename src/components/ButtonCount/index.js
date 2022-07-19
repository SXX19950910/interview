import { memo, useState, useCallback } from "react";

const counter = (props) => {
    console.log('render')
    return (
        <div>
            <button onClick={props.onAdd}>加</button>
        </div>
    )
}

const Counter = memo(counter)

export default function ButtonCount () {
    const [count, setCount] = useState(0)
    const onAdd = useCallback(() => {
        setCount(count + 1)
    }, [count])
    return (
        <div>
            <Counter onAdd={onAdd} />
        </div>
    )
}