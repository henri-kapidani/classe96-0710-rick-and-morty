<script>
export default {
	props: {
		characterData: {
			type: Object,
			default() {
				return {
					name: 'no name',
					image: 'default img url',
					status: 'bo',
					species: 'human',
				};
			},
		},
	},
};
</script>

<template>
	<div class="card">
		<img :src="characterData.image" :alt="characterData.name" />
		<h2>{{ characterData.name }}</h2>
		<div class="status">{{ characterData.status }}</div>
		<div class="species">{{ characterData.species }}</div>
	</div>
</template>

<style lang="scss" scoped>
.card {
	padding: 2rem 1rem;
	border: 2px solid brown;
	text-align: center;
}

img {
	border-radius: 9em;
	max-width: 100%;
}
</style>
