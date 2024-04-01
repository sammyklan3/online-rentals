import "./listings.css";
import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidBed } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { FaTrash, FaFilePen } from "react-icons/fa6";

export const Listings = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {

        // Fetch data from an API or a server here
        // Example:
        // fetch('api/listings')
        //     .then(response => response.json())
        //     .then(data => setListings(data))
        //     .catch(error => console.error('Error fetching listings:', error));

        // For now, setting static data

        setListings([

            {
                id: 1,
                title: "Bungalow in the heart of the city",
                image: "https://a0.muscache.com/im/pictures/6f42c6e9-a0d0-4c12-aa33-971ffe71ca9c.jpg?im_w=720",
                location: 'New York',
                bedrooms: 3,
                beds: 2,
                pricing: 1000
            },
            {
                id: 2,
                title: "Modern apartment with a view",
                image: "https://a0.muscache.com/im/pictures/4f8a25f4-8364-4beb-8e52-ae68fa1489ce.jpg?im_w=720",
                location: 'Los Angeles',
                bedrooms: 2,
                beds: 2,
                pricing: 800
            },
            {
                id: 3,
                title: "Cozy home near the beach",
                image: "https://a0.muscache.com/im/pictures/aa40bc01-c9c4-4c1e-97a9-6f5b6acf0923.jpg?im_w=720",
                location: 'Chicago',
                bedrooms: 4,
                beds: 3,
                pricing: 1200
            },
        ]);
    }, []);

    return (
        <div className="lisitings-container">
            <Navbar />
            <h2>Available Listings</h2>

            {Array.isArray(listings) ? (
                <ul>
                    {listings.map((listing) => (
                        <li key={listing.id} className="listing-item">
                            <div className="listing-item-content">
                                <div className="listing-item-image">
                                    <img src={listing.image} alt={listing.title} />
                                    <p>{listing.title}</p>

                                </div>
                                <div className="listing-item-info">
                                    <p><FaLocationDot />{listing.location}</p>
                                    <p><p>Bedrooms:</p>{listing.bedrooms}</p>
                                    <p><BiSolidBed />{listing.beds}</p>
                                    <p><p>Price: </p>${listing.pricing}</p>
                                </div>
                            </div>

                            <div className="listing-item-actions">
                                <NavLink to={`/admin/listings/${listing.id}`}><FaFilePen />Edit</NavLink>
                                <button><FaTrash />Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div key={listings.id} className="listing-item">
                    <div className="listing-item-content">
                                <div className="listing-item-image">
                                    <img src={listings.image} alt={listings.title} />
                                    <p>{listings.title}</p>

                                </div>
                                <div className="listing-item-info">
                                    <p><FaLocationDot />{listings.location}</p>
                                    <p><p>Bedrooms:</p>{listings.bedrooms}</p>
                                    <p><BiSolidBed />{listings.beds}</p>
                                    <p><p>Price: </p>${listings.pricing}</p>
                                </div>
                            </div>

                            <div className="listing-item-actions">
                                <NavLink to={`/admin/listings/${listings.id}`}><FaFilePen />Edit</NavLink>
                                <button><FaTrash />Delete</button>
                            </div>
                </div>
            )}
        </div>
    );
};