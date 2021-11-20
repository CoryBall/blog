import React from 'react';
import {NextPage} from 'next';
import { Post, useMyPostsLazyQuery } from '@blog/types';
import { PostList } from '@blog/web/components/posts/postList';

const PostsPage: NextPage = () => {
    const [fetch, {data, loading}] = useMyPostsLazyQuery();

    React.useEffect(() => {
        fetch();
    }, []);

    if (loading){
        return <div>loading...</div>
    }

    return (
        <div className="flex flex-col mx-auto w-3/4 mt-12">
            <PostList data={data?.myPosts as Post[]} />
        </div>
    )
}

export default PostsPage;