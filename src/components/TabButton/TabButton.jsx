// The TabButton component takes in props using destructuring. It accepts `children`, `isSelected`, and the rest of the props.
export default function TabButton({ children, isSelected, ...otherProps }) {
  // This line is commented out but was used for debugging to log when the TabButton component executes.
  //console.log("TabButton component executing");

  return (
    <li>
      {/* The button element uses a className based on the isSelected prop. 
          If isSelected is true, it assigns the "active" class, otherwise it assigns undefined. 
          It also spreads otherProps into the button element, 
          which allows passing additional props to the button dynamically. */}
      <button className={isSelected ? "active" : undefined} {...otherProps}>
        {/* children represents the content passed between the opening and closing tags of TabButton. */}
        {children}
      </button>
    </li>
  );
}
