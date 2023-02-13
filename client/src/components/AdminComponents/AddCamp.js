import React, { useState } from 'react';
import FormModal from '../FormModal';


const AddCamp = () => {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState(new Date());
    //const dateString = date.toLocaleDateString();

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Add a Camp</button>
            <FormModal showModal={showModal} setShowModal={setShowModal}>
                <form>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}>
                    </input>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}></input>
                    <input type="date" value={date} onChange={e => setDate(e.target.value)}>
                    </input>
                </form>
            </FormModal>
        </div>
    )

}

export default AddCamp