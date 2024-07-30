// Importing the CoreConcept component from its file path.
import CoreConcept from "./CoreConcept";

// Importing the CORE_CONCEPTS array from the data.js file. This array contains data for the core concepts.
import { CORE_CONCEPTS } from "../data";

// The CoreConcepts component is a functional component that displays a list of core concepts.
export default function CoreConcepts() {
  return (
    // The section element with an id of "core-concepts" serves as a container for the core concepts content.
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* The map function iterates over the CORE_CONCEPTS array and renders a CoreConcept component for each item.
            Each CoreConcept component is passed props using the spread operator {...conceptItem}, which spreads the properties of conceptItem (title, description, image) as props.
            The key prop is required for each item in a list to help React identify which items have changed, are added, or are removed. */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
        {/* The commented section below shows an alternative way to render the CoreConcept components without using the map function.
            This method is less efficient and more verbose, especially when the number of items increases.
            
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
        */}
      </ul>
    </section>
  );
}

// ### Key Points:
// 1. **Import Statements**: `CoreConcept` component and `CORE_CONCEPTS` data are imported from their respective file paths.
// 2. **CoreConcepts Component**: A functional component that returns a JSX structure.
// 3. **map Function**: Iterates over the `CORE_CONCEPTS` array and renders a `CoreConcept` component for each item. The `key` prop helps React manage the list efficiently.
// 4. **Spread Operator**: The `{...conceptItem}` syntax spreads the properties of `conceptItem` (like `title`, `description`, `image`) as props to the `CoreConcept` component.
// 5. **Conditional Rendering**: A commented-out section shows an alternative way to render `CoreConcept` components without the `map` function, which is less efficient.
// 6. **Section Structure**: The `section` element groups the content related to core concepts, and the `ul` element contains the list of `CoreConcept` components.
