import {useMemo, useState} from 'react'


const Button = ({name, children}) => {
    const onChangeName = (cName) => {
        console.log('子组件')
        return cName + '被改变'
    }

    const Name = useMemo(() => onChangeName(name), [name])
    return (
        <div>
            <div className={'flex items-center justify-center border-red-500 border rounded mt-2'}>
                { Name }
            </div>
            <div>{ children }</div>
        </div>
    )
}

export default function MemoDemo () {
    const [name, setName] = useState('默认名称')
    const [content, setContent] = useState('')

    return (
        <div>
            <h1>UseMemo可以控制组件的更新条件，避免不必要的方法调用。用法：类似useEffect，第一个方法为函数回调，第二个为监听对象（数组）</h1>
            <div onClick={() => setName('哈哈')}>改变名字</div>
            <div onClick={() => setContent('内容')}>改变内容</div>
            <Button name={name}>{ content }</Button>
        </div>
    )
}