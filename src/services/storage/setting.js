const themeStorageService = {
  getTheme() {
    return localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : "light";
  },
  setTheme(theme) {
    localStorage.setItem("theme", JSON.stringify(theme));
  },
};

export { themeStorageService };
