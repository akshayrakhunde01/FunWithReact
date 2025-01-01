import 'bootstrap/dist/css/bootstrap.min.css';

export default function Food(){
    let foodItem=['dal','khichadi','shevbhaji','onion','more']
    // console.log(foodItem.length)
    return(
        <>
        <h1>Welcome to food items</h1>
        <ul className='list-group'>
           { foodItem.map((item,index)=>{
            return <li className='list-group-item' key={item}>{index}</li>
           })}
        </ul>
        </>
    )
}