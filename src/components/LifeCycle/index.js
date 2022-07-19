import { Component  } from 'react'


export default class LifeCycle extends Component {

    state = {
        test: '测试变了',
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log('上报错误', errorInfo, error)
        this.setState({
            error: true
        })
    }

    componentDidMount() {
        console.log('组件挂载完毕')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('组件更新完毕')
    }

    componentWillUnmount() {
        console.log('组件将要被卸载')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextState
    }

    render() {
        const handleChange = () => {
            this.setState({
                test: '新的值'
            })
        }

        const handleError = () => {
           throw Error('new Error')
        }
        return (
            <div>
                <p>{ this.state.test }</p>
                <button className={'border-black p-2 border rounded mt-2'} onClick={handleChange}>改变</button>
                <button className={'border-black p-2 border rounded mt-2 ml-2'} onClick={handleError}>抛出错误</button>
            </div>
        )
    }
}