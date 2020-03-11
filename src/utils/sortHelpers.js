
export const sortAlphabetically = arr => [...arr].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
export const sortAlphabeticallyReverse = arr => [...arr].sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()))
