import React from 'react';

const Underline = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" {...args}>
			<path d="M4 2V7C4 9.20914 5.79086 11 8 11V11C10.2091 11 12 9.20914 12 7V2"></path>
			<path d="M3 15H13"></path>
		</svg>
    )
}

export default Underline;