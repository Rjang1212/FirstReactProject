/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="react-logo.png"` in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

  import { createRoot } from "react-dom/client"
  import "../src/index.css"

  const root = createRoot(document.getElementById("root"))

  root.render(

    <div className="body">
      <img src="/src/assets/react.svg" className = "small-image"/>
      <h1 className="h1">Fun facts about React</h1>
      <ul>
        <li>Was released in 2013</li>
        <li>Was originaly create by Jordan walke</li>
        <li>Has well over 100k starts on github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousand of enterprise apps, including mobile apps</li>
      </ul>
    </div>
    
  )
