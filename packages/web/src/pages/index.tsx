import React from 'react';
import {NextPage} from 'next';
import { Post, useAllPostsQuery } from '@blog/types';
import { PostList } from '@blog/web/components/posts/postList';

const HomePage: NextPage = () => {
    const {data, loading} = useAllPostsQuery();

    if (loading){
        return <div>loading...</div>
    }

    return (
        <div className="flex flex-col mx-auto w-3/4 mt-12">
            <PostList data={data?.allPosts as Post[]} />
        </div>
    )
}

export default HomePage;