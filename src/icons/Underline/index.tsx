import React from 'react';

const Underline = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...args}>
			<path d="M4 2V7C4 9.20914 5.79086 11 8 11V11C10.2091 11 12 9.20914 12 7V2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
			<path d="M3 15H13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
		</svg>
    )
}

export default Underline;