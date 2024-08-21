import React from 'react';

type buttonProps = {
    title: String;
    number: number;
}

const MyButton:React.FC<buttonProps> = ({title, number}) => {
    const handleClick = () => {
        number += 1;
    }

    return (
        <button>{title} {number}</button>
    );
}

export default MyButton;