
export default function Lists() {

    const cars = [
        { id: 1, brand: 'Ford' },
        { id: 2, brand: 'BMW' },
        { id: 3, brand: 'Audi' }
    ]
 //{cars.map(car => <Car key={car.id} brand={car.brand}/>)}
    return (
        <div>
            <ul>
          
                {cars.map(car => <Car key={crypto.randomUUID()} brand={car.brand} />)}
            </ul>
        </div>
    )
}

function Car(props) {
    return <li>I am a {props.brand}</li>
}