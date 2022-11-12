import React from "react";
import Detail from './Detail';

class Clscom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: '#4cb96b' };
    }
    render() {
        return (
            <div>
                <h2>
                    Hello from the other side
                </h2>
                <div>
                    <h2>{this.props.newcomponent}</h2>
                    <p>
                        this is from the children {this.props.children}
                    </p>
                </div>
                <p>
                    some props, {this.props.contentdata}
                </p>
                <Detail hdd="520Gb" ram="16B" processor="core i3" />
            </div>
        )
    }
};

export default Clscom;

