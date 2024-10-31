
export const fetchTopicBuId = async (id: string): Promise<any[]> => {
  const response = await fetch(`http://localhost:4000/api/topics/${id}`); 
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};