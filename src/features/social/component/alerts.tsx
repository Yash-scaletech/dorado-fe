import { useEffect } from 'react';

import '../style/social.scss';

const POINTER_WITH_FONT_SM = 'cursor--pointer font-size--sm animation';

const createUserBox = (user: any, index: number, isGameInvites: boolean) => (
	<div className='user-box border-radius--sm p--10 mb--10 mr--5' key={index}>
		<div className='flex justify-content--between p--5'>
			<div>
				<p className='font-size--md font--bold'>{user.username}</p>
				<p className='font-size--default'>{user.name}</p>

				<p className='font-size--default'>
					{isGameInvites ? 'HAS INVITED YOU TO JOIN' : 'HAS ACCEPTED YOUR INVITE TO JOIN'}:
				</p>
				<p className='font-size--default color--green'>{user.gamePlace}</p>
			</div>
			{isGameInvites && (
				<div className='flex'>
					<p className={`${POINTER_WITH_FONT_SM} reject mr--10 color--red`}>REJECT</p>
					<p className={`${POINTER_WITH_FONT_SM} accept color--green`}>ACCEPT</p>
				</div>
			)}
		</div>
	</div>
);

const Alerts = () => {
	const users = [
		{ username: 'user1', name: 'Name 1', isFriend: true, gamePlace: 'FLASHPOINT EUROPE' },
		{ username: 'user2', name: 'Name 2', isFriend: true, gamePlace: 'BATTLEGROUNDS USA' },
		{ username: 'user3', name: 'Name 3', isFriend: true, gamePlace: 'FLASHPOINT EUROPE' },
		{ username: 'user4', name: 'Name 4', isFriend: true, gamePlace: 'BATTLEGROUNDS USA' },
		{ username: 'user5', name: 'Name 5', isFriend: true, gamePlace: 'FLASHPOINT EUROPE' },
		{ username: 'user6', name: 'Name 6', isFriend: true, gamePlace: 'BATTLEGROUNDS USA' },
		{ username: 'user7', name: 'Name 7', isFriend: true, gamePlace: 'FLASHPOINT EUROPE' },
		{ username: 'user8', name: 'Name 8', isFriend: true, gamePlace: 'BATTLEGROUNDS USA' },
		{ username: 'user9', name: 'Name 9', isFriend: true, gamePlace: 'FLASHPOINT EUROPE' }
	];

	useEffect(() => {
		console.log('request in');
	}, []);

	return (
		<div>
			<div className='mt--40'>
				<h6 className='mb--20'>GAME INVITES</h6>
				<div className='game user-wrapper overflow--auto mt--20'>
					{users.map((user, index) => createUserBox(user, index, true))}
				</div>
			</div>
			<div className='mt--40'>
				<h6 className='mb--20'>FRIEND UPDATES</h6>
				<div className='outgoing user-wrapper overflow--auto mt--20'>
					{users.map((user, index) => createUserBox(user, index, false))}
				</div>
			</div>
			<div className='mt--40'>
				<h6 className='mb--20'>OTHER ALERTS</h6>
				<div className='outgoing user-wrapper overflow--auto mt--20'>
					{users.map((user, index) => createUserBox(user, index, false))}
				</div>
			</div>
		</div>
	);
};

export default Alerts;
