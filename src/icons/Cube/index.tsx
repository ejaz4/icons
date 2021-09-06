import React from 'react';

const Cube = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...args}>
			<path d="M3.00772 4.00449L7.00772 1.71878C7.62259 1.36742 8.37741 1.36742 8.99228 1.71877L12.9923 4.00449C13.6154 4.36057 14 5.02326 14 5.74097V10.259C14 10.9768 13.6154 11.6394 12.9923 11.9955L8.99228 14.2812C8.37741 14.6326 7.62259 14.6326 7.00772 14.2812L3.00772 11.9955C2.38457 11.6394 2 10.9768 2 10.259V5.74098C2 5.02326 2.38457 4.36057 3.00772 4.00449Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
		</svg>
    )
}

export default Cube;