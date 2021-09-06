import React from 'react';

const Phone = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...args}>
			<g clip-path="url(#clip0)">
				<path d="M7 12C7 12.5523 7.44771 13 8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44771 11 7 11.4477 7 12Z"></path>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C12.6569 0 14 1.34315 14 3V13C14 14.6569 12.6569 16 11 16H5C3.34315 16 2 14.6569 2 13V3C2 1.34315 3.34315 0 5 0H11ZM12 13V3C12 2.44772 11.5523 2 11 2H5C4.44772 2 4 2.44772 4 3V13C4 13.5523 4.44772 14 5 14H11C11.5523 14 12 13.5523 12 13Z"></path>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="16" height="16" transform="matrix(-1 0 0 1 16 0)"></rect>
				</clipPath>
			</defs>
		</svg>
    )
}

export default Phone;