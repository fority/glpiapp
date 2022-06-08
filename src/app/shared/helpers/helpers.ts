function isEmpty(str: string | any[] | undefined) {
	return !str || 0 === str.length;
}
function isBlank(str: string) {
	return !str || /^\s*$/.test(str);
}
export { isEmpty as StrisEmpty, isBlank as StrisBlank };
