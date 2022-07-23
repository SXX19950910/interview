import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import { useLayoutEffect, useState, useCallback } from 'react'
import styles from './index.module.scss'
import SubTitle from './../../components/SubTitle'
import Solutions from "../../components/Solutions"
import { TopicList } from "../../data/topic"
import Button from '../../components/Button'
import Answer from "../../components/Answer";

export default function Home () {
    const initHighlight = () => {
        document.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightElement(el)
        })
    }
    const [answerList, setAnswerList] = useState([])
    useLayoutEffect(() => {
        initHighlight()
    }, [answerList])
    const handleShowAnswer = useCallback((item) => {
        if (!answerList.includes(item.id) && item.id) {
            setAnswerList(list => {
                return [
                    ...list,
                    item.id
                ]
            })
        }
    }, [answerList])
    return (
        <div className={`${styles['home-wrap']} flex items-center justify-center`}>
            <div className={'w-[1240px] p-5'}>
                { TopicList.map((item, index) => {
                    if (item.type === 'select') {
                        return (
                            <div key={index} className={`${styles['item']} mb-14`}>
                                <SubTitle title={item.title} />
                                <div className={'options-area flex items-center flex-wrap mt-4'}>
                                    { item.answerOptions && item.answerOptions.map((answer, aIndex) => {
                                        return (
                                            <div key={aIndex} className={`option-item w-1/2 mb-2 text-text-main ${answer.className}`}>{ answer.label }</div>
                                        )
                                    }) }
                                </div>
                                { item.topic && (
                                    <pre>
                                        <code className={'rounded'}>{ item.topic }</code>
                                    </pre>
                                )}
                                { !answerList.includes(item.id) && <Button className={'mt-2 text-[12px]'} onClick={() => handleShowAnswer(item)}>查看答案</Button> }
                                {
                                    answerList.includes(item.id) && (
                                        <div className={'answer mt-2 bg-green-200 border-l-4 pl-3 py-2 border-green-500 rounded'}>
                                            <Answer answerType={item.answerType} answer={item.answer} />
                                        </div>
                                    )
                                }
                            </div>
                        )
                    } else if (item.type === 'solution') {
                        return (
                            <div key={index} className={`${styles['item']} mb-14`}>
                                <SubTitle title={item.title} />
                                <div className={'text-text-main mt-4'}>{ item.subtitle }</div>
                                <Solutions name={item.solutionName} />
                            </div>
                        )
                    } else {
                        return null
                    }
                }) }
            </div>
        </div>
    )
}