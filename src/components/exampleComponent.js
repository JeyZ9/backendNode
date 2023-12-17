import React, { useState } from 'react'
import axios from 'axios';

const CustomerProfile = (props) => {
    return(
        <div>
            First Name : {props.firstname} <br/>
            Last Name : {props.lastname} <br/>
            Phone : {props.phone} <br/>
            Email : {props.email} <br/>
        </div>
    )
}

const ExampleComponent = (props) => {


    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState();
    const [customerProfile, setCustomerProfile] = useState({});

    const handkerSubmit = async () => {
        const body = {
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            email: email
        };
        console.log(body)

        const customer = await axios({
            method: 'post',
            url: 'http://127.0.0.1:3000/customer/create',
            data: body
        });


        setCustomerProfile(customer.data);
        setFirstname('');
        setLastname('');
        setPhone('');
        setEmail('');
    };


    return(
        <div className='grid grid-row-2 h-[80vh]'>
            <div className='font-bold flex flex-col justify-between rounded-xl text-gray-700 shadow-2xl' style={{backgroundColor: '#80808060', width: '250px',height: '300px', border: '1px solid', borderColor: '#808080', padding: '15px'}}>
                {/* <h1>Hello World</h1> <br/>
                Props name : {props.name}<br/>
                State email : {email}<br/>
                State phone : {phone}<br/> */}

                {/* e = event */}
                {/* firstname : <input className='border' onChange={(e) => setFirstname(e.target.value)} value={firstname} /><br/>
                lastname : <input className='border' onChange={(e) => setLastname(e.target.value)} value={lastname} /><br/>
                email : <input className='border' onChange={(e) => setEmail(e.target.value)} value={email} /><br/>
                phone : <input className='border' onChange={(e) => setPhone(e.target.value)} value={phone} /><br/> */}
                <div>
                    <p>First Name</p>
                    <input className='border border-gray-500 shadow-lg rounded-md' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </div>

                <div>
                    <p>last Name</p>
                    <input className='border border-gray-500 shadow-lg rounded-md' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </div>

                <div>
                    <p>Phone</p>
                    <input className='border border-gray-500 shadow-lg rounded-md' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div>
                    <p>Email</p>
                    <input className='border border-gray-500 shadow-lg rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <div className='flex justify-center'>
                        <button onClick={handkerSubmit} className='px-4 py-1 bg-gray-400 rounded-xl'>Submit</button>
                    </div>
                </div>

            </div>
            <div className='bg-gray-300 flex p-4 font-[500]'>
                {/* แบบเต็ม */}
                <CustomerProfile 
                    firstname={customerProfile.firstname} 
                    lastname={customerProfile.lastname} 
                    phone={customerProfile.phone} 
                    email={customerProfile.email} 
                />

                {/* แบบย่อ */}
                {/* <CustomerProfile {...CustomerProfile} /> */}
            </div>
        </div>
    )
}

export default ExampleComponent