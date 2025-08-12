// Level 3
// Assume countries_data.js is imported as countriesData

// 1. Sort countries
const sortByName = [...countriesData].sort((a, b) => a.name.localeCompare(b.name))
const sortByCapital = [...countriesData].sort((a, b) => a.capital.localeCompare(b.capital))
const sortByPopulation = [...countriesData].sort((a, b) => b.population - a.population)

// 2. Most spoken languages
const mostSpokenLanguages = (arr, limit) => {
  const langCounts = {}
  arr.forEach(country => {
    country.languages.forEach(lang => {
      langCounts[lang] = (langCounts[lang] || 0) + 1
    })
  })
  return Object.entries(langCounts)
    .map(([language, count]) => ({ country: language, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit)
}

// 3. Most populated countries
const mostPopulatedCountries = (arr, limit) => {
  return arr
    .map(c => ({ country: c.name, population: c.population }))
    .sort((a, b) => b.population - a.population)
    .slice(0, limit)
}

// 4. Statistics object
const statistics = {
  count: () => ages.length,
  sum: () => ages.reduce((a, b) => a + b, 0),
  min: () => Math.min(...ages),
  max: () => Math.max(...ages),
  range: () => statistics.max() - statistics.min(),
  mean: () => Math.round(statistics.sum() / statistics.count()),
  median: () => {
    const sorted = [...ages].sort((a, b) => a - b)
    const mid = Math.floor(sorted.length / 2)
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid]
  },
  mode: () => {
    const freq = {}
    ages.forEach(age => freq[age] = (freq[age] || 0) + 1)
    const maxFreq = Math.max(...Object.values(freq))
    const mode = Object.keys(freq).find(key => freq[key] === maxFreq)
    return { mode: Number(mode), count: maxFreq }
  },
  var: () => {
    const mean = statistics.mean()
    return (ages.reduce((sum, age) => sum + (age - mean) ** 2, 0) / ages.length).toFixed(1)
  },
  std: () => Math.sqrt(statistics.var()).toFixed(1),
  freqDist: () => {
    const freq = {}
    ages.forEach(age => freq[age] = (freq[age] || 0) + 1)
    return Object.entries(freq).map(([age, count]) => [((count / ages.length) * 100).toFixed(1), Number(age)])
  },
  describe: function() {
    return {
      Count: this.count(),
      Sum: this.sum(),
      Min: this.min(),
      Max: this.max(),
      Range: this.range(),
      Mean: this.mean(),
      Median: this.median(),
      Mode: this.mode(),
      Variance: this.var(),
      StandardDeviation: this.std(),
      FrequencyDistribution: this.freqDist()
    }
  }
}
