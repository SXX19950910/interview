import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import { useLayoutEffect } from 'react'
import styles from './index.module.scss'
import SubTitle from './../../components/SubTitle'
import Solutions from "../../components/Solutions"
import { TopicList } from "../../data/topic"

export default function Home () {
    useLayoutEffect(() => {
        document.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightElement(el)
        })
    }, [])
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