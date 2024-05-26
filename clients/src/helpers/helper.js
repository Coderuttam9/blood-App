// generate page title from route
export const generatePageTitle = (path) => {
  return path.replace(/-/g, "").replace(/\//g, "");
};
