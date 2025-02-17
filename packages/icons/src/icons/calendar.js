import React, { forwardRef } from 'react';

const Calendar = forwardRef(({ ...rest }, ref) => {
	return (
		<svg
			ref={ref}
			role="img"
			focusable="false"
			viewBox="0 0 23 36"
			fill="#000"
			{...rest}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18.6191 9.41714H21.3572C22.2333 9.41714 23 10.2145 23 11.1257V27.2915C23 28.2027 22.2333 29 21.3572 29H1.64285C0.766667 29 0 28.2027 0 27.2915V11.1257C0 10.2145 0.766667 9.41714 1.64285 9.41714H4.38095V7.13905C4.38095 6.22781 5.14761 6 6.0238 6C6.9 6 7.66667 6.22781 7.66667 7.13905V9.41714H15.3333V7.13905C15.3333 6.22781 16.1 6 16.9761 6C17.8523 6 18.6191 6.22781 18.6191 7.13905V9.41714ZM2.19048 15.1124V26.722H20.8095V15.1124H2.19048Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.66667 27.6412L7.66665 15.1117H8.89529L8.8953 27.6412H7.66667Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.2382 27.6412V15.1117H15.4668V27.6412H14.2382Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.1906 20.1679H20.8097V21.4456H2.1906V20.1679Z"
			/>
		</svg>
	);
});

Calendar.displayName = 'Calendar';

export default Calendar;
