export const setInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const defaultTheme = savedTheme || (prefersDark ? "dark" : "dark"); // default to dark

  document.documentElement.classList.toggle("dark", defaultTheme === "dark");
  localStorage.setItem("theme", defaultTheme);
};