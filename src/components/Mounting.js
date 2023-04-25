function EnComponent(OrComponent) {
    class NewComponent extends Component {
        constructor() {
            super()
            this.state = {
                count: 0
            }
        }
        inc = () => {
            this.setState(({ count }) => (
                { count: count + 1 })
            )
        }
        render() {
            return <OrComponent
                count={this.state.count}
                inc={this.inc} />
        }
    }
    return NewComponent
}
export export default EnComponent
import React, { Component } from 'react'
import EnComponent from './EnComponent'
class HoverCounter extends Component {
    render() {
        const { count, inc } = this.props
        return (
            <>
                <h3 onMouseEnter={inc}>Hovered {count} times</h3>

            </>
        )
    }
}
export default EnComponent(HoverCounter)
import React, { Component } from 'react'
import EnComponent from './higerEnComponent'

class ClickCounter extends Component {
    render() {
        return (
            <button onClick={this.props.inc}>ClickCounter {this.props.count}</button>
        )
    }
}
export default EnComponent(ClickCounter)