const cache = {
  breeds: { data: null, timestamp: 0 },
};

const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY = process.env.REACT_APP_THECAT_API_KEY;
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const fetchWithTimeout = async (url, options, timeout = 10000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(url, { ...options, signal: controller.signal });
  clearTimeout(id);
  return response;
};

export const fetchRandomCatImage = async (setImage, retries = 3) => {
  const url = `${BASE_URL}/images/search?timestamp=${Date.now()}`;

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetchWithTimeout(url, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
      }, 10000);
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const data = await response.json();
      if (!data[0]?.url) throw new Error("No image URL in response");
      setImage(data[0].url);
      return true;
    } catch (error) {
      if (attempt === retries - 1) {
        console.error("Failed to fetch random cat after retries:", error.message);
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
    }
  }
};

export const fetchCatBreeds = async (setBreeds, retries = 3) => {
  const url = `${BASE_URL}/breeds`;
  const now = Date.now();

  // If there is data in the cache and it is not older than 24 hours, we use it
  if (cache.breeds.data && now - cache.breeds.timestamp < CACHE_TTL) {
    setBreeds(cache.breeds.data.filter((img) => img.image?.url != null));
    return true;
  }

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetchWithTimeout(url, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
      }, 10000);
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const data = await response.json();
      // Save data to cache with the current timestamp
      cache.breeds.data = data;
      cache.breeds.timestamp = now;
      setBreeds(data.filter((img) => img.image?.url != null));
      return true;
    } catch (error) {
      if (attempt === retries - 1) {
        console.error("Failed to fetch cat breeds after retries:", error.message);
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
    }
  }
};
