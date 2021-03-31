import React from "react";
import { LoadedImage } from '../App';
import MainImage from './MainImage';

interface ContactPageProps {
    name: string,
    email?: string,
    address?: string,
    phoneNumber?: string,
    photoSrc?: LoadedImage,
}

function ContactPage(props: ContactPageProps) {
    const { name, email, address, phoneNumber, photoSrc } = props;
    return <div className="padded_content">
        <h2>Name</h2>
        <p>{name}</p>
        {
            email &&
            <span>
                <h2>Email</h2>
                <p>{email}</p>
            </span>
        }
        {
            phoneNumber &&
            <span>
                <h2>Phone</h2>
                <p>{phoneNumber}</p>
            </span>
        }
        {
            address &&
            <span>
                <h2>Address</h2>
                <p>{address}</p>
            </span>
        }
        {
            photoSrc &&
            <span>
                <h2>Photo</h2>
                <MainImage hideShowMore fixed images={[photoSrc]} count={1} />
            </span>
        }
    </div>
}

export default ContactPage;