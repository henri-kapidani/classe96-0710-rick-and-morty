<script>
import AppSearch from './components/AppSearch.vue';
import CharacterList from './components/CharacterList.vue';
import ResultsMessage from './components/ResultsMessage.vue';
import axios from 'axios';
import { store } from './store';

export default {
	data() {
		return {
			store,
		};
	},
	components: {
		AppSearch,
		CharacterList,
		ResultsMessage,
	},
	created() {
		// qui fare la richiesta all'api
		axios
			.get('https://rickandmortyapi.com/api/character')
			.then(response => (this.store.characterList = response.data.results));
	},
};
</script>

<template>
	<div class="container">
		<h1>Rick and Morty App</h1>

		<main>
			<AppSearch />
			<CharacterList />
			<ResultsMessage />
		</main>
	</div>
</template>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.html {
	font-family: 'Montserrat', sans-serif;
}

.container {
	margin: 0 auto;
	padding: 1rem;
	max-width: 1000px;
}

h1 {
	text-align: center;
}
</style>
