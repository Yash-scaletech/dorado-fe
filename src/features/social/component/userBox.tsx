import React from 'react';

interface IProps {
	username: string;
	name: string;
	isFriend: boolean;
}

const POINTER_WITH_FONT_SM = 'cursor--pointer font-size--sm animation';

const UserBox: React.FC<IProps> = (props) => {
	const { username, name, isFriend } = props;

	return (
		<div className='user-box border-radius--sm p--10 mb--10 mr--5'>
			<div className='flex justify-content--between p--5'>
				<div>
					<p className='font-size--default'>{username}</p>
					<p className='font-size--default'>{name}</p>
				</div>
				{isFriend && <p className={POINTER_WITH_FONT_SM}>MESSAGE PLAYER</p>}
				{!isFriend && <p className={POINTER_WITH_FONT_SM}>ADD FRIEND</p>}
			</div>
			<div className='flex justify-content--between p--5'>
				<p className={POINTER_WITH_FONT_SM}>PLAYER PROFILE</p>
				<p className={POINTER_WITH_FONT_SM}>BLOCK PLAYER</p>
				{isFriend && <p className={POINTER_WITH_FONT_SM}>REMOVE FRIEND</p>}
				{!isFriend && <p className={POINTER_WITH_FONT_SM}>MESSAGE PLAYER</p>}
			</div>
		</div>
	);
};

export default UserBox;
