import React from 'react';

const Night = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...args}>
			<g clip-path="url(#clip0)">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C8 6.41828 11.5818 10 16.0001 10L15.1217 11.962C13.7176 14.3766 11.1023 16 8.10782 16C3.62999 16 0 12.37 0 7.89216C0 4.07218 2.44508 0.858654 6.00132 0H8V1V2ZM13.0045 11.5436C8.99272 10.2856 6.06934 6.56784 6.00132 2.15732C3.66599 3.01539 2 5.25921 2 7.89216C2 11.2654 4.73456 14 8.10782 14C10.112 14 11.8908 13.0346 13.0045 11.5436Z"></path>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="16" height="16" transform="matrix(-1 0 0 1 16 0)"></rect>
				</clipPath>
			</defs>
		</svg>
    )
}

export default Night;