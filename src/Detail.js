import React from 'react';

class Detail extends React.Component {
    render() {
        return (
            <div>
                <p>
                    I have a laptop with {this.props.ram} Ram, {this.props.hdd} Drive and {this.props.processor} Processor.
                </p>
            </div>
        )
    }
};

class Detail2 extends React.Component {
    render() {
        return (
            <div>
                <p>
                    I have a desktop with {this.props.ram} Ram, {this.props.gc} Graphics card, {this.props.hdd} Drive and {this.props.processor} Processor.
                </p>
            </div>
        )
    }
};


export default (Detail, Detail2);