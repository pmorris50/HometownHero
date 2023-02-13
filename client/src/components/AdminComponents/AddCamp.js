import React, {useState} from 'react';
import FormModal from '../FormModal';


const AddCamp = () => {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState(new Date());
    //const dateString = date.toLocaleDateString();

    return (
        <FormModal>
        <form>
            <input type = "date" value = {date} onChange = {e => setDate(e.target.value)}>
            </input>
        </form>
        </FormModal>
    )

}

export default AddCamp