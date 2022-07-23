export default function Answer(props) {
    return (
        <div>
            { props.answerType === 'code' && (
                <pre>
                    <code>{ props.answer }</code>
                </pre>
            ) }
            {
                props.answerType !== 'code' && (
                    typeof props.answer === 'string' ? (
                        <div>{ props.answer }</div>
                    ) : (
                        <div>
                            {
                                props.answer && props.answer.map(child => {
                                    return <span className={'mr-2'}>{child}</span>
                                })
                            }
                        </div>
                    )
                )
            }
        </div>
    )
}