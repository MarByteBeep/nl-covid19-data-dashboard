import React, { forwardRef } from 'react';

const Coronavirus = forwardRef(({ ...rest }, ref) => {
	return (
		<svg
			ref={ref}
			role="img"
			focusable="false"
			viewBox="0 0 24 36"
			fill="#000"
			{...rest}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M21.8369 12.5039C22.6325 12.1582 23.5501 12.5533 23.881 13.3887C24.2118 14.22 23.8298 15.1789 23.0224 15.5164C22.4867 15.7509 21.8999 15.6398 21.4706 15.2941L21.4666 15.2982C21.4647 15.2962 21.4617 15.2941 21.4588 15.2921C21.4558 15.29 21.4529 15.288 21.4509 15.2859C21.1279 15.0202 20.9968 14.6856 20.9607 14.5936C20.9554 14.5802 20.9522 14.5719 20.9507 14.5698C20.9192 14.5739 20.8128 14.6069 20.8483 14.7838L21.0649 15.4793L18.1465 16.7592C18.4261 17.928 18.4025 19.1461 18.0598 20.3066L19.5798 21.0939C19.5903 21.0994 19.5973 21.1049 19.6043 21.1104L19.6083 21.1135L19.6152 21.1186C20.0366 20.7606 20.6195 20.6371 21.163 20.8552C21.9704 21.1803 22.3761 22.1269 22.065 22.9705C21.7538 23.8141 20.848 24.238 20.0406 23.9129C19.497 23.6948 19.1426 23.1927 19.0599 22.633H19.0559C19.052 22.6248 19.052 22.6166 19.052 22.6125C18.9924 22.1769 19.1229 21.8357 19.1553 21.7511C19.1593 21.7406 19.1618 21.7341 19.1623 21.7318C19.1347 21.7112 19.0362 21.6618 18.9456 21.8141L18.6424 22.4725L17.4178 21.8046C16.8507 22.7923 16.0551 23.603 15.0901 24.171L16.4765 27.7061C16.4785 27.7122 16.4795 27.7194 16.4804 27.7266C16.4814 27.7338 16.4824 27.741 16.4844 27.7472C17.024 27.8213 17.5123 28.1793 17.7329 28.739C18.0637 29.5703 17.6856 30.5292 16.8861 30.8749C16.0905 31.2206 15.1729 30.8255 14.842 29.9901C14.6175 29.4304 14.7239 28.8172 15.0547 28.3686L15.0508 28.3645C15.0527 28.3625 15.0547 28.3594 15.0567 28.3563L15.0599 28.3513C15.0608 28.3501 15.0617 28.349 15.0626 28.3481C15.3168 28.0106 15.6371 27.8735 15.7251 27.8359C15.738 27.8304 15.7459 27.827 15.7479 27.8254C15.7439 27.7925 15.7124 27.6814 15.5431 27.7184L14.8775 27.9448L13.6447 24.7924C13.0894 24.9529 12.5222 25.0393 11.9551 25.0393C11.4194 25.0393 10.8877 24.9611 10.3639 24.8171L9.61376 26.4402C9.60851 26.4512 9.60326 26.4585 9.59801 26.4658C9.59538 26.4695 9.59275 26.4731 9.59013 26.4773C9.92097 26.9258 10.0234 27.539 9.80281 28.0987C9.47197 28.9341 8.55823 29.3292 7.75871 28.9835C6.95918 28.6378 6.58108 27.6831 6.91192 26.8476C7.13642 26.2838 7.62086 25.9299 8.16044 25.8558V25.8517H8.18013C8.59423 25.7972 8.91609 25.9418 8.99903 25.9791C9.00996 25.984 9.01675 25.9871 9.01904 25.9875C9.03479 25.9628 9.08994 25.86 8.94421 25.7612L8.32192 25.4278L8.90663 24.2245C7.89836 23.6565 7.07127 22.817 6.48442 21.7923L3.15241 23.2286C3.14651 23.2306 3.13961 23.2316 3.13272 23.2327C3.12583 23.2337 3.11894 23.2347 3.11303 23.2368C3.04213 23.8006 2.69948 24.3109 2.16384 24.5414C1.36825 24.887 0.45057 24.492 0.119733 23.6565C-0.211105 22.8252 0.166995 21.8664 0.96652 21.5207C1.50216 21.2861 2.08901 21.3972 2.51831 21.7429L2.52225 21.7388C2.52421 21.7408 2.52716 21.7429 2.5301 21.745C2.53306 21.747 2.53603 21.7491 2.538 21.7511C2.86099 22.0168 2.99213 22.3514 3.02818 22.4434C3.03345 22.4568 3.03669 22.4651 3.03819 22.4672C3.0697 22.4631 3.17604 22.4302 3.1406 22.2532L2.92398 21.5577L5.84244 20.3025C5.49979 19.1297 5.48797 17.9238 5.75185 16.7962L4.08028 16.1065C4.06978 16.101 4.06278 16.0955 4.05577 16.09C4.05227 16.0873 4.04877 16.0845 4.04483 16.0818C3.62341 16.4398 3.0405 16.5633 2.49699 16.3452C1.68958 16.0201 1.28391 15.0735 1.59506 14.2299C1.9062 13.3862 2.81207 12.9623 3.61947 13.2875C4.16299 13.5056 4.51746 14.0076 4.60017 14.5673H4.60411C4.60805 14.5756 4.60805 14.5838 4.60805 14.5879C4.6676 15.0235 4.5371 15.3646 4.50473 15.4492C4.50071 15.4598 4.4982 15.4663 4.49777 15.4686C4.52534 15.4892 4.6238 15.5386 4.71439 15.3863L5.01765 14.7278L6.29931 15.2612C6.85464 14.1583 7.70537 13.2118 8.79241 12.5656L7.48087 9.29394C7.47891 9.28777 7.47792 9.28057 7.47694 9.27337C7.47595 9.26617 7.47497 9.25896 7.473 9.25278C6.93342 9.17871 6.44504 8.82067 6.22448 8.26098C5.89364 7.42968 6.27174 6.4708 7.07127 6.12511C7.86685 5.77942 8.78453 6.17449 9.11537 7.00991C9.33987 7.5696 9.23353 8.18279 8.90269 8.63136L8.90663 8.63548C8.90466 8.63754 8.90269 8.64062 8.90072 8.64371C8.89875 8.64679 8.89678 8.64988 8.89481 8.65194C8.64054 8.98943 8.32032 9.12646 8.23229 9.16412C8.21942 9.16963 8.21151 9.17302 8.2095 9.17459C8.21344 9.20751 8.24495 9.31863 8.41431 9.28159L9.08386 9.05525L10.2379 11.9319C11.4155 11.5903 12.6286 11.615 13.7471 11.9566L14.5446 10.5053C14.5498 10.4943 14.5551 10.487 14.5603 10.4797C14.5629 10.4761 14.5656 10.4724 14.5682 10.4683C14.2374 10.0197 14.135 9.4065 14.3555 8.84681C14.6864 8.01139 15.6001 7.61632 16.3996 7.96201C17.1992 8.3077 17.5773 9.26658 17.2464 10.102C17.0219 10.6658 16.5375 11.0197 15.9979 11.0938V11.0979H15.9782C15.5641 11.1525 15.2423 11.0078 15.1593 10.9705C15.1484 10.9656 15.1416 10.9626 15.1393 10.9621C15.1235 10.9868 15.0684 11.0897 15.2141 11.1885L15.8364 11.5218L15.1847 12.6109C16.1851 13.22 17.0318 14.1089 17.6029 15.2365L20.8483 13.8167C20.8499 13.8162 20.8516 13.8157 20.8533 13.8153L20.8581 13.8142C20.8613 13.8136 20.8647 13.8131 20.868 13.8126C20.8749 13.8116 20.8818 13.8105 20.8877 13.8085C20.9586 13.2447 21.3012 12.7344 21.8369 12.5039ZM9.03212 16.6407C9.6194 16.6407 10.0955 16.1388 10.0955 15.5196C10.0955 14.9004 9.6194 14.3985 9.03212 14.3985C8.44483 14.3985 7.96874 14.9004 7.96874 15.5196C7.96874 16.1388 8.44483 16.6407 9.03212 16.6407ZM15.9388 20.852C15.9388 21.3164 15.5817 21.6928 15.1413 21.6928C14.7008 21.6928 14.3437 21.3164 14.3437 20.852C14.3437 20.3876 14.7008 20.0111 15.1413 20.0111C15.5817 20.0111 15.9388 20.3876 15.9388 20.852ZM15.4071 18.3266C15.9944 18.3266 16.4705 17.8247 16.4705 17.2055C16.4705 16.5863 15.9944 16.0843 15.4071 16.0843C14.8198 16.0843 14.3437 16.5863 14.3437 17.2055C14.3437 17.8247 14.8198 18.3266 15.4071 18.3266ZM9.04818 20.2917C9.04818 20.7561 8.69111 21.1326 8.25065 21.1326C7.81019 21.1326 7.45312 20.7561 7.45312 20.2917C7.45312 19.8274 7.81019 19.4509 8.25065 19.4509C8.69111 19.4509 9.04818 19.8274 9.04818 20.2917ZM13.0319 14.9597C13.4724 14.9597 13.8294 14.5832 13.8294 14.1188C13.8294 13.6544 13.4724 13.278 13.0319 13.278C12.5914 13.278 12.2344 13.6544 12.2344 14.1188C12.2344 14.5832 12.5914 14.9597 13.0319 14.9597ZM13.3151 17.766C13.3151 18.6948 12.601 19.4478 11.7201 19.4478C10.8391 19.4478 10.125 18.6948 10.125 17.766C10.125 16.8372 10.8391 16.0843 11.7201 16.0843C12.601 16.0843 13.3151 16.8372 13.3151 17.766ZM11.9698 23.3794C12.7039 23.3794 13.299 22.7519 13.299 21.9779C13.299 21.204 12.7039 20.5765 11.9698 20.5765C11.2357 20.5765 10.6406 21.204 10.6406 21.9779C10.6406 22.7519 11.2357 23.3794 11.9698 23.3794Z"
			/>
		</svg>
	);
});

Coronavirus.displayName = 'Coronavirus';

export default Coronavirus;
