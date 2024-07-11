//1.onChange
function Component(){
    const [label,setLabel] = useState("");

    //synthetic event
   const onTypeChage= (e)=> {
       setLabel(e.target.value);
   }
    //on change
    return <input type="text" value= {label} onChange={onTypeChage} input/>
}
//2.
