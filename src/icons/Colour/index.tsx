import React from 'react';

const Colour = (args: any) => {
    return (
		<svg width="16" height="16" viewBox="0 0 16 16" {...args}>
			<g clip-path="url(#clip0)">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M6.70711 0.292893C6.31658 -0.0976311 5.68342 -0.0976311 5.29289 0.292893C4.90237 0.683417 4.90237 1.31658 5.29289 1.70711L7.56618 3.98039L0.287348 11.3748C0.103207 11.5618 0 11.8138 0 12.0763V15C0 15.5523 0.447715 16 1 16H3.92373C4.18621 16 4.43818 15.8968 4.62524 15.7127L12.0196 8.43382L14.2929 10.7071C14.6834 11.0976 15.3166 11.0976 15.7071 10.7071C16.0976 10.3166 16.0976 9.68342 15.7071 9.29289L13.4571 7.04289L14.5858 5.91421C15.3668 5.13316 15.3668 3.86684 14.5858 3.08579L12.9142 1.41421C12.1332 0.633165 10.8668 0.633164 10.0858 1.41421L8.95711 2.54289L6.70711 0.292893ZM8.24924 6.24924C8.664 5.83533 9.33566 5.83566 9.75 6.25C10.1643 6.66434 10.1647 7.336 9.75076 7.75076L3.8277 13.6858C3.62694 13.887 3.3544 14 3.07019 14C2.47914 14 2 13.5209 2 12.9298C2 12.6456 2.11305 12.3731 2.31422 12.1723L8.24924 6.24924Z"></path>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="16" height="16"></rect>
				</clipPath>
			</defs>
		</svg>
    )
}

export default Colour;