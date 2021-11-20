import { Post } from '@blog/types';
import { Chip } from '@blog/components/common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image'

type PostCardProps = {
    post: Post
}

const PostCard: React.FC<PostCardProps> = (props: PostCardProps) => {
    const {post} = props;

    function displayDate(dateString: string, dayIncluded: boolean): string {
        const date = new Date(dateString);
        const months: string[] = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ]
        const month = months[date.getMonth()];
        return `${month} ${dayIncluded ? date.getDate() : ''} ${date.getFullYear()}`;
    }

    return (
        <motion.div
            className="bg-primary py-2 px-4 rounded-md shadow-card w-72 text-light"
            whileHover={{
                y: -10,
                transition: {
                    duration: .2
                }
            }}
        >
            <div className="flex justify-between mb-4">
                <p className="text-secondary font-mono text-2xs">{displayDate(post.publishedAt, true)}</p>
                <div className="flex space-x-1">
                    {post.tags.map(tag => (
                        <Chip text={tag} key={tag} />
                    ))}
                </div>
            </div>
            <h1 className="font-serif text-sm font-bold text-center h-20 px-6">{post.title}</h1>
            <div className="flex justify-around mt-4 px-4 h-12 items-center">
                <p className=" font-mono text-xs"><FontAwesomeIcon className="text-secondary" icon={faEye}/> {post.views}</p>
                <p className=" font-mono text-xs"><FontAwesomeIcon className="text-secondary" icon={faThumbsUp}/> {post.likes}</p>
                <div className="flex">
                    <Image className="rounded-full h-8" src={post.author.image} alt={`${post.author.name} profile image`} height={32} width={32} />
                    <div className="text-2xs font-mono ml-3 self-center">
                        <p>{post.author.name}</p>
                        <p>Joined {displayDate(post.author.createdAt, false)}</p>
                    </div>
                </div>
            </div>
            
        </motion.div>
    )
}

export default PostCard;