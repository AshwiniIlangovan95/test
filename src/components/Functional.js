/* <><h1>Functional components</h1>
<label>Enter Your Name :</label><input type="text" id="name"></input>
<p>Welcome document.getElementById("name").innerHTML</p>
</>
 */


function Hello(){
    return <h1>Hello World!!! {Greeting()}</h1>
}
function Greeting(){
    return <h4>welcome {greet}</h4>
}
const greet= "This is React functional component";

export  {Hello, Greeting };