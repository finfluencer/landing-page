import "./src/styles/global.css";

// Add dark class to html element on page load
export const onInitialClientRender = () => {
  document.documentElement.classList.add("dark");
};

// Also add it on route changes
export const onRouteUpdate = () => {
  document.documentElement.classList.add("dark");
};
