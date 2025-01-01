function Random(){
    let random
    random= Math.floor(Math.random()*10+1);
    return <h1 style={{'background-color':'#776691'}}> THIS IS RANDOM NUMBER: {random} </h1>
}

export default Random;