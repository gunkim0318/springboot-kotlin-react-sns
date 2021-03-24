import {Button} from '@material-ui/core';
import React, {ReactNode} from 'react';

type DefaultButtonProps = {
	children: ReactNode;
	onSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const DefaultButton = ({children, onSubmit}: DefaultButtonProps) => {
	const test = '1';
	return (
		<Button
			variant='outlined'
			color='primary'
			fullWidth={true}
			onClick={onSubmit}
		>
			{children}
		</Button>
	);
};
