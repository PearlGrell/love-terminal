import { useEffect, useRef, useState } from "react";
import "../styles/screens/terminal_screen.css";
import { commands } from "../helpers/commands";
import { jokes } from "../helpers/jokes";

const login_time = new Date().toTimeString().split(" ")[0];
const login_date = new Date().toDateString();

const initMessage = `Welcome to LoveTerminal 1.0.0
Last login: ${login_time} ${login_date} from localhost
Type HELP for list of all available commands

`;

type tHistory = {
    command: string;
    output: string;
};

export default function TerminalScreen() {
    const prefix = "root@macbook:~$";
    const [command, setCommand] = useState<string>("");
    const [message, setMessage] = useState(initMessage);
    const [history, setHistory] = useState<tHistory[]>([]);

    /**/const inputRef = useRef<HTMLInputElement>(null);

    function handleClick() {
        inputRef.current?.focus();
    }

    /**/useEffect(() => {
        const terminalBody = document.querySelector(".terminal-body");
        terminalBody?.scrollTo(0, terminalBody.scrollHeight);
    }, [history]);

    function exec() {
        const _command = command.trim();

        if (_command.trim() === "") return;

        if(_command === "exit") {
            window.location.href = "/";
            const entry: tHistory = { command, output: "Goodbye! 🖖" };
            setHistory([...history, entry]);
            setCommand("");
            setTimeout(() => { window.location.href = "/"; }, 1000);
            return;
        }

        if(_command === "tell-me-a-joke") {
            const joke = jokes();
            setHistory([...history, { command, output: joke }]);
            setCommand("");
            return;
        }

        if (_command === "clear") {
            setHistory([]);
            setMessage("");
            setCommand("");
            return;
        }

        const entry: tHistory = commands[_command]
            ? { command, output: commands[_command] }
            : { command, output: `${_command}: command not found` };

        setHistory([...history, entry]);
        setCommand("");
    }

    return (
        <div className="body-root" onClick={handleClick}>   
            <div className="terminal-root">
                <div className="terminal-header">
                    <div className="terminal-header-buttons">
                        <div className="terminal-header-button red" onClick={
                            ()=>setMessage(message+"\nDon't worry. Not a red flag like Instagram's Aryans.")
                        } />
                        <div className="terminal-header-button yellow" onClick={
                            ()=>setMessage(message+`\nRelax. Not even a yellow flag, like someone who texts "k" but means no harm.`)
                        }/>
                        <div className="terminal-header-button green" onClick={
                            ()=>setMessage(message+`\nYes... Finally! A green flag. Like the one you get when you're on a roll.`)   
                        }/>
                    </div>
                    <div className="terminal-header-title">root@macbook:~</div>
                </div>
                <div className="terminal-body">
                    <div className="terminal-line">{message}</div>
                    {history.map((entry, index) => (
                        <div className="terminal-line" key={index}>
                            <div className="prefix">{prefix} <span className="command">{entry.command}</span></div>
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
                            onKeyDown={(e) => { if (e.key === "Enter") exec(); }}
                            onChange={(e) => setCommand(e.target.value)}
                            value={command}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
