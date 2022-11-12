import React from "react";
import Detail from './Detail';
import Detail2 from './Detail'

class Clscom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#4cb96b',
            laptops: [
                { ram: "128 GB", hdd: "2 Tb", processor: "core i5" },
                { ram: "64 GB", hdd: "1.5 Tb", processor: "core i3" },
                { ram: "256 GB", hdd: "5 Tb", processor: "core i7" }
            ],
            desktops: [
                { ram: "128 GB", gc: "4 gb", hdd: "2 Tb", processor: "core i5" },
                { ram: "64 GB", gc: "8 gb", hdd: "1.5 Tb", processor: "core i3" },
                { ram: "256 GB", gc: "16 gb", hdd: "5 Tb", processor: "core i7" }
            ]
        };
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
                <Detail hdd={this.state.laptops[2].hdd} ram={this.state.laptops[2].ram} processor={this.state.laptops[2].processor} />
                <Detail hdd={this.state.laptops[0].hdd} ram={this.state.laptops[0].ram} processor={this.state.laptops[0].processor} />
                <Detail hdd={this.state.laptops[1].hdd} ram={this.state.laptops[1].ram} processor={this.state.laptops[1].processor} />
                <Detail2 hdd={this.state.desktops[2].hdd} ram={this.state.desktops[2].ram} gc={this.state.desktops[2].gc} processor={this.state.desktops[2].processor} />
                <Detail2 hdd={this.state.desktops[0].hdd} ram={this.state.desktops[0].ram} gc={this.state.desktops[0].gc} processor={this.state.desktops[0].processor} />
                <Detail2 hdd={this.state.desktops[1].hdd} ram={this.state.desktops[1].ram} gc={this.state.desktops[1].gc} procesdesk={this.state.desktops[1].processor} />
            </div>
        )
    }
};

export default Clscom;

