import { Post } from '@blog/types';
import React from 'react';
import { PostCard } from '../postCard';


type PostListProps = {
    data: Post[];
}

const PostList: React.FC<PostListProps> = (props: PostListProps) => {
    const {data} = props;
    return (
        <div className="flex flex-wrap gap-5">
            {data?.map((post: Post) => (
                <PostCard post={post} key={post.id}/>
            ))}
        </div>
    )
}

export default PostList;