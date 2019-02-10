export const capitalize = (word) => {
    return word[0].toUpperCase() + word.split('').slice(1).join('')
  }
