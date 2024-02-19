module.exports = baseUrl => (req, res) => {
  const parsedUrl = new URL(req.url, baseUrl);
  const params = {};
  parsedUrl.searchParams.forEach((val, key) => {
    params[key] = val;
  });
  req.pathname = parsedUrl.pathname;
  req.params = params;
};
