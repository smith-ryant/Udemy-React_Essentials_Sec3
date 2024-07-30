// Import the useState hook from React. Hooks are special functions that let you "hook into" React features. useState allows you to add state to a functional component.
import { useState } from "react";

// Importing the TabButton component from its file path.
import TabButton from "./TabButton/TabButton.jsx";

// Importing the EXAMPLES object from the data.js file. This object contains data for the examples.
import { EXAMPLES } from "../data.js";

// Importing the Section component from its file path.
import Section from "./Section.jsx";

// The Examples component is a functional component that displays different examples based on user selection.
export default function Examples() {
  // useState hook to create a state variable 'selectedTopic' and a function 'setSelectedTopic' to update it. Initially, 'selectedTopic' is undefined.
  const [selectedTopic, setSelectedTopic] = useState();

  // Function to handle the selection of a tab button. It takes the selected button's value (e.g., "components", "jsx", "props", "state") and updates the 'selectedTopic' state.
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // The commented out console.log statement was likely used for debugging to check the value of 'selectedTopic'.
    //console.log(selectedTopic);
  }

  // The return statement contains the JSX to render the component.
  return (
    // Section component with title and id props.
    <Section title="Examples" id="examples">
      <h2>Examples</h2>
      <menu>
        {/* TabButton component for "Components" tab. 
            isSelected prop checks if 'selectedTopic' is "components".
            onClick prop calls the handleSelect function with "components" as the argument. */}
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>

        {/* TabButton component for "JSX" tab. */}
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>

        {/* TabButton component for "Props" tab. */}
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>

        {/* TabButton component for "State" tab. */}
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>

      {/* Conditionally render a message if no topic is selected. */}
      {!selectedTopic && <p>Please select a topic.</p>}

      {/* Conditionally render the content of the selected topic. 
          If 'selectedTopic' is defined, display its title, description, and code from the EXAMPLES object. */}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}

// Key Points:
// useState Hook: Allows functional components to have state. selectedTopic is a state variable that holds the currently selected topic.
// handleSelect Function: Updates selectedTopic when a tab button is clicked.
// Conditional Rendering: Uses conditional rendering to show either a message prompting the user to select a topic or the content related to the selected topic.
// Components: TabButton and Section are used to structure the UI. TabButton handles user interaction, and Section groups the content.
// Dynamic Content: The content displayed in the tab-content div is dynamically pulled from the EXAMPLES object based on the selected topic.
