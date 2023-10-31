import { useEffect } from 'react';

import '../style/social.scss';

const POINTER_WITH_FONT_SM = 'cursor--pointer font-size--sm animation';

const createUserBox = (user: any, index: number, isOutgoing: boolean) => (
	<div className='user-box border-radius--sm p--10 mb--10 mr--5' key={index}>
		<div className='flex justify-content--between p--5'>
			<div>
				<p className='font-size--md font--bold'>{user.username}</p>
				<p className='font-size--default'>{user.name}</p>
				{isOutgoing && <p className='font-size--default color--red'>EXPIRES: {user.expires} DAYS</p>}
			</div>
			{!isOutgoing && (
				<div className='flex'>
					<p className={`${POINTER_WITH_FONT_SM} reject mr--10 color--red`}>REJECT</p>
					<p className={`${POINTER_WITH_FONT_SM} accept color--green`}>ACCEPT</p>
				</div>
			)}
			{isOutgoing && <p className={`${POINTER_WITH_FONT_SM} color--red`}>DELETE</p>}
		</div>
		<div className='flex justify-content--between p--5'>
			<p className={POINTER_WITH_FONT_SM}>PLAYER PROFILE</p>
			<p className={POINTER_WITH_FONT_SM}>BLOCK PLAYER</p>
			<p className={POINTER_WITH_FONT_SM}>MESSAGE PLAYER</p>
		</div>
	</div>
);

const Request = () => {
	const users = [
		{ username: 'user1', name: 'Name 1', isFriend: true, expires: '30' },
		{ username: 'user2', name: 'Name 2', isFriend: true, expires: '30' },
		{ username: 'user3', name: 'Name 3', isFriend: true, expires: '30' },
		{ username: 'user4', name: 'Name 4', isFriend: true, expires: '30' },
		{ username: 'user5', name: 'Name 5', isFriend: true, expires: '30' },
		{ username: 'user6', name: 'Name 6', isFriend: true, expires: '30' },
		{ username: 'user7', name: 'Name 7', isFriend: true, expires: '30' },
		{ username: 'user8', name: 'Name 8', isFriend: true, expires: '30' },
		{ username: 'user9', name: 'Name 9', isFriend: true, expires: '30' }
	];

	useEffect(() => {
		console.log('request in');
	}, []);

	return (
		<div>
			<div className='mt--40'>
				<h6 className='mb--20'>INCOMING REQUEST</h6>
				<div className='incoming user-wrapper overflow--auto mt--20'>
					{users.map((user, index) => createUserBox(user, index, false))}
				</div>
			</div>
			<div className='mt--40'>
				<h6 className='mb--20'>OUTGOING REQUEST</h6>
				<div className='outgoing user-wrapper overflow--auto mt--20'>
					{users.map((user, index) => createUserBox(user, index, true))}
				</div>
			</div>
		</div>
	);
};

export default Request;
