import { useEffect, useState } from "react"

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function handleGenerateRandomColor() {
        const max = 256;

        const r = Math.floor(Math.random() * max);
        const g = Math.floor(Math.random() * max);
        const b = Math.floor(Math.random() * max);

        if (typeOfColor === 'hex') {
            const rgbToHex = '#' + [r, g, b]
                .map(x => x.toString(16).padStart(2, '0')).join('')

            setColor(rgbToHex);
        } else {
            setColor(`rgb(${r},${g},${b})`);
        }
    }

    useEffect(() => {
        handleGenerateRandomColor();
    }, [typeOfColor])
    return <div style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: color
    }}>
        <button onClick={() => setTypeOfColor('hex')}>Generate HEX Color</button>
        <button onClick={() => setTypeOfColor('rgb ')}>Generate RGB Color</button>
        <button onClick={handleGenerateRandomColor}>Generate Random Color</button>
        <h1 style={{
            color: color,
            filter: 'invert(100%)'
        }}>{color}</h1>
    </div>
}