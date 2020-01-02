import { Component } from "react"

export class ScrollToTop extends Component {
    componentDidUpdate() {
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return null;
    }
}