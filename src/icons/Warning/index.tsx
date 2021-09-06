import React from 'react';

const Warning = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" {...args}>
			<g clip-path="url(#clip0)">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M6.67432 1.50404L0.165674 13.7981C-0.363209 14.7971 0.360995 16 1.49136 16H14.5086C15.639 16 16.3632 14.7971 15.8343 13.7981L9.32568 1.50404C8.76227 0.439814 7.23773 0.439817 6.67432 1.50404ZM7 5.99998C7 5.44769 7.44771 4.99998 8 4.99998C8.55228 4.99998 9 5.44769 9 5.99998V8.99998C9 9.55226 8.55228 9.99998 8 9.99998C7.44771 9.99998 7 9.55226 7 8.99998V5.99998ZM7 13C7 12.4477 7.44771 12 8 12C8.55228 12 9 12.4477 9 13C9 13.5523 8.55228 14 8 14C7.44771 14 7 13.5523 7 13Z"></path>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="16" height="16"></rect>
				</clipPath>
			</defs>
		</svg>
    )
}

export default Warning;