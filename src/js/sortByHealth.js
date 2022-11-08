export default function sortByHeath (characters) {
	const collection = collect(characters);
	const sorted = collection.sortByDesc('health');
	return sorted.all();
}