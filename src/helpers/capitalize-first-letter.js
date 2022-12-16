/**
 * Capitalize first letter(s)
 * @param {string} word 
 * @returns capitalized word(s)
 */
 export default function capitalize(word) {
    if (word === null) {
      return null
    }
    const words = word.split(" ");

    const capitalizeWords = words.map(capitalizeFirstLetters);
    function capitalizeFirstLetters(element) {
      return element.charAt(0).toLocaleUpperCase() + element.slice(1).toLowerCase()
    }

    const capitalizedWord = capitalizeWords.join(" ");
    return capitalizedWord;
};