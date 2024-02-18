const CACHE_KEY = 'youtubeTrailerCache';

export const getFromCache = () => {
  const cachedData = localStorage.getItem(CACHE_KEY);
  return cachedData ? JSON.parse(cachedData) : null;
};

export const saveToCache = (data) => {
  localStorage.setItem(CACHE_KEY, JSON.stringify(data));
};
