export function jokes(){
    const jokes = [
        `Never date a baker. They're too kneady.`,
        `Why was the mushroom always invited to parties?
Because he's a fungi!`,
        `Why you should never talk to Pi?
Because he'll just go on forever.`,
        `Thank you student loans for getting me through college.
I don't think I can ever repay you.`,
        `Why did the tomato turn red?
Because it saw the salad dressing!`,
        `What do Ted Bundy and Space Shuttle Columbia have in common?
They both left bodies in four states.`,
        `If Bill Gates had a dime for every time Windows crashed ... Oh wait, he does.`,
        `Hey Girl,
Roses are #ff0000,
Violets are #0000ff,
I use hex codes,
But I'd use RGB for you.`,
        `Why did the scarecrow win an award?
Because he was outstanding in his field!`,
        `Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.`,
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
}
