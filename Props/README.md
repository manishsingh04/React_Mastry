# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

->PROPS

In React, props are indeed immutable, meaning you should not directly change the values of props within your component. However, what you're observing in your code snippet is not actually changing the props themselves, but rather assigning default values or using the props to initialize local variables.

Let's break down your code:
function Header({ first_name, last_name }) {
Header.propTypes = first_name, last_name // This line doesn't define propTypes correctly
first_name = "Rithvik"; // This assigns a local variable, not the prop itself
return (
<>
<h1>Header Component: {first_name} {last_name} </h1>
</>
)
}

export default Header;

Here's what's happening:

Destructuring Props: first_name and last_name are destructured from the props object passed to the Header component. This doesn't change the props object itself; it just creates local variables first_name and last_name within the function scope.

Assigning Local Variables: first_name = "Rithvik"; assigns a new value to the local variable first_name, not to the prop first_name that was passed to the component. This is allowed because within the function, you can assign values to local variables.

Rendering: When you render {first_name} {last_name} in the JSX, it's displaying the values of the local variables first_name and last_name (which may be initialized with the values from props but can be changed locally).

To clarify:

React enforces immutability of props to maintain a clear flow of data and prevent unintended side effects. Changing props directly (e.g., props.first_name = "Rithvik";) is not allowed and will result in errors or unexpected behavior.
What you're doing in your example is perfectly valid within the function scope because you're manipulating local variables, not the actual props object.
