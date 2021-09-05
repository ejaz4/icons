import React from 'react';

const Qrcode = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" {...args}>
			<rect x="1" y="1" width="5" height="5" rx="2"></rect>
			<rect x="10" y="1" width="5" height="5" rx="2"></rect>
			<rect x="1" y="10" width="5" height="5" rx="2"></rect>
			<rect x="9" y="9" width="3" height="3" rx="1"></rect>
			<rect x="13" y="9" width="3" height="3" rx="1"></rect>
			<rect x="13" y="13" width="3" height="3" rx="1"></rect>
			<rect x="9" y="13" width="3" height="3" rx="1"></rect>
		</svg>
    )
}

export default Qrcode;