import "./NavBar.css"
import { Data } from "./data"

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

function NavBar() {
  return (
    <>
        <p>Nav Bar</p>
        <Card {...Data[0]} />
        <Card {...Data[1]} />
        <Card {...Data[2]} />
        
    </>
  )
}

export default NavBar