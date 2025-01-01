import 'bootstrap/dist/css/bootstrap.min.css';

export default function Food(){
    let foodItem=['dal','khichadi','shevbhaji','onion','more']

    return(
        <>
        <h1>Welcome to food items</h1>
        <ul className='list-group'>
           { foodItem.map((item)=>{
            return <li className='list-group-item'>{item}</li>
           })}
        </ul>
        </>
    )
}