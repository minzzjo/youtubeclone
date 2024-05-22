import React, { useEffect, useState } from 'react';
import { IoLogoYoutube, IoSearchOutline } from 'react-icons/io5';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
	const navigate = useNavigate();
	const { keyword } = useParams();
	const [text, setText] = useState('');

	const handleChange = (e) => setText(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/videos/${text}`);
	};

	useEffect(() => setText(keyword || ''), [keyword]);

	return (
		<header className='py-4 bg-zinc-900 flex items-center justify-center'>
			<section className='inline-flex flex-row items-center'>
				<Link to='/' className='flex flex-row items-center'>
					<IoLogoYoutube className='text-ytRed text-4xl' />
					<p className='text-white text-2xl font-semibold'>Youtube</p>
				</Link>
				<form onSubmit={handleSubmit} className='inline-flex'>
					<input
						type='text'
						name='text'
						value={text}
						onChange={handleChange}
						className='px-3 ml-4 rounded-tl-md rounded-bl-md text-black sm:w-80 md:w-120 lg:w-200 xl:w-280'
						id='text'
						placeholder='Search...'
					/>
					<button className='w-16 h-8 pl-5 bg-gray-700 text-white text-xl rounded-tr-md rounded-br-md'>
						<IoSearchOutline />
					</button>
				</form>
			</section>
		</header>
	);
}
