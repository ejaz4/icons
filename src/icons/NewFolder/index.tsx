import React from 'react';

const NewFolder = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...args}>
			<path d="M0 3C0 1.34315 1.34315 0 3 0H6C7.31297 0 8.42895 0.843466 8.83563 2.01811C9.01632 2.54 9.44772 3 10 3H13C14.6569 3 16 4.34315 16 6C16 6.55228 15.5523 7 15 7C14.4477 7 14 6.55228 14 6C14 5.44772 13.5523 5 13 5H3C2.44771 5 2 5.44772 2 6V13C2 13.5523 2.44772 14 3 14H6C6.55228 14 7 14.4477 7 15C7 15.5523 6.55228 16 6 16H3C1.34315 16 0 14.6569 0 13V3Z"></path>
			<path d="M12 9V12M12 15V12M12 12H9M12 12H15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
		</svg>
    )
}

export default NewFolder;