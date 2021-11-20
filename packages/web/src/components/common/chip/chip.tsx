import React from 'react';

type ChipProps = {
    text: string
}

const Chip: React.FC<ChipProps> = (props: ChipProps) => {
    const { text } = props;
    return (
        <div className="rounded-md text-2xs border-1 px-1 border-secondary">
            <p>{text}</p>
        </div>
    )
}

export default Chip;