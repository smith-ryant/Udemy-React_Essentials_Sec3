// Importing an image using a relative path. The image is stored in the assets folder two levels up.
import reactImg from "../../assets/react-core-concepts.png";

// Importing a CSS file for styling the Header component.
import "./Header.css";

// An array containing descriptions related to React.
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

// A function to generate a random integer between 0 and the specified max (inclusive).
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// The Header component is a functional component that displays a header section.
export default function Header() {
  // Generate a random description from the reactDescriptions array using the genRandomInt function.
  const description = reactDescriptions[genRandomInt(2)];

  // The return statement contains the JSX to render the Header component.
  return (
    <header>
      {/* Display the imported image. The src attribute is set to the imported reactImg rather than using a relative path directly in the JSX. */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* Display the randomly selected description in the paragraph. */}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// ### Key Points:
// 1. **Image Import**: The `reactImg` is imported from the specified relative path and used as the source in the `img` tag.
// 2. **CSS Import**: The `Header.css` file is imported to style the `Header` component.
// 3. **reactDescriptions Array**: Contains a list of descriptions that will be randomly selected and displayed in the component.
// 4. **genRandomInt Function**: Generates a random integer between 0 and `max` (inclusive). Used to select a random description from the `reactDescriptions` array.
// 5. **Header Component**: A functional component that renders an image, a heading, and a paragraph. The paragraph includes a randomly selected description.
// 6. **JSX Structure**: The image source is set to the imported `reactImg`, and the description is dynamically inserted into the paragraph using the `description` variable.
