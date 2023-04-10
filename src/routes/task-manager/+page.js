export const ssr = false;

export function load() {
	//fetch data from API/database...
	console.log('calling load');

	return {
		appName: 'Task Manager',
		content: 'Bored'
	};
}
