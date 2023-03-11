export const getDogs = async () => {
  const response = await fetch(
    `https://api.unsplash.com/photos/puppies?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );

  return response.json();
};
