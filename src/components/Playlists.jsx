import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useApis } from '../context/ApiContext';
import { formatAgo } from '../util/Date';
export default function Playlists({ id }) {
	const { youtube } = useApis();
	const {
		isLoading,
		error,
		data: playLists,
	} = useQuery({
		queryKey: ['playlists', id],
		queryFn: async () => youtube.playLists(id),
	});
	console.log(playLists, id);

	return (
		<>
			{isLoading && <p>Loading...⏳</p>}
			{error && <p>Something is wrong😖</p>}
			{playLists && (
				<ul>
					{playLists.map((list) => (
						<li key={list.id} className='mb-6'>
							<img src={list.snippet.thumbnails.medium.url} alt={list.snippet.title} />
							<p>{list.snippet.title}</p>
							<p>{list.snippet.channelTitle}</p>
							<p>{formatAgo(list.snippet.publishedAt, 'kr')}</p>
						</li>
					))}
				</ul>
			)}
		</>
	);
}
