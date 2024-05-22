import React from 'react';
import { useLocation } from 'react-router';

export default function VideoDetail() {
	// FIXME: useLocation에서 state가 계속 null값으로 나옴
	const {
		state: { videos },
	} = useLocation();
	const { title, channelId, channelTitle, description } = videos.snippet;

	return (
		<div>
			<article>
				<iframe id='player' type='text/html' width='100%' height='640' src={`http://www.youtube.com/embed/${videos.id}`} frameborder='0' title={`${videos.title}`} />
				<section>
					<p>{title}</p>
					<p>{channelTitle}</p>
					<p>{description}</p>
				</section>
			</article>
		</div>
	);
}
