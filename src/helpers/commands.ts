const contacts =`Instagram: <a href="https://www.instagram.com/aryan_.__" target="_blank">aryan_.__</a>
LinkedIn: <a href="https://www.linkedin.com/in/aryan-trivedi-2a9095335/" target="_blank">aryantrivedi</a>
GitHub: <a href="https://github.com/PearlGrell" target="_blank">PearlGrell</a>
X: <a href="https://x.com/aryan_on_x" target="_blank">aryan_on_x</a>
Email: <a href="mailto:aryantrivedi.lko@gmail.com">aryantrivedi.lko@gmail.com</a>`;

const hobbies =`├── 🎬 Watching classic movies  ── "Because CGI can't beat good storytelling"  
├── 🎵 Listening to retro songs  ── "Oldies but goldies, vinyl preferred"  
├── 🍳 Cooking  ── "Mastering the art of controlled kitchen chaos" 
├── 🎮 Gaming  ── "FIFA for some couch play together"
└── 🎤 Singing (Bathroom Edition)  ── "Best acoustics, worst audience"  `;

const skills = `[System Information]  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  
Technical Stack:  
├── Frontend  
│   ├── 🚀 Flutter  
│   ├── ⚛️ React  
│   └── 🟦 TypeScript  
├── Backend  
│   ├── 🟢 Node.js  
│   └── 🍞 Bun 
└── Database  
    ├── 🔥 TursoDB (because speed matters)  
    └── 🐘 PostgreSQL (elephants never forget, neither does my data)  

Additional Modules Installed:  
🖌️ ── Designing my life’s UI in Figma
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ `;

const whoami = `[Personal Information]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👋 Hi! I'm Aryan Trivedi.
Full-stack developer by day, bug hunter by night
Looking for someone to share my localhost with

• Age: 19
• Location: Lucknow, India
• Seeking: Partner in code and life
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

const ls = `├── skills  
├── hobbies  
└── contacts  `;

const special_skills = `1 skill found:
<a href="https://allpoetry.com/Aryan_Trivedi" target="_blank">AllPoetry.com</a>`;

const why_single = `[Why Single]
━━━━━━━━━━━━━━━━━━━
Status: Heart not found
Problem: Studying in engineering college
Fix: Maybe meet someone cool?
Requirements: Must enjoy laughter, snacks, and random adventures
Patch Notes: Open to updates 💕
━━━━━━━━━━━━━━━━━━━`;

const help = `Available commands:
├── hello: Greets you back
├── whoami: Displays personal information
├── time: Displays current time
├── ls: Lists all directories
├── cd skills: Shows technical skills
├── cd hobbies: Shows hobbies
├── cd contacts: Shows contact information
├── grep special-skills: Shows special skills
├── tell-me-a-joke: Tells a joke
├── systemctl status relationship: Shows relationship status
├── echo why-single: Explains why I'm single
├── coffee-date: Make a coffee date with me (Don't worry. You can choose)
├── clear: Clears the terminal
└── exit: Exits the terminal`;

export const commands = {
    "hello": "Hi there! 👋",
    "whoami": whoami,
    "ls": ls,
    "cd skills": skills,
    "cd hobbies": hobbies,
    "cd contacts": contacts,
    "grep special-skills": special_skills,
    "systemctl status relationship": `Single and ready to mingle`,
    "echo why-single": why_single,
    "help": help,
    "coffee-date": "Arranging a coffee date...",
    "time": `Current time: ${new Date().toTimeString().split(" ")[0]} ${new Date().toDateString()}`,
};
