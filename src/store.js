import { reactive } from 'vue';

export const store = reactive({
	characterList: [],
	searchStr: '',
	searchStatus: '',
});
