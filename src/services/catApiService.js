const cache = {};
const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY = process.env.REACT_APP_THECAT_API_KEY;

const fetchWithTimeout = async (url, options, timeout = 10000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(url, { ...options, signal: controller.signal });
  clearTimeout(id);
  return response;
};

export const fetchRandomCatImage = async (setImage, retries = 3) => {
  const url = `${BASE_URL}/images/search?timestamp=${Date.now()}`;
  if (cache[url]) {
    setImage(cache[url][0].url);
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
      if (!data[0]?.url) throw new Error("No image URL in response");
      cache[url] = data;
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
  if (cache[url]) {
    setBreeds(cache[url].filter((img) => img.image?.url != null));
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
      cache[url] = data;
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
