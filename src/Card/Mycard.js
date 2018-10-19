import React from "react" 
class Mycard extends React.Component {
    render() {
        return (<div style = {{border:"100px solid pink"}}>
        {this.props.name}
        </div>)
      }
}
export default Mycard;