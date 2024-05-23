import React from 'react';
import { useLocation } from 'react-router';
import ChannelInfo from '../components/ChannelInfo';
import Playlists from '../components/Playlists';

export default function VideoDetail() {
	const {
		state: { video },
	} = useLocation();
	const { title, channelId, channelTitle, description } = video.snippet;

	return (
		<div>
			<article className='flex md:flex-col lg:flex-row mx-auto p-8 gap-10'>
				<article className='w-2/3'>
					<iframe id='player' type='text/html' width='100%' height='640' src={`http://www.youtube.com/embed/${video.id}`} frameBorder='0' title={`${video.title}`} />
					<section>
						<p>{title}</p>
						<ChannelInfo id={channelId} name={channelTitle} />
						<p>{description}</p>
					</section>
				</article>

				<section className='w-1/3'>
					<Playlists id={channelId} />
				</section>
			</article>
		</div>
	);
}
