export default class DerivedState extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={myName:"Panvith"}
    }

    static getDerivedStateFromProps(props,state)
    {
        return({myName:props.newName})
    }

    render()
    {
        return(
            <>
            <p>{this.state.myName}</p>
            </>
        )z
    }
}
function App() 
{
  return (
            <>
       
             <DerivedState newName="Sachin"/>
            </>
         );   
}

export default App;