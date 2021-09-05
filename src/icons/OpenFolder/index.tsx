import React from 'react';

const OpenFolder = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" {...args}>
			<rect width="2" height="8" rx="1" transform="matrix(1 0 0 -1 7 16)"></rect>
			<path d="M5 10L8 7L11 10"></path>
			<path d="M0 3C0 1.34315 1.34315 0 3 0H6C7.31297 0 8.42895 0.843466 8.83563 2.01811C9.01632 2.54 9.44772 3 10 3H13C14.6569 3 16 4.34315 16 6V13C16 14.6569 14.6569 16 13 16C12.4477 16 12 15.5523 12 15C12 14.4477 12.4477 14 13 14C13.5523 14 14 13.5523 14 13V6C14 5.44772 13.5523 5 13 5H3C2.44771 5 2 5.44772 2 6V13C2 13.5523 2.44772 14 3 14C3.55228 14 4 14.4477 4 15C4 15.5523 3.55228 16 3 16C1.34315 16 0 14.6569 0 13V3Z"></path>
		</svg>
    )
}

export default OpenFolder;