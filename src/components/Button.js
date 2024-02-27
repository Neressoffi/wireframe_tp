import React from 'react';

function Button(props) {
	const {action, label = 'Suivant', showSvg = true} = props;

	return (
		<div className="flex w-full py-8 fixed bottom-0 z-100 bg-white">
			<button onClick={action}
				className="bg-red-200 cursor-pointer border-none text-red-500 font-semibold text-2xl w-full rounded-xl flex gap-2 items-center justify-center py-3">
				<span>
					{label}
				</span>
				{showSvg ? (
					<span className="flex">
						<svg className="text-red-500" width="19" height="19" viewBox="0 0 19 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.5625 15.875L18 8.4375L10.5625 1M18 8.4375H1H18Z" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</span>
				) : (<div></div>)}
			</button>
		</div>
	);
}

export default Button;
