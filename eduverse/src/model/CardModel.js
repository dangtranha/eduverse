const BASE_URL = "http://localhost:5000/api/course";

export const courses = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }
  const data = await response.json();
  return data;
};
