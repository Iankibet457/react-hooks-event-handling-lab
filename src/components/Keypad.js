// Code Keypad Component Here

function Keypad (){
    function change(event){
        event.preventDefault()
        console.log("Entering password...")
    }
    return (
        <div>
            <input onChange={change} type="password"/>
            {/* <h1>hi</h1> */}
        </div>
    )
}

export default Keypad;