const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '47085214-4cff0ba1bb96c64321ec3a8d9';

export async function fetchImages(query, page = 1, perPage = 12) {
  try {

    const params = new URLSearchParams({
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: perPage,
    });

    const response = await fetch(`${BASE_URL}?${params.toString()}`);

    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
