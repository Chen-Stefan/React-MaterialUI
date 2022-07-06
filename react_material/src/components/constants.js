// 这里的pokemonId是个string, 是mockData里的key

export function toFirstCharUpperCase(name) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}