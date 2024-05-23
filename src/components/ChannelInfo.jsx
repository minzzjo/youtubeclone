import React from 'react';
import { useApis } from '../context/ApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ id, name }) {
	const { youtube } = useApis();
	const { data: url } = useQuery({
		queryKey: ['channels', id],
		queryFn: () => youtube.channelImageURL(id),
	});
	return (
		<div>
			{url && <img src={url} alt={name} />}
			<p>{name}</p>
		</div>
	);
}
