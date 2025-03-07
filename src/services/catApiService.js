const cache = {};
const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY = process.env.REACT_APP_THECAT_API_KEY;

export const fetchRandomCatImage = async (setImage) => {
  const url = `${BASE_URL}/images/search`;
  if (cache[url]) {
    setImage(cache[url][0].url);
    return;
  }

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
    });
    if (!response.ok) throw new Error("Failed to fetch random cat image");
    const data = await response.json();
    cache[url] = data;
    setImage(data[0].url);
  } catch (error) {
    throw error;
  }
};

export const fetchCatBreeds = async (setBreeds) => {
  const url = `${BASE_URL}/breeds`;
  if (cache[url]) {
    setBreeds(cache[url].filter((img) => img.image?.url != null));
    return;
  }

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
    });
    if (!response.ok) throw new Error("Failed to fetch cat breeds");
    const data = await response.json();
    cache[url] = data;
    setBreeds(data.filter((img) => img.image?.url != null));
  } catch (error) {
    throw error;
  }
};
