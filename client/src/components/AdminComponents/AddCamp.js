import React, { useState } from 'react';
import FormModal from '../FormModal';
import  { useMutation } from '@apollo/client';
import { MUTATION_ADD_CAMP } from '../../utils/mutations';


const AddCamp = () => {
    const styles = {
        header: {
            background: '#203731',
            color: "#FFB612"
        },
        button: {
            color: "#FFB612",
            backgroundColor: "#203731"
        }
    }   
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState(new Date());
    const [price, setPrice] = useState(0);
    const [addCamp, { error, data }] = useMutation(MUTATION_ADD_CAMP);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(title, location, date);
        try {
            const { data } = await addCamp({
                variables: { title, location, date, price },
            });
            console.log("DATA:", data);
        } catch (e) {
            console.error(e);
        }
        
    }
    return (
        <div>
            <button onClick={() => setShowModal(true)}>Add a Camp</button>
            <FormModal showModal={showModal} setShowModal={setShowModal}>
                <form onSubmit={handleSubmit}>
                    <label className="form-label" htmlFor="title">Title</label>
                    <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)}>
                    </input>
                    <label className="form-label" htmlFor="location">Location</label>
                    <input className="form-control" type="text" value={location} onChange={(e) => setLocation(e.target.value)}></input>
                    <label className="form-label" htmlFor="date">Date</label>
                    <input className="form-control" type="text" value={date} onChange={(e) => setDate(e.target.value)}></input>
                    <label className="form-label" htmlFor="price">Price</label>
                    <input className="form-control" type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                    {/* <input className="form-control" type="date" value={date} onChange={e => setDate(e.target.value)}> */}
                    {/* </input> */}

                    <button type="submit">Submit</button>
                </form>
            </FormModal>
        </div>
    )
}
export default AddCamp