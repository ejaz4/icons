import React from 'react';

const Preferences = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" {...args}>
			<rect y="1" width="16" height="2" rx="1"></rect>
			<rect x="9" width="4" height="4" rx="2"></rect>
			<rect y="7" width="16" height="2" rx="1"></rect>
			<rect x="3" y="6" width="4" height="4" rx="2"></rect>
			<rect y="13" width="16" height="2" rx="1"></rect>
			<rect x="9" y="12" width="4" height="4" rx="2"></rect>
		</svg>
    )
}

export default Preferences;