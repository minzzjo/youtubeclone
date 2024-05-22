import React from 'react';
import { useParams } from 'react-router-dom';
import { useApis } from '../context/ApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';

export default function Videos() {
	const { keyword } = useParams();
	const { youtube } = useApis();

	const {
		isLoading,
		error,
		data: videos,
	} = useQuery({
		queryKey: ['videos', keyword],
		queryFn: async () => youtube.search(keyword),
	});

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{error && <p>Something is wrong...!</p>}
			{videos && (
				<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 gap-y-4'>
					{videos.map((video) => (
						<VideoCard key={video.id} video={video} />
					))}
				</ul>
			)}
		</>
	);
}
