import React from 'react';
import Header from '../components/common/Header';
import PostsListTemplate from '../components/template/PostsListTemplate';
import {PostsInputContainer} from '../containers/PostsInputContainer';
import PostsListContainer from '../containers/PostsListContainer';

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<PostsListTemplate form={<PostsInputContainer />}>
				<PostsListContainer />
			</PostsListTemplate>
		</>
	);
};

export default Home;
