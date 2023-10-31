import { useState } from 'react';
import Friends from '../component/friends';
import Recent from '../component/recent';
import Request from '../component/request';
import Alerts from '../component/alerts';

export const Social = () => {
	const [activeTab, setActiveTab] = useState('FRIENDS');

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	const tabs = ['FRIENDS', 'RECENT', 'REQUESTS', 'ALERTS'];

	return (
		<div className='social-container m--0-auto pt--25 pl--10 pr--10'>
			<h5 className='text--center'>SOCIAL FRIENDS LOBBY</h5>
			<div className='flex justify-content--between mt--40'>
				{tabs.map((tab) => (
					<p
						key={tab}
						className={`cursor--pointer ${activeTab === tab ? 'active' : ''}`}
						onClick={() => handleTabClick(tab)}
					>
						{tab.charAt(0).toUpperCase() + tab.slice(1)}
					</p>
				))}
			</div>
			{activeTab === 'FRIENDS' && <Friends />}
			{activeTab === 'RECENT' && <Recent />}
			{activeTab === 'REQUESTS' && <Request />}
			{activeTab === 'ALERTS' && <Alerts />}
		</div>
	);
};

export default Social;
