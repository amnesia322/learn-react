import React from 'react';
import Star from "./Star";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
type RatingProps = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

const Rating = (props: RatingProps) => {
            return (
                <div>
                    <Star selected={props.value >= 1} onClick={props.onClick} value={1}/>
                    <Star selected={props.value >= 2} onClick={props.onClick} value={2}/>
                    <Star selected={props.value >= 3} onClick={props.onClick} value={3}/>
                    <Star selected={props.value >= 4} onClick={props.onClick} value={4}/>
                    <Star selected={props.value >= 5} onClick={props.onClick} value={5}/>
                </div>
            );

};

export default Rating;