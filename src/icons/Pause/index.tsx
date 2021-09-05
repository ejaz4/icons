import React from 'react';

const Pause = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" {...args}>
			<rect x="4" y="1" width="2" height="14" rx="1"></rect>
			<rect x="10" y="1" width="2" height="14" rx="1"></rect>
		</svg>
    )
}

export default Pause;