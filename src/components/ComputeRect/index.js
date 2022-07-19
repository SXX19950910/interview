import {useEffect, useState} from 'react'

export default function ComputeRect () {
    const [rectList, setRectList] = useState([])
    const [containerRect, setContainerRect] = useState({ width: null, height: null, x: null, y: null })
    const maxWidth = 100
    const minWidth = 20
    const maxHeight = 100
    const minHeight = 20

    useEffect(() => {
        setRectList(generateRectList())
    }, [])

    const generateRectList = () => {
        const number = 5
        const result = []
        for (let i = 0; i < number; i++) {
            const width = Math.floor(Math.random() * (minWidth - maxWidth)) + maxWidth
            const height = Math.floor(Math.random() * (minHeight - maxHeight)) + maxHeight
            const maxLeft = 1200 - width
            const maxTop = 400 - height
            const rect = {
                width,
                height,
                x: Math.floor(Math.random() * (0 - maxLeft)) + maxLeft,
                y: Math.floor(Math.random() * (0 - maxTop)) + maxTop
            }
            result.push(rect)
        }
        return result
    }

    const handleGenerateChild = () => {
        setRectList(generateRectList())
    }

    const handleGenerateContainer = () => {
        const leftArr = rectList.map(item => item.x)
        const topArr = rectList.map(item => item.y)
        const offsetList = []
        const [minLeft] = getMaxAndMin(leftArr)
        const [minTop] = getMaxAndMin(topArr)
        const $items = document.querySelectorAll('.compute-rect .item')
        $items.forEach(item => {
            const rect = item.getBoundingClientRect()
            const obj = {
                bottom: rect.bottom,
                right: rect.right,
                height: item.offsetHeight,
                width: item.offsetWidth,
                offsetTop: item.offsetTop,
                offsetLeft: item.offsetLeft
            }
            offsetList.push(obj)
        })
        offsetList.sort((a, b) => a.bottom - b.bottom)
        const maxOffsetTopItem = offsetList[offsetList.length - 1]
        offsetList.sort((a, b) => a.right - b.right)
        const maxOffsetLeftItem = offsetList[offsetList.length - 1]
        setContainerRect({
            width: maxOffsetLeftItem.offsetLeft - minLeft + maxOffsetLeftItem.width,
            height: maxOffsetTopItem.offsetTop - minTop + maxOffsetTopItem.height,
            x: minLeft,
            y: minTop
        })
    }

    const getMaxAndMin = (arr) => {
        const sortArr = arr.sort((a, b) => a - b)
        return [sortArr[0], sortArr[sortArr.length - 1]]
    }

    return (
        <div className={'compute-rect'}>
            <div className={'h-[400px] border border-black mt-5 relative'}>
                <div className={'container-react absolute border border-black'} style={{ width: containerRect.width + 'px', height: containerRect.height + 'px', left: containerRect.x + 'px', top: containerRect.y + 'px' }} />
                { rectList.map((item, index) => {
                    return (
                        <div key={index} className={'item absolute bg-red-500'} style={{ height: item.height + 'px', width: item.width + 'px', top: item.y + 'px', left: item.x + 'px' }} />
                    )
                }) }
            </div>
            <div className={'handle-area mt-4'}>
                <button className={'bg-sky-500 p-2 text-white rounded'} onClick={handleGenerateChild}>生成子矩阵</button>
                <button className={'bg-sky-500 p-2 text-white rounded ml-4'} onClick={handleGenerateContainer}>生成容器矩阵</button>
            </div>
        </div>
    )
}