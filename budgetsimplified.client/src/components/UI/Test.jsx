import React, { useEffect, useState } from 'react'

export default function Test() {
    const [message, setMessage] = useState("");

    const fetchWelcomeMessage = async () => {
        const res = await fetch("https://localhost:7233").then(res => res.json());
        setMessage(res.message);
    };

    useEffect(() => {
        fetchWelcomeMessage();
    });

    return (
        <div>{message}</div>
    )
}
