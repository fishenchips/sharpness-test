export const getPuppies = async () => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=puppies&per_page=30&client_id=eGi4t3QUBgwUCYC6O1zg4oQZXU-noHrLL0mHIEWlMGE`
  );

  return response.json();
};
