<script>
	import JobCard from '../components/JobCard.svelte';
	const Gender = {
		MALE: '남성',
		FEMALE: '여성',
		BOTH: '무관'
	};
	Object.freeze(Gender);

	const jobs = [
		{
			title: '아모레 퍼시픽',
			tags: ['뷰티'],
			thumbnail: '/amore-pacific.jpg',
			ageGroups: ['10대', '20대', '30대 초반'],
			gender: Gender.FEMALE,
			summary: '화장품을 사용하고 얼굴이 보이게 인증샷 & 후기를 작성'
		},
		{
			title: '스포츠 애플리케이션',
			tags: ['앱'],
			thumbnail: '/adidas.png',
			ageGroups: ['20대', '30대 초반'],
			gender: Gender.BOTH,
			summary: '화장품을 사용하고 얼굴이 보이게 인증샷 & 후기를 작성'
		},
		{
			title: '아모레 퍼시픽',
			tags: ['뷰티'],
			thumbnail: '/amore-pacific.jpg',
			ageGroups: ['10대', '20대', '30대 초반'],
			gender: Gender.FEMALE,
			summary: '화장품을 사용하고 얼굴이 보이게 인증샷 & 후기를 작성'
		},
		{
			title: '스포츠 애플리케이션',
			tags: ['앱'],
			thumbnail: '/adidas.png',
			ageGroups: ['20대', '30대 초반'],
			gender: Gender.BOTH,
			summary: '화장품을 사용하고 얼굴이 보이게 인증샷 & 후기를 작성'
		}
	];
</script>

<div class="">
	<header class="sticky top-0 z-50 w-full bg-slate-800 text-white p-2 drop-shadow-xl">
		<!-- <p class="align-middle text-center text-2xl">🌈Rainbowowow</p> -->
		<p class="align-middle text-center text-2xl">🤣FUNction</p>
		<button class="block">더보기</button>
		<div class="absolute right-1 bg-white text-black rounded-lg py-2 w-48 mt-2 shadow-2xl">
			<a href="#" class="block px-4 py-2 text-slate-700 hover:bg-slate-700 hover:text-white"
				>로그인</a
			>
			<a href="#" class="block px-4 py-2 text-slate-700 hover:bg-slate-700 hover:text-white"
				>더보기</a
			>
		</div>
	</header>
	<div class="flex flex-col justify-items-center space-y-3 p-1 mt-1">
		{#each jobs as job}
			<JobCard {job} />
		{/each}
	</div>
</div>
