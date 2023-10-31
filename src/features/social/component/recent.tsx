import { useEffect } from 'react';
import UserBox from './userBox';

import '../style/social.scss';

const Recent = () => {
	useEffect(() => {
		console.log('Recent in');
	}, []);

	const users = [
		{ username: 'user1', name: 'Name 1', isFriend: false },
		{ username: 'user2', name: 'Name 2', isFriend: false },
		{ username: 'user3', name: 'Name 3', isFriend: false },
		{ username: 'user4', name: 'Name 4', isFriend: false },
		{ username: 'user5', name: 'Name 5', isFriend: false },
		{ username: 'user6', name: 'Name 6', isFriend: false },
		{ username: 'user7', name: 'Name 7', isFriend: false },
		{ username: 'user8', name: 'Name 8', isFriend: false },
		{ username: 'user9', name: 'Name 9', isFriend: false },
		{ username: 'user10', name: 'Name 10', isFriend: false },
		{ username: 'user11', name: 'Name 11', isFriend: false },
		{ username: 'user12', name: 'Name 12', isFriend: false },
		{ username: 'user13', name: 'Name 13', isFriend: false },
		{ username: 'user14', name: 'Name 14', isFriend: false },
		{ username: 'user15', name: 'Name 15', isFriend: false }
	];

	return (
		<div className='user-wrapper overflow--auto mt--40'>
			{users.map((user, index) => (
				<UserBox key={index} username={user.username} name={user.name} isFriend={user.isFriend} />
			))}
		</div>
	);
};

export default Recent;
