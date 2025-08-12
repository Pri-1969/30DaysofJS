// Level 3
// Assume countries_data.js is imported as countriesData

// 1. How many languages are there
const allLanguages = countriesData.reduce((langs, country) => {
  return langs.concat(country.languages)
}, [])

const uniqueLanguages = new Set(allLanguages)
console.log(`Total number of languages: ${uniqueLanguages.size}`)

// 2. Most spoken languages function
const mostSpokenLanguages = (arr, limit) => {
  const langCount = {}
  arr.forEach(country => {
    country.languages.forEach(lang => {
      langCount[lang] = (langCount[lang] || 0) + 1
    })
  })
  return Object.entries(langCount)
    .map(([language, count]) => ({ [language]: count }))
    .sort((a, b) => Object.values(b)[0] - Object.values(a)[0])
    .slice(0, limit)
}

// Example usage:
console.log(mostSpokenLanguages(countriesData, 10))
console.log(mostSpokenLanguages(countriesData, 3))
