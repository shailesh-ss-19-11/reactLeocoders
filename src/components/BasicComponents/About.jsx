import React from "react";

class About extends React.Component {
    constructor() {
        super();
        this.state={
            name:"shailesh",
        }
    }

    componentDidMount(){
        this.setState({name:"asmita"});
    }

    componentDidUpdate(prevprops, prevstate){
        console.log(prevprops)
        console.log(prevstate)
        if(prevstate!==this.state){
            alert("hello");
        }
    }

    componentWillUnmount(){
        alert("componentwillUnmount");
    }
    render() {
        // this.setState({name:"durga"});
        return (
            <>
                {this.state.name}
            </>
        )
    }
}
export default About;