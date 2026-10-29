import React, { useState } from 'react';
import cat from '../image/cat.png';

function Imagemanipulation() {

    const [height, setHeight] = useState(200);
    const [marginLeft, setMarginLeft] = useState(0);
    const [angle, setAngle] = useState(0);

    const enhanceHeight = () => {
        setHeight(prevHeight => prevHeight + 10);
    };

    const decreaseHeight = () => {
        setHeight(prevHeight => prevHeight - 10);
    };

    const moveRight = () => {
        setMarginLeft(prevMargin => prevMargin + 10);
    };

    const moveLeft = () => {
        setMarginLeft(prevMargin => prevMargin - 10);
    };

    const rotateRight = () => {
        setAngle(prevAngle => prevAngle + 10);
    };

    const rotateLeft = () => {
        setAngle(prevAngle => prevAngle - 10);
    };

    const resetImage = () => {
        setHeight(200);
        setMarginLeft(0);
        setAngle(0);
    };

    return (
        <div>
            <h2 style={{ color: 'red', backgroundColor: 'black' }}>
                Imagemanipulation
            </h2>

            <div
                style={{
                    border: '2px solid red',
                    height: '400px',
                    width: '400px',
                    marginLeft: '300px',
                    overflow: 'hidden'
                }}
            >
                <img
                    src={cat}
                    height={height}
                    width={200}
                    alt="Cat"
                    style={{
                        marginLeft: `${marginLeft}px`,
                        transform: `rotate(${angle}deg)`
                    }}
                />
            </div>

            <div>
                <button onClick={enhanceHeight}>Enhance Height</button>
                <button onClick={decreaseHeight}>Decrease Height</button>

                <br />

                <button onClick={moveLeft}>Move Left</button>
                <button onClick={moveRight}>Move Right</button>

                <br />

                <button onClick={rotateLeft}>Rotate Left</button>
                <button onClick={rotateRight}>Rotate Right</button>

                <br />

                <button onClick={resetImage}>Reset</button>
            </div>
        </div>
    );
}

export default Imagemanipulation;