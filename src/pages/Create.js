import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';


export default function Create() {
	const [ title, setTitle ] = useState('');
	const [ body, setBody ] = useState('');
	const [ author, setAuthor ] = useState('Patrycja');
	const [ isLoading, setIsLoading ] = useState(false);

	const navigate = useNavigate('/')

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, author, body };
		console.log(blog);

		setIsLoading(true);

		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog)
		}).then(() => {
			console.log('new blog added');
			setIsLoading(false);
			navigate('/')
		});
	};
	return (
		<div className="create">
			<h2>Add a New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
				<label>Blog body:</label>
				<textarea  rows='10' required value={body} onChange={(e) => setBody(e.target.value)} />
				<label>Blog author:</label>
				<select>
					<option value={author} onChange={(e) => setAuthor(e.target.value)}>
						Patrycja
					</option>
				</select>
				{!isLoading && <button>Add Blog</button>}
				{isLoading && <button disabled>Adding Blog...</button>}
			</form>
		</div>
	);
}
