import React, { forwardRef } from 'react';

const BinnenMetZitplaats = forwardRef(({ ...rest }, ref) => {
	return (
		<svg ref={ref} width={37} height={36} fill="none" {...rest}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="m18.367 6.129 11.404 10.79a.982.982 0 0 1 .311.718v.721a.484.484 0 0 1-.481.486h-1.927V29H8.407V18.844H6.481A.484.484 0 0 1 6 18.358v-.72c0-.274.113-.533.311-.718L17.715 6.129a.477.477 0 0 1 .652 0Zm-2.313 8.392c.14.876-.277 1.563-1.166 1.7-.89.134-1.49-.321-1.642-1.27-.144-.9.246-1.609 1.159-1.747.866-.134 1.489.32 1.649 1.317Zm3.46 5.405c1.124-.369 1.414-.395 2.197.494 1.535 1.781 2.685 3.646 2.99 4.14l.055.088-.017.012-.027.02c-.255.192-.753.566-1.79-.296-.116-.096-.26-.23-.26-.23s-.841-1.77-1.084-2.314c-.038-.087-.11-.08-.124-.06l1.154 5.834c-.281.058-1.303.18-1.708-1.08-.406-1.26-1.1-3.58-1.1-3.58s-2.38.484-3.085.608c-.972.174-1.69-.27-1.892-.95a56.457 56.457 0 0 1-1.03-4.16c-.376-1.867 2.23-2.535 2.915-.513a51 51 0 0 0 .925 2.72c.617-.262 1.27-.527 1.88-.732Zm-.616 3.765-.032.007c-.178.034-1.066.209-2.246.424-1.118.207-2.115-.385-2.367-1.405l-.906-3.67a.45.45 0 0 0-.545-.318.44.44 0 0 0-.321.534l.906 3.668c.169.682.56 1.23 1.086 1.602l-1.02 3.111h.94l.89-2.718c.28.084.577.13.887.13.2 0 .403-.018.61-.055l.104-.02c.07-.013.139-.025.206-.039l1.078 2.702h.96l-1.144-2.869c.667-.125 1.088-.208 1.088-.208a.447.447 0 0 0-.174-.876Z"
				fill="#000"
			/>
		</svg>
	);
});

BinnenMetZitplaats.displayName = 'BinnenMetZitplaats';

export default BinnenMetZitplaats;
