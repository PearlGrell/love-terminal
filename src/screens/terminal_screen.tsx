import { useRef, useState } from "react";
import "../styles/screens/terminal_screen.css";
import { commands } from "../helpers/commands";
import { jokes } from "../helpers/jokes";
import TerminalImage from "../assets/terminal_icon.png";
import CoffeeImage from "../assets/coffee.png";
import Logout from "../assets/logout.png";
import { Link } from "react-router-dom";
import save_to_db from "../helpers/db_save";

const login_time = new Date().toTimeString().split(" ")[0];
const login_date = new Date().toDateString();
const prefix = "root@macbook:~$";

const initMessage = `Welcome to LoveTerminal 1.0.0
Last login: ${login_time} ${login_date} from localhost
Type HELP for list of all available commands

`;

type tHistory = {
    command: string;
    output: string;
};

export enum Coffee {
    espresso = "espresso",
    latte = "latte",
    cappuccino = "cappuccino",
    americano = "americano"
}

export default function TerminalScreen() {
    const [command, setCommand] = useState<string>("");
    const [message, setMessage] = useState(initMessage);
    const [history, setHistory] = useState<tHistory[]>([]);
    const [showTerminal, setShowTerminal] = useState<boolean>(false);
    const [showCoffee, setCoffee] = useState<boolean>(false);

    const [formName, setFN] = useState<string>("");
    const [formDate, setFD] = useState<string>();
    const [formCoffee, setFC] = useState<Coffee>(Coffee.espresso);

    const inputRef = useRef<HTMLInputElement>(null);

    function handleClick() {
        inputRef.current?.focus();
    }

    function clear(){
        setCommand("");
        setHistory([]);
        setMessage("");
    }

    function exec() {
        const _command = command.trim().toLowerCase();
        if (_command === "") return;
    
        let newHistoryEntry: tHistory = { command, output: "" };
    
        switch (_command) {
            case "exit":
                clear();
                closeTerminal();
                setMessage(initMessage);
                return;
            case "tell-me-a-joke":
                newHistoryEntry.output = jokes();
                break;
            case "clear":
                clear();
                return;
            case "coffee-date":
                newHistoryEntry.output = commands[_command];
                setTimeout(() => {
                    closeTerminal();
                    setTimeout(() => openCoffee(), 500);
                }, 500);
                break;
            default:
                newHistoryEntry.output = commands[_command] || `${_command}: command not found`;
        }
    
        setHistory([...history, newHistoryEntry]);
        setCommand("");
    }

    function openTerminal() {
        setShowTerminal(true);
        setCoffee(false);
    }

    function closeTerminal() {
        setShowTerminal(false);
    }

    function openCoffee(){
        setCoffee(true)
    }

    function minimizeCoffee(){
        setCoffee(false);
    }

    function closeCoffee() {
        setFN("");
        setFD("");
        setFC(Coffee.espresso);
        setCoffee(false);
    }

    async function confirmDate(e: React.FormEvent){
        e.preventDefault();
        if (!formName || !formDate) {
            alert("Please enter your name and date.");
            return;
        }
        const response = await save_to_db(formName,formDate,formCoffee);
        if(response.response === 500){
            alert(response.message);
        }
        setFN("");
        setFD("");
        setFC(Coffee.espresso);
        openTerminal();
        const confirmationMessage = `✅ Coffee date confirmed with ${formName} on ${formDate.replace("T", " ")}, enjoying a ${Coffee[formCoffee]}. ☕`;
        setHistory((prevHistory) => {
            if (prevHistory.length === 0) return prevHistory;
            const lastIndex = prevHistory.length - 1;
            prevHistory[lastIndex].output = confirmationMessage;
            return prevHistory.slice();
        });
    }

    return (
        <div className="desktop-root" onClick={handleClick}>
            <div className="terminal-root" style={{ visibility: showTerminal ? "visible" : "collapse" }}>
                <div className="terminal-header">
                    <div className="terminal-header-buttons">
                        <div
                            className="terminal-header-button red"
                            onClick={() =>
                                setMessage((prev) => prev + (prev.trim() === "" ? "" : "\n") + "Don't worry. Not a red flag like Instagram's Aryans.\n(Type EXIT if you really wanna leave)")
                            }
                        />
                        <div className="terminal-header-button yellow" onClick={closeTerminal} />
                        <div
                            className="terminal-header-button green"
                            onClick={() =>
                                setMessage((prev) => prev + (prev.trim() === "" ? "" : "\n") + `Yes... Finally! A green flag. Like the one you get when you're on a roll.`)
                            }
                        />
                    </div>
                    <div className="terminal-header-title">root@macbook:~</div>
                </div>
                <div className="terminal-body">
                    <div className="terminal-line">{message}</div>
                    {history.map((entry, index) => (
                        <div className="terminal-line" key={index}>
                            <div className="prefix">
                                {prefix} <span className="command">{entry.command}</span>
                            </div>
                            <div className="output" dangerouslySetInnerHTML={{ __html: entry.output }} />
                        </div>
                    ))}
                    <div className="terminal-input">
                        <div>{prefix}</div>
                        <input
                            ref={inputRef}
                            className="terminal-input-text"
                            type="text"
                            autoFocus
                            onKeyDown={(e) => e.key === "Enter" && exec()}
                            onChange={(e) => setCommand(e.target.value)}
                            value={command}
                        />
                    </div>
                </div>
            </div>
            <div className="coffee-root" style={{ visibility: showCoffee ? "visible" : "collapse" }}>
                <div className="top-bar">
                    <div className="buttons" style={{
                        "cursor": "pointer"
                    }}>
                    <div className="close" onClick={closeCoffee}></div>
                    <div className="minimize" onClick={minimizeCoffee}></div>
                    <div className="maximize"></div>
                    </div>
                    <div className="title">Coffee Date</div>
                </div>
                <div className="form-container">
                    <h2>Plan Your Coffee Date</h2>
                    <form>
                    <label>Name:</label>
                    <input className="form-input-field" type="text" placeholder="Enter your name" onChange={(val)=>setFN(val.target.value)} value={formName}/>
                    <label>Date & Time:</label>
                    <input className="form-input-field" type="datetime-local" onChange={(val)=>setFD(val.target.value)} value={formDate}/>
                    <label>Favorite Coffee:</label>
                    <select onChange={(e) => setFC(e.target.value.toLowerCase() as unknown as Coffee)} value={formCoffee}>
                        <option value={Coffee.espresso}>Espresso</option>
                        <option value={Coffee.latte}>Latte</option>
                        <option value={Coffee.cappuccino}>Cappuccino</option>
                        <option value={Coffee.americano}>Americano</option>
                    </select>
                    <button type="submit" onClick={confirmDate}>Confirm Date</button>
                    </form>
                </div>
            </div>
            <div className="app-dock" style={{ visibility: showTerminal ? "collapse" : "visible" }}>
                <div className="dock-icon" onClick={openTerminal} style={{ backgroundImage: `url(${TerminalImage})` }} />
                <div className="dock-icon" onClick={openCoffee} style={{ backgroundImage: `url(${CoffeeImage})` }} />
                <div
                    style={{
                        width: "2px",
                        height: "48px",
                        backgroundColor: "#ffffff55",
                        margin: "0px 8px",
                    }}
                />
                <Link to="/">
                    <div className="dock-icon" style={{ backgroundImage: `url(${Logout})` }} />
                </Link>
            </div>
        </div>
    );
}