import React from 'react';

class Detail extends React.Component {
    render() {
        return (
            <div>
                <p>
                    I have a laptop with {this.props.ram} Ram, {this.props.hdd} Drive and {this.props.processor} Processor
                </p>
            </div>
        )
    }
};

export default Detail;