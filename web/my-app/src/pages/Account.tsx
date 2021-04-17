import React from 'react';
import MyHeader from '../components/common/MyHeader';
import {AccountTemplate} from '../components/template/AccountTemplate';
import {AccountFormContainer} from '../containers/AccountFormContainer';

const Account = () => {
	return (
		<>
			<MyHeader />
			<AccountTemplate>
				<AccountFormContainer />
			</AccountTemplate>
		</>
	);
};

export default Account;
