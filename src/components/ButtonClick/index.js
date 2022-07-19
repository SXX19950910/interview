import {Component} from "react";

export default class ButtonClick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    static getDemoStateFromProps(prevState) {
        console.log('hello')
        return {
            ...prevState
        }
    }

    componentDidMount() {
        console.log('mount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('update')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('should')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('snapshot')
        return true
    }

    onClick =() => {
        this.setState(state => ({ ...state, count: state.count + 1 }))
    }

    render () {
        console.log('render')
        return (
            <div>
                <button onClick={this.onClick}>Derived</button>
            </div>
        )
    }

}