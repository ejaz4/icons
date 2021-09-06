import React from 'react';

const Avatar = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" {...args}>
			<path d="M10 6C10 7.10457 9.10457 8 8 8C6.89543 8 6 7.10457 6 6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6Z"></path>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M9.45618 15.8678C13.1792 15.1831 16 11.921 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.921 2.82082 15.1831 6.54382 15.8678C6.84774 15.9539 7.16849 16 7.5 16H8.5C8.83151 16 9.15226 15.9539 9.45618 15.8678ZM11.9999 12.4723C13.2275 11.3737 14 9.77705 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 9.77705 2.77255 11.3737 4.00011 12.4723C4.01499 10.5521 5.57624 9 7.5 9H8.5C10.4238 9 11.985 10.5521 11.9999 12.4723Z"></path>
		</svg>
    )
}

export default Avatar;