const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

function Counter(props) {
    console.log(props)
    const [countNum, setCountNum] = React.useState(0)
    const [title, setTitle] = React.useState("CCAC")
    


    // const incCount =()=>{
    //     setCountNum(countNum+1)
    // }

    // const Deccount = ()=>{
    //     setCountNum(Math.max(countNum-1, 0));
    // }
    // const zerocount = ()=>{
    //     setCountNum(0)
    // }
    const updateCounter = (n) =>{
        // setCountNum(Math.max(countNum+n, 0))
        if(countNum+n <0 ) {
            return
        }

        // setCountNum((prv)=>{
        //     console.log(prv)
        //     return prv+n
        // })

        // setCountNum(prv => prv + n)
        // console.log(countNum)
        setCountNum(countNum +n)
        
    }
    return (
   <div className='counter'>
      <button onClick = {()=>updateCounter(-1)}> - </button>
      <h3>{countNum}</h3>
      <button onClick = {()=>updateCounter(1)}> + </button>
      <button onClick ={()=>updateCounter(-countNum)}> C </button>
      
   </div>
  )
}

function SumInfo(props)  {
    // console.log(props)
    const styles = {
        color : props.color,
        fontSize : props.size==='big'? '50px' : '40px'
    };
  return (
    <div className='suminfo'>
      {/* <h1 style={styles}>Sum = 0</h1> */}
      <h1 style={ { color: props.color, fontSize: '50px' } }>Sum = 0</h1>
    </div>
  )
}




function App() {
  
  // const [counters, setCounters] = React.useState([ {id: 1, number: 0} ])
  // // let allCounter = Array(counters).fill(<Counter />)
  // const hdlAddCounter = ()=>{
  //   let newId = counters.length===0 ? 1 :counters.at(-1).id +1
  //   // setCounter([...counters, {id: newId, number : 0}])
  //   let cloneCounters = [...counters]
  //   cloneCounters.push( {in: newId, number:0} )
  //   setCounters(cloneCounters)
  // }

  const [counters,setCounter] = React.useState([ {id:1,number:0}])
  // let allCounter = Array(counters).fill(<Counter/>)
  const hdlAddCounter = ()=>{
  let newId = counters.length === 0? 1 : counters.at(-1).id +1
  // setCounter([...counters,{id: newId,number : 0}])
  let cloneCounters = [...counters]
  cloneCounters.push({id: newId,number:0})
  setCounter(cloneCounters)

}
  
  return (
  <>
    
    <h1 className="text-center">Codecamp Academy 01</h1>
    <button className="text-center" onClick={ hdlAddCounter }>Add Counter</button>
    <SumInfo color="red" size="big"/>
    
    {counters.map(el => {
      return <Counter key={el.id} item = {el}/>
    })}
    
  </>
  )
}
