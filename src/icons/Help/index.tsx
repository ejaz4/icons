import React from 'react';

const Help = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" {...args}>
			<circle cx="8" cy="12" r="1"></circle>
			<circle cx="8" cy="8" r="7"></circle>
			<path d="M8 3C9.65685 3 11 4.34315 11 6C11 7.24589 10.2405 8.31439 9.15928 8.7678C9.06494 8.80737 9 8.89769 9 9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9V8C7 7.44772 7.44772 7 8 7C8.55228 7 9 6.55228 9 6C9 5.44772 8.55228 5 8 5H7C6.44772 5 6 4.55228 6 4C6 3.44772 6.44772 3 7 3H8Z"></path>
		</svg>
    )
}

export default Help;