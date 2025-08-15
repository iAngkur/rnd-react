import React from 'react';

export default function ProblemWithNormalForm() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        if(name === 'name') setName(value);
        if(name === 'email') setEmail(value);
        if(name === 'password') setPassword(value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({
            name, email, password
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                gap: "0.5px"
            }}
            autoComplete='false'
            >

                <input type="text" name="name" value={name} onChange={handleChange} style={inputStyle} placeholder='Name'/>
                <input type="email" name="email" value={email} onChange={handleChange} style={inputStyle} placeholder='Email' />
                <input type="password" name="password" value={password} onChange={handleChange} style={inputStyle} placeholder='Password' />

                <button type="submit" style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                }}>Register</button>
            </form>
        </div>
    )
}

const inputStyle = {
    width: '300px',
    border: '1px solid #ddd',
    outline: 'none',
    padding: "0.25rem 0.5rem",
}