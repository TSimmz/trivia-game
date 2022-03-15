export const randomizeAnswers = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const replaceHtmlCharacters = (text) => {
  let formattedText = '';

  formattedText = text
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&trade;/g, '™')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '<')
    .replace(/&ldquot;/g, '"');

  return formattedText;
};
