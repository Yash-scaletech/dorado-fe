import { useEffect } from 'react';
import UserBox from './userBox';

import '../style/social.scss';

const Friends = () => {
	useEffect(() => {
		console.log('Friends in');
	}, []);

	const users = [
		{ username: 'user1', name: 'Name 1', isFriend: true },
		{ username: 'user2', name: 'Name 2', isFriend: true },
		{ username: 'user3', name: 'Name 3', isFriend: true },
		{ username: 'user4', name: 'Name 4', isFriend: true },
		{ username: 'user5', name: 'Name 5', isFriend: true },
		{ username: 'user6', name: 'Name 6', isFriend: true },
		{ username: 'user7', name: 'Name 7', isFriend: true },
		{ username: 'user8', name: 'Name 8', isFriend: true },
		{ username: 'user9', name: 'Name 9', isFriend: true },
		{ username: 'user10', name: 'Name 10', isFriend: true },
		{ username: 'user11', name: 'Name 11', isFriend: true },
		{ username: 'user12', name: 'Name 12', isFriend: true },
		{ username: 'user13', name: 'Name 13', isFriend: true },
		{ username: 'user14', name: 'Name 14', isFriend: true },
		{ username: 'user15', name: 'Name 15', isFriend: true }
	];

	return (
		<div className='mt--40'>
			<div className='p--10'>
				<input
					type='text'
					placeholder='ENTER USERNAME...'
					className='width--full p--5'
					onChange={(e) => console.log(e.target.value)}
				/>
			</div>
			<div className='user-wrapper overflow--auto mt--20'>
				{users.map((user, index) => (
					<UserBox key={index} username={user.username} name={user.name} isFriend={user.isFriend} />
				))}
			</div>
		</div>
	);
};

export default Friends;
