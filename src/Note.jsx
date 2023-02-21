import React, { useState } from 'react'
import './Note.css'

export default function Note() {

    const [note, setNote] = useState("");
    const [item, setItem] = useState([]);

    const handle = () => {
        if (!note) {
            alert("Text area can not be empty!");
        } else {
            setNote("");
            setItem(() => {
                return [...item, note]
            })

        }
        // console.log(note)
    }

    const removeAll = (id) => {
        setItem([])
    }

    const del = (id) => {
        const deldata = item.filter((el, ind) => {
            return ind !== id
        })
        setItem(deldata);
    }

    return (
        <>
            <div className='note'>
                <h3 style={{ color: 'darkBlue', padding: '10px', textAlign: 'center' }}>Type your notes below:</h3>
                <input type="text" placeholder='Hey! Notes' className='note-input' key={""} value={note} onChange={(e) => setNote(e.target.value)} />
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <button onClick={handle} className="btn-input" >Add</button>
                    <button onClick={removeAll} className="btn-input">Remove all</button>
                </div>
            </div>
            <h3 style={{ backgroundColor: 'darkBlue', color: 'yellow', padding: '10px', textAlign: 'center' }}>Your Notes</h3>
            <div className="note-preview">
                {item.length === 0 ? "No Notes to preview" : item.map((i, index) => {
                    return (
                        <div className='note-box' key={index}>
                            <span className='note-item'>{i}</span>
                            <button onClick={() => del(index)} >Delete</button>
                        </div>
                    );
                })}
            </div>
        </>
    )
}
