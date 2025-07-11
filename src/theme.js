export const setInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const defaultTheme = savedTheme || "dark"; // always default to dark

  document.documentElement.classList.toggle("dark", defaultTheme === "dark");
  localStorage.setItem("theme", defaultTheme);
};
