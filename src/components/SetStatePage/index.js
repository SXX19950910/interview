import {useEffect, useState} from 'react'

export default function SetStatePage () {

    const [count, setCount] = useState(-1)

    useEffect(() => {
        setCount(0)
    }, [])

    console.log('render')
    return (
        <div>
            <h1>SetStatePage</h1>
            <button>{ count }</button>
        </div>
    )
}