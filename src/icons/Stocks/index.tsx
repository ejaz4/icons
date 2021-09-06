import React from 'react';

const Stocks = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...args}>
			<g clip-path="url(#clip0)">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M9.00006 0C8.44778 0 8.00006 0.447715 8.00006 1V6.50957L5.3364 5.55826C4.91854 5.40902 4.45231 5.55298 4.19133 5.91183L0.191327 11.4118C-0.133511 11.8585 -0.0347614 12.4839 0.411891 12.8087C0.858543 13.1336 1.48396 13.0348 1.8088 12.5882L5.36858 7.69347L8.00006 8.63329V15C8.00006 15.5523 8.44778 16 9.00006 16C9.55235 16 10.0001 15.5523 10.0001 15V9.34758L11.6637 9.94174C12.0765 10.0891 12.5371 9.95062 12.8001 9.6L15.8001 5.6C16.1314 5.15817 16.0419 4.53137 15.6001 4.2C15.1582 3.86863 14.5314 3.95817 14.2001 4.4L11.6423 7.81036L10.0001 7.22385V1C10.0001 0.447715 9.55235 0 9.00006 0Z"></path>
				<rect x="1" y="1" width="14" height="14" rx="2" stroke-width="2"></rect>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="16" height="16" transform="matrix(-1 0 0 1 16 0)"></rect>
				</clipPath>
			</defs>
		</svg>
    )
}

export default Stocks;