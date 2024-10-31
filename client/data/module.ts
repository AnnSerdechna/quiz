
export const fetchModules = async (): Promise<any[]> => {
  const response = await fetch('http://localhost:4000/api/modules'); // Update with your server URL
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};