import { Link } from "react-router-dom";

export default function PageNotFound() {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#1a1a2e",
            color: "#00ff7f",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
            gap: "1rem",
        }}>
            <h2 style={{
                    fontSize: "5rem",
                    margin: "0",
            }}>404</h2>
            <h1 style={{
                fontSize: "3rem",
                margin: "0",
            }}>Soulmate Not Found... Yet!</h1>
            <p style={{
                fontSize: "1.2rem",
                margin: "32px",
                color: "#ff99cc",
            }}>The requested partner could not be found on this server..</p>
            <Link to="/" >
                <button style={{
                    backgroundColor: "#ff99cc",
                    color: "#1a1a2e",
                    padding: "0.5rem 1rem",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}>Go Home</button>
            </Link>
        </div>
    );
}