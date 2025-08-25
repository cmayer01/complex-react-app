import React from "react"
import ReactDOM from "react-dom/client"

function ExampleComponent() {
  return (
    <div>
      <h1>this is our app!</h1>
      <p>The sky is blue.</p>
    </div>
  )
}

//console.log("hi")
const root = ReactDOM.createRoot(document.querySelector("#app"))

root.render(<ExampleComponent />)

//export default ExampleComponent
