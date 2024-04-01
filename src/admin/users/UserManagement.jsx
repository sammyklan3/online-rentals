import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { BsSearch } from "react-icons/bs";
import "./users.css";

export const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        // Fetch users data from the server
        // Example: fetchUsers()
        // .then((data) => setUsers(data))
        // .catch((error) => console.log(error));

        // Use static data for now
        setUsers([
            {
                id: 1,
                name: "Jacob Thompson",
                image: "https://lh3.googleusercontent.com/proxy/7zm6f8l5tSLObnOgmp9dri9XClokhfS2IwV4rGTk5A_k4g_D5k2j6oMWuiTQXPTLh327VI9BBLLLLs4XjXfJEDzRYXNK5EN_fQQyhQhd2Mt6FMCaZBT36br6gbsUah0Vz1tp-Ug9niGftySl7vR3gK-Ewmy1Zg"
            },
            {
                id: 2,
                name: "Camilla Brown",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            },
            {
                id: 3,
                name: "Brandon White",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            },
            {
                id: 4,
                name: "Charlotte Rodriguez",
                image: "https://i.dailymail.co.uk/i/pix/2016/05/23/22/348B850600000578-3605456-image-m-32_1464040491071.jpg"
            }
        ]);
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const filtered = users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
    }, [searchTerm, users]);

    return (
        <div className="user-management-container">
            <Navbar />
            <h1>Manage Users</h1>

            {/* Search bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search users"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <p><BsSearch className="search-icon" /></p>
            </div>

            {/* Render users list */}
            {Array.isArray(filteredUsers) ? (
                <ul>
                    {filteredUsers.map((user) => (
                        <li key={user.id} className="user">
                            <div className="user-avatar">
                                <img
                                    src={user.image ? user.image : "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"}
                                    alt={user.name}
                                />
                                <p>{user.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <li className="user">
                    <div className="user-avatar">
                        <img
                            src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
                            alt="user-avatar"
                        />
                        <p>{filteredUsers.name}</p>
                    </div>
                </li>
            )}

        </div>
    );
};

