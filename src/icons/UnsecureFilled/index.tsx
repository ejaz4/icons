import React from 'react';

const UnsecureFilled = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" {...args}>
			<path d="M1 15L15 1" stroke="#FF4752" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8764 5.65912C14.5615 6.20894 15 7.05326 15 8V13C15 14.6569 13.6569 16 12 16H4C3.85282 16 3.70812 15.9894 3.56661 15.9689L13.8764 5.65912ZM1 11.4645V8C1 6.42731 2.21016 5.13726 3.75008 5.01026C3.88768 4.99891 4 4.88807 4 4.75V4C4 1.79086 5.79086 0 8 0C9.2228 0 10.3174 0.548691 11.0512 1.4133L9.62736 2.83711C9.26454 2.33028 8.67084 2 8 2C6.89543 2 6 2.89543 6 4V4.75C6 4.88807 6.11193 5 6.25 5H7.46447L1 11.4645Z"></path>
		</svg>
    )
}

export default UnsecureFilled;