import React from 'react';

const Tag = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...args}>
			<g clip-path="url(#clip0)">
				<path d="M1.82843 6.58578L4.82843 3.58579C5.2035 3.21071 5.71221 3 6.24264 3H13C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H6.24264C5.71221 13 5.2035 12.7893 4.82843 12.4142L1.82843 9.41421C1.04738 8.63317 1.04738 7.36683 1.82843 6.58578Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="16" height="16" transform="matrix(-1 0 0 1 16 0)"></rect>
				</clipPath>
			</defs>
		</svg>
    )
}

export default Tag;