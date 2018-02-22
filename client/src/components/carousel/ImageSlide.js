import React from 'react';

const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};
	
	return (
		<div className="slide">
			<img className="image" src={url} />
		</div>
	);
}

export default ImageSlide;