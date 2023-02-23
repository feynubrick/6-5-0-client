<script>
	export let form;
	export let data;
	const user = data.user;
</script>

<div class="container h-full px-6 py-12">
	<div class="flex justify-center items-center flex-wrap h-full gap-6">
		<div class="w-full px-10">
			{#if user}
				<p>환영합니다! {user.email}님!</p>
			{:else}
				<form method="post" action="?/login">
					{#if form?.missing}
						<p class="text-red-500 text-sm">뭔가 안보내셨네요...? 확인해주세요!</p>
					{/if}
					{#if form?.incorrect}
						<p class="text-red-500">Invalid credentials!</p>
					{/if}
					<!-- ID -->
					<div class="mb-6">
						<label for="email">Email</label>
						<input
							name="email"
							type="email"
							placeholder="email"
							class="block w-full border border-solid border-gray-300 rounded transition ease-in-out text-xl font-normal bg-clip-padding p-1 pl-3"
						/>
					</div>
					<!-- PW -->
					<div class="mb-6">
						<label for="password">Password</label>
						<input
							name="password"
							type="password"
							placeholder="password"
							class="block w-full border border-solid border-gray-300 rounded transition ease-in-out text-xl font-normal bg-clip-padding p-1 pl-3"
						/>
					</div>
					<button
						type="submit"
						class="inline-block px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md bg-slate-600 ease-in-out w-full"
						>Sign In</button
					>
				</form>
			{/if}
		</div>
	</div>
</div>
