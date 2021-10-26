import React from 'react';
const array = [1, 2, 3, 45];

class ImagesContainer extends React.Component {
	render() {
		return (
			<div className="imagesContainer">
				{this.props.imgArray.map((img) => {
					return (
						<img
							className="resultImg"
							src={img.urls.regular}
							key={img.id}
							alt={img.alt_description}
						/>
					);
				})}
			</div>
		);
	}
}

export default ImagesContainer;
