import { Component } from "react";
class SomeComponents extends Component {


    constructor(props) {
        console.log("Inside Constructor")
        super(props);
        this.state = {
            age: 18
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Inside getDerviedStateFromProps")
        console.log("The state value is: ", state.age)
        return {
            age: props.fage
        }
    }


    componentDidMount() {
        console.log("Inside componentDidMount")
        // this.setState({
        //     age: 555
        // })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Inside getSnapshotBeforeUpdate")
        console.log('PrevSate', prevState)
        return prevState
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Inside componentDidUpdate")
        console.log('Snapshot', snapshot)

    }
    componentWillUnmount() {

    }
    render() {
        console.log("Inside render method")
        return (
            <div>
                <h3>Your age is : {this.state.age}</h3>
            </div>
        )
    }
}

export default SomeComponents;


