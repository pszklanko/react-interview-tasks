import { useEffect, useState } from "react";

export default function ImageSlider({ url, limit = 5 }: { url: string, limit?: number }) {
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [errorMsg, setErrorMsg] = useState<string>('');

    async function fetchImages(url: string) {
        try {
            const response = await fetch(url);
            const data = await response.json();

            setImages(data);
        } catch (error: any) {
            console.log(error);
            setErrorMsg(error.message)
        }
    }

    useEffect(() => {
        if (url) {
            fetchImages(url);
        }

    }, [url]);

    return <div></div>
}