import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './styles.css';

export default function ImageSlider({ url, limit = 5, page = 1 }: { url: string, limit?: number, page?: number }) {
    const [images, setImages] = useState<{ id: number, author: string, download_url: string, height: number, url: string, width: number }[]>([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    async function fetchImages(url: string) {
        setLoading(true);
        try {
            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();

            setLoading(false);
            setImages(data);
        } catch (error: any) {
            setLoading(false);
            setErrorMsg(error.message)
        }
    }

    useEffect(() => {
        if (url) {
            fetchImages(url);
        }

    }, [url]);

    function handleNext() {
        setCurrentImage(currentImage + 1)
    }

    function handlePrevious() {
        setCurrentImage(currentImage - 1)
    }

    function changeActive(index: number) {
        setCurrentImage(index);
    }

    if (loading) {
        return <div>Loading...</div>
    }
    if (errorMsg) {
        return <div>{errorMsg}</div>
    }
    return <div className="container">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrevious}></BsArrowLeftCircleFill>
        <div className="wrapper">
            {
                images.map((image) => {
                    return <img key={image.id} src={image.download_url} className={`current-image ${+image.id === currentImage ? 'active' : ''}`} />
                })
            }
        </div>
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext}></BsArrowRightCircleFill>
        <span className="circle-indicators">
            {
                images.map((_, index) => <button key={index} onClick={() => changeActive(index)} className={`current-indicator  ${index === currentImage ? 'active-indicator' : ''}`}></button>)
            }
        </span>
    </div>
}
