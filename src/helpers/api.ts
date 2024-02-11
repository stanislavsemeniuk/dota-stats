export const fetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export const apiUrl = 'https://api.opendota.com/api';
