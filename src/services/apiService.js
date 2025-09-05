// Service for API calls
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
  }
  module.exports = { fetchData };