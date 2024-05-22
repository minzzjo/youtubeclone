import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/Date';

export default function VideoCard({ video }) {
	const navigate = useNavigate();
	const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

	return (
		<li onClick={() => navigate(`videos/watch/${video.id}`)} className='cursor-pointer'>
			<img className='w-full' src={thumbnails.medium.url} alt={title} />
			<article>
				<p className='line-clamp-2'>{title}</p>
				<p className='text-sm opacity-80'>{channelTitle}</p>
				<p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
			</article>
		</li>
	);
}
