<script>
import { store } from '../store';

export default {
	data() {
		return {
			// searchStr: '',
			// searchStatus: '',
			store,
			statuses: ['alive', 'dead', 'unknown'],
		};
	},
	methods: {
		// emitSearchEvent() {
		// 	this.$emit('performSearch', {
		// 		searchStr: this.searchStr,
		// 		status: this.searchStatus,
		// 	});
		// },
		emitSearchEvent() {
			this.$emit('performSearch');
		},
	},
};
</script>

<template>
	<div class="search-bar">
		<input
			type="text"
			placeholder="Search character"
			v-model="store.searchStr"
			@keyup.enter="emitSearchEvent"
		/>
		<select v-model="store.searchStatus" @change="emitSearchEvent">
			<option value="">Select status</option>
			<option v-for="status in statuses" :key="status" :value="status">
				{{ status }}
			</option>
		</select>
		<button @click="emitSearchEvent">Search</button>
		<button>Reset</button>
	</div>
</template>

<style lang="scss" scoped>
.search-bar {
	display: flex;
	justify-content: center;
	gap: 1rem;
	padding: 1.5rem 0;
}
</style>
