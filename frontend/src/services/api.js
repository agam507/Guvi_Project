// Set API base URL from environment variable or default to localhost
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

/**
 * Checks the backend status by sending a GET request to the root API endpoint.
 * @returns {Promise<Object>} The backend status response.
 * @throws Will throw an error if the fetch fails.
 */
export const checkBackendStatus = async () => {
  try {
    const response = await fetch(`${API_URL}/`);
    if (!response.ok) {
      throw new Error(`Backend responded with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error checking backend status:', error);
    throw error;
  }
};
