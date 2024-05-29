export const fetchNews = async (topic) => {
  const todaysDate = new Date().toLocaleDateString("en-In").split("/");

  const day = todaysDate[0];
  const month = todaysDate[1] -1;
  const year = todaysDate[2];

  const formattedDate = `${year}-${month}-${day}`;

  console.log(formattedDate);

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&from=${formattedDate}&sortBy=publishedAt&apiKey=d9376084d1f642b0abca5dff50ec6d1a`
  );
  const data = await response.json();
  return data.articles;
};
