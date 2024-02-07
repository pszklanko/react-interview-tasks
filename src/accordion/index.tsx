import { useState } from "react"
import data from "./data";
import './styles.css'

export default function Accordion() {
    const [selected, setSelected] = useState<string[]>([]);
    const [isMultiple, setIsMultiple] = useState(false);

    function toggleSelection(id: string) {
        if (isMultiple) {
            if (selected.includes(id)) {
                setSelected(selected.filter((item) => item !== id))
            } else {
                setSelected([...selected, id])
            }
        } else {
            if (selected.includes(id)) {
                setSelected([])
            } else {
                setSelected([id]);
            }
        }
    }
    function toggleIsMultiple() {
        setSelected([]);
        setIsMultiple(!isMultiple);
    }

    return <div className="wrapper">
        <button onClick={toggleIsMultiple}>{isMultiple ? 'Disable multiple' : 'Enable multiple'}</button>
        <div className="accordion">
            {
                data?.length > 0 ? data.map((item) => {
                    return <div className="item" key={item.id}>
                        <div className="title" onClick={() => toggleSelection(item.id)}>
                            {item.question}
                            <span>+</span>
                        </div>
                        {
                            selected.includes(item.id) ? <div className="content">{item.answer}</div> : null
                        }
                    </div>
                }) : <div>No data available.</div>
            }
        </div>
    </div>
}