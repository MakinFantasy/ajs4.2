export default function sortByHeath(characters) {
  characters.sort((a, b) => b.health - a.health);
  return characters;
}
