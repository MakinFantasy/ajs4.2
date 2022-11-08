export default function sortByHeath (characters) {
	characters.sort( function(a, b) {
		return b.health - a.health
	} );
	return characters;
}