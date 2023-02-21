import { Gender } from './constants.js';

const data = {
	jobs: [
		{
			id: 'AHBHAIHDSF',
			title: '아모레 퍼시픽',
			tags: ['뷰티'],
			thumbnail: '/amore-pacific.jpg',
			ageGroups: ['10대', '20대', '30대 초반'],
			gender: Gender.FEMALE,
			summary: '화장품을 사용하고 얼굴이 보이게 인증샷 & 후기를 작성'
		},
		{
			id: 'POAJBOZXCD',
			title: '스포츠 애플리케이션',
			tags: ['앱'],
			thumbnail: '/adidas.png',
			ageGroups: ['20대', '30대 초반'],
			gender: Gender.BOTH,
			summary: '화장품을 사용하고 얼굴이 보이게 인증샷 & 후기를 작성'
		},
		{
			id: 'MZXCNVJKJS',
			title: '아모레 퍼시픽',
			tags: ['뷰티'],
			thumbnail: '/amore-pacific.jpg',
			ageGroups: ['10대', '20대', '30대 초반'],
			gender: Gender.FEMALE,
			summary: '화장품을 사용하고 얼굴이 보이게 인증샷 & 후기를 작성'
		},
		{
			id: 'APSDGJFIOB',
			title: '스포츠 애플리케이션',
			tags: ['앱'],
			thumbnail: '/adidas.png',
			ageGroups: ['20대', '30대 초반'],
			gender: Gender.BOTH,
			summary: '화장품을 사용하고 얼굴이 보이게 인증샷 & 후기를 작성'
		}
	],
	users: [
		{
			id: 1,
			email: 'abc@email.com',
			password: 'hashedpassword',
			type: 'admin',
			session: ''
		}
	]
};

export const getJobList = async function () {
	return data.jobs;
};

export const getJob = async function (jobId) {
	for (let job of data.jobs) {
		if (job.id === jobId) {
			return job;
		}
	}
	return null;
};

export const getUser = async function (email) {
	for (let user of data.users) {
		if (user.email === email) {
			return user;
		}
	}
	return null;
};

export const updateUserSession = async function (userId, session) {
	const userIndex = data.users.findIndex((user) => user.id === userId);
	data.users[userIndex].session = session;
	return data.users[userIndex];
};

export const createSession = async function (user) {
	const sessionid = `${user.id}${new Date()}`;
	const updatedUser = await updateUserSession(user.id, sessionid);
	return sessionid;
};

export default data;
