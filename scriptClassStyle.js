const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);

class Car extends React.Component {
    render = () => {
        return (
            <div className={"card"}>
                <h2>{this.props.model}</h2>
                <h3>{this.props.manufacturer}</h3>
                <h3>{this.props.year}</h3>
                <div>{this.props.serialNumber}</div>
            </div>
        );
    }
}

class Cars extends React.Component {
    constructor() {
        super();
        this.state = {
            cars: [
                {model: 'Civic', manufacturer: 'Honda', year: 2019, serialNumber: 123456},
                {model: 'Accord', manufacturer: 'Honda', year: 2020, serialNumber: 190856},
                {model: 'Corola', manufacturer: 'Toyota', year: 2017, serialNumber: 986734},
                {model: 'Camry', manufacturer: 'Toyota', year: 2021, serialNumber: 689325},
                {model: '370z', manufacturer: 'Nissan', year: 2017, serialNumber: 279867}
            ]
        };
    }
    render() {
        return (
            <React.Fragment>
                {this.state.cars.map((item, index) =>
                    (<Car key={index} model={item.model} manufacturer={item.manufacturer}
                          year={item.year} serialNumber={item.serialNumber}/>))}
            </React.Fragment>
        );
    }
}

root.render(<Cars/>);