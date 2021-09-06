import React from 'react';

const Grid = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...args}>
			<rect width="4" height="4" rx="2"></rect>
			<rect x="6" width="4" height="4" rx="2"></rect>
			<rect x="12" width="4" height="4" rx="2"></rect>
			<rect y="6" width="4" height="4" rx="2"></rect>
			<rect x="6" y="6" width="4" height="4" rx="2"></rect>
			<rect x="12" y="6" width="4" height="4" rx="2"></rect>
			<rect y="12" width="4" height="4" rx="2"></rect>
			<rect x="6" y="12" width="4" height="4" rx="2"></rect>
			<rect x="12" y="12" width="4" height="4" rx="2"></rect>
		</svg>
    )
}

export default Grid;