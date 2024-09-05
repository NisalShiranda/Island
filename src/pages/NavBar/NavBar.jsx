import "./NavBar.css"
import { Data } from "./data"
import TapButton from "./TapButton"


function Card(props){
    return (
        <>
        <ul>
          <h1>{props.title}</h1>
          <p>{props.paragraph}</p>
        </ul>
        </>
    )
}

function clickHandler(selectedButton){
  return(
    
      alert(selectedButton)
   
  )
}



function NavBar() {
  return (
    <>
        <p>Nav Bar</p>
        <Card {...Data[0]} />
        <Card {...Data[1]} />
        <Card {...Data[2]} />
        <br></br>
        <TapButton onSelect={() => clickHandler('Home')}>Home</TapButton>
        <TapButton onSelect={() => clickHandler('About')}>About</TapButton>
       
        
        
    </>
  )
}

export default NavBar