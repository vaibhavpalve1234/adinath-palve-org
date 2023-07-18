import React, {useState} from 'react'

function Contact() {
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Number:', number);
        console.log('Message:', message);
    };

    return (
        <div>
            <div className="container">
                <h2>Contact Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='name '
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">contact</label>
                        <input
                            type="number"
                            id="number"
                            className="form-control"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                            placeholder='+91-7777777777'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="form-control"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder='please add me in group आदिनाथ पालवे मित्र मंडळ 🚩'
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <br />
        </div>
    );
};

export default Contact