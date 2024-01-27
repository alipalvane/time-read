function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s/g).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return `Read: ${readingTime} min`;
}

module.exports = {
  calculateReadingTime,
};
