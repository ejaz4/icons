import React from 'react';

const NumberList = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...args}>
			<path d="M6 4C6 3.44772 6.44771 3 7 3H15C15.5523 3 16 3.44772 16 4C16 4.55228 15.5523 5 15 5H7C6.44772 5 6 4.55228 6 4Z"></path>
			<path d="M7 11C6.44771 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H7Z"></path>
			<path d="M1 3.5L2.5 2.5V5.5" stroke-linecap="round" stroke-linejoin="round"></path>
			<path d="M1 10.5H2.75C2.88807 10.5 3 10.6119 3 10.75V11.75C3 11.8881 2.88807 12 2.75 12H1.25C1.11193 12 1 12.1119 1 12.25V13.25C1 13.3881 1.11193 13.5 1.25 13.5H3" stroke-linecap="round" stroke-linejoin="round"></path>
		</svg>
    )
}

export default NumberList;