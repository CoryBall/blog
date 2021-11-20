import React from 'react';


type PostViewProps = {
    id: string;
}

const PostView: React.FC<PostViewProps> = (props: PostViewProps) => {
    const {id} = props;

    return (
        <article>

        </article>
    )
}

export default PostView;