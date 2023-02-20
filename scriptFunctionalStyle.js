const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);

const Car = (props) => {
    return (
        <div className={"card"}>
            <h2>{props.model}</h2>
            <h3>{props.manufacturer}</h3>
            <h3>{props.year}</h3>
            <div>{props.serialNumber}</div>
        </div>
    );
}

const Cars = () => {
    const cars = [
        {model: 'Civic', manufacturer: 'Honda', year: 2019, serialNumber: 123456},
        {model: 'Accord', manufacturer: 'Honda', year: 2020, serialNumber: 190856},
        {model: 'Corola', manufacturer: 'Toyota', year: 2017, serialNumber: 986734},
        {model: 'Camry', manufacturer: 'Toyota', year: 2021, serialNumber: 689325},
        {model: '370z', manufacturer: 'Nissan', year: 2017, serialNumber: 279867}
    ];

    return (
        <React.Fragment>
            {cars.map((item, index) =>
                (<Car key={index} model={item.model} manufacturer={item.manufacturer}
                      year={item.year} serialNumber={item.serialNumber}/>))}
        </React.Fragment>
    );
}

root.render(<Cars/>);