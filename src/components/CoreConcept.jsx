// Exporting the CoreConcepts component as the default export of this module.
// The component takes props as its argument and destructures them into image, title, and description.
export default function CoreConcepts({ image, title, description }) {
  // The return statement contains the JSX to render the CoreConcepts component.
  return (
    // The component returns a list item (li) element.
    <li>
      {/* The img element uses the image prop for the src attribute and the title prop for the alt attribute.
          This ensures that the image source and alt text are dynamically set based on the passed props. */}
      <img src={image} alt={title} />
      {/* The h3 element displays the title prop as its content. */}
      <h3>{title}</h3>
      {/* The p element displays the description prop as its content. */}
      <p>{description}</p>
    </li>
  );
}

// ### Key Points:
// 1. **Default Export**: The `CoreConcepts` component is exported as the default export from the module, making it available for import in other files.
// 2. **Destructured Props**: The component takes an object of props and destructures it into `image`, `title`, and `description`.
// 3. **JSX Structure**: The component returns a `li` (list item) element containing an image (`img`), a heading (`h3`), and a paragraph (`p`).
// 4. **Dynamic Content**: The `src` attribute of the `img` element is set to the `image` prop, the `alt` attribute is set to the `title` prop, the `h3` element displays the `title` prop, and the `p` element displays the `description` prop.
// 5. **Reusability**: This structure allows the `CoreConcepts` component to be reused with different `image`, `title`, and `description` values, making it a versatile component for displaying core concepts.
