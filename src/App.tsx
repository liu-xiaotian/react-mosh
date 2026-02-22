import { useState } from "react";
import ExpandableText from "./components/ExpandableText";
function App() {
  return (
    <div>
      <ExpandableText>
        Getting Started(3m) Welcome Preview Prerequisites Preview Source Code
        Questions and Support Connect with Me Learning Paths Getting Started
        with React(18m) What is React Preview Setting Up the Development
        Environment Preview Creating a React App Preview Project Structure
        Preview Creating a React Component Preview How React Works Preview React
        Ecosystem Preview Summary Side Note: My VSCode Theme Building
        Components(58m) Introduction 0m 35s Creating a ListGroup Component 5m
        36s Fragments 2m 28s Rendering Lists 3m 30s Conditional Rendering 5m 25s
        Handling Events 6m 07s Managing State 6m 03s Passing Data via Props 3m
        58s Passing Functions via Props 3m 46s State vs Props 1m 33s Passing
        Children 5m 05s Inspecting Components with React Dev Tools 2m 10s
        Exercise- Building a Button Component 7m 02s Exercise- Showing an Alert
        5m 02s Summary Styling Components(32m) Introduction 0m 26s Vanilla CSS
        4m 11s CSS Modules 3m 45s CSS-in-JS 7m 51s Separation of Concerns 2m 30s
        Inline Styles 1m 02s Popular UI Libraries 2m 03s Adding Icons 1m 52s
        Exercise- Using CSS Modules 3m 00s Building a Like Component 5m 19s
        Summary Managing Component State(41m) Introduction 0m 25s Understanding
        the State Hook 4m 28s Choosing the State Structure 2m 56s Keeping
        Components Pure 2m 03s Understanding the Strict Mode 2m 42s Updating
        Objects 2m 21s Updating Nested Objects 2m 15s Updating Arrays 1m 49s
        Updating Array of Objects 1m 46s Simplifying Update Logic with Immer 2m
        56s Sharing State between Components 6m 22s Exercise- Updating State 4m
        49s Exercise- Building an ExpandableText Component 6m 22s Summary
      </ExpandableText>
    </div>
  );
}

export default App;
