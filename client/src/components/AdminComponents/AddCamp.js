import React, { useState } from 'react';
import FormModal from '../FormModal';
import  { useMutation } from '@apollo/client';
import { MUTATION_ADD_CAMP } from '../../utils/mutations';
import auth from '../../utils/auth';
import '../../pages/Login.css';


const AddCamp = () => {
    const styles = {
        header: {
            background: '#203731',
            color: "#FFB612"
        },
        button: {
            color: "#FFB612",
            backgroundColor: "#203731"
        },
        veryBigFont: {
            fontSize: "72px",
            fontFamily: "'Tourney', sans-serif",
            borderRadius: "20px",
            background: '#203731',
            color: "#FFB612",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
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
            <button style={styles.veryBigFont} onClick={() => setShowModal(true)}>Add a Camp</button>
            <FormModal showModal={showModal} setShowModal={setShowModal}>
                <form className="text-center" onSubmit={handleSubmit}>
                    <input placeholder="Title" className="form-control loginbtn m-3" type="text" value={title} onChange={(e) => setTitle(e.target.value)}>
                    </input>
                    <input placeholder="Location" className="form-control loginbtn m-3" type="text" value={location} onChange={(e) => setLocation(e.target.value)}></input>
                    <input placeholder="Date" className="form-control loginbtn m-3" type="text" value={date} onChange={(e) => setDate(e.target.value)}></input>
                    <input placeholder="Price" className="form-control loginbtn m-3" type="text" value={price} onChange={(e) => setPrice(e.target.value)}></input>                    {/* <input className="form-control" type="date" value={date} onChange={e => setDate(e.target.value)}> */}
                    {/* </input> */}

                    <button className="btn btn-primary loginbtn m-3" type="submit">Submit</button>
                </form>
            </FormModal>
        </div>
    )
}
export default AddCamp