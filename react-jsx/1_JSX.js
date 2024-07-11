//functional component

//1.simple jsx - variables
export default function App() {
    //jsx 
    const hello ="hello";

    //using variables inside html
  return <h1>{hello}</h1>
}

//2.expression
export default function App() {
    //expression
  return <div>sum of 1 +2 = {1+2}</div>
}

//3. conditional rendering
  export default function App() {
      //props
      return <Display isError = {false}/>
  }

function Display(props){

    const isError = props.isError;    
    //conditional rendering using react props
return(<>
    {isError?<p>Error</p>:<p>Welcome</p>}
    </>)
}

//4.jsx with map
export default function App() {
 // map   
 const list = [1,2,3,4,5].map(p=><p>hello</p>);;
    //using variables inside html
  return <h1>{list}</h1>
}

//5.methods inside jsx
    export default function App() {

        const handleclick = ()=>alert("clicked");
        
      return <button onClick={handleclick}>click me</button>
    }

//6.props passing

    export default function App() {

        const person = {name:"jack",age:21,sex:"male"};
    
      return <Card person = {person}/>
    }

function Card(props){

    const propsTemp = props.person;
    return(
        <div>{propsTemp.name}</div>
    )
}



  
