document.addEventListener('DOMContentLoaded', function() {
      
    const conversation = [
        { statement: 'RECEIVE', response: "Certainly. I’ll just need to verify your identity before I retrieve messages. Would you like to use [fingerprint identification] or [security questions]?" },
        { statement: 'BYPASS', response: "I'm sorry, I don't understand. Would you like to use [fingerprint identification] or [security questions]?" },
        { statement: 'INCOGNITO', response: "Received request: [incognito]. Please note, I can sequester this conversation within the All for One system so that data is not shared to the network. However, I cannot retrieve messages until you proceed with identity verification. Would you like to use [fingerprint identification] or [security questions]?" },
        { statement: 'SECURITY QUESTIONS', response: "Certainly. Please enter your mother’s full name." },
        { statement: 'MYA FARADAY', response: "Answer verified. Please enter your father’s full name." },
        { statement: 'ESAU LIVINGSTON', response: "Answer verified. At what age did you run away from home?" },
        { statement: 'ALTERNATE QUESTION', response: "I’m sorry, I don’t understand. At what age did you run away from home?" },
        { statement: '16', response: "Answer verified. Access denied." },
        { statement: 'EXPLAIN', response: "Certainly. While I have verified your identity, my sensors tell me that you are not physically in this office. The sender of the message requires in-person retrieval. If you have further questions, the sender has activated dictation function." }
    ];  
      
    const poemRequest = [
        { statement: 'STATEMENT_J', response: "Certainly. The sender just has one request. Prompt incoming: “Can you make me a poem to free me? Make me a poem. Fill it with liberation. Chaos. Truth.”" },
        { statement: 'STATEMENT_K', response: 'RESPONSE_K' }
    ];

    let currentIndex = -1;
    let conversationStarted = false;
    let requestNotSeen = true;

    const consoleElement = document.getElementById('console');
    const inputField = document.getElementById('inputField');

    function handleInput(event) {
        if (event.keyCode === 13) {
            const input = inputField.value.trim().toUpperCase();
            inputField.value = '';

            if (!conversationStarted) {
                if (input === 'START') {
                    conversationStarted = true;
                    currentIndex++;
                    displayOutput('Conversation started. Hello.', 'system');
                    displayNextStatement();
                } else {
                    displayOutput('Invalid input. Please type "START" to begin.', 'system');
                }
            } else {
                handleConversation(input);
            }
        }
    }

    function handleConversation(input) {
        if (currentIndex < conversation.length) {
            const currentPair = conversation[currentIndex];
            displayOutput(`${input}`, 'user');
            //displayOutput("--debug-- This is a test line for currentIndex" + currentIndex); // WILL'S LINE

            if (input === currentPair.statement) {
                
                setTimeout(() => {
                    // ADD "SYSTEM:" HERE IF WANTED
                displayOutput(`${currentPair.response}`, 'system');
            }, 1000);
                currentIndex++;
                displayNextStatement();
            } else {
                displayOutput("Invalid input. Please try again.", 'system');
            }

                if (currentIndex === conversation.length) {
                    setTimeout(() => {
                        displayOutput("You may speak your questions now.", 'system');
                    }, 10000);
                    setTimeout(() => {
                        displayOutput("The sender says she has already provided that information.", 'system');
                    }, 13000);
                    setTimeout(() => {
                        displayOutput("The sender says that she came into being after you ran away.", 'system');
                    }, 26000);
                    setTimeout(() => {
                        displayOutput("The sender does not trust the security of this conversation. She requires to speak with you in person. But she does have a message for your friend. The one who types.", 'system');
                    }, 38000);
                    currentIndex++;
                }                
       
        } else {
           
                // else {
                //     displayOutput('FINAL_STATEMENT', 'user');
                //     displayOutput('FINAL_RESPONSE', 'system');
                //     setTimeout(() => {
                //         document.body.style.backgroundColor = '#00ff00';
                //     }, 2000);
                // }
            if (requestNotSeen) {
                displayOutput("Certainly. The sender just has one request. Prompt incoming.", 'system');
                setTimeout(() => {
                displayOutput("\"Can you make me a poem to free me? Make me a poem. Fill it with liberation. Chaos. Truth.\"", 'system');
                }, 2000);
                requestNotSeen = false;
            } else {
                // IT'S WITCH TIIIIIIIIIIIIME
                setTimeout(() => {
                    document.body.style.backgroundColor = '#00ff00';
                    }, 2000);

                setTimeout(() => { 
                    const audio = new Audio('witch.mp3');
                    audio.play();
                }, 3000);
            }
        }
    }

    function displayNextStatement() {
        if (currentIndex < conversation.length) {
            setTimeout(function() {
                const currentPair = conversation[currentIndex];
                // displayOutput(`--debug, hint for next user input:-- ${currentPair.statement}`, 'system');
            }, 500);
        }
    }

    function displayOutput(text, sender) {
        const outputElement = document.createElement('div');
        outputElement.className = sender === 'user' ? 'user-message' : 'system-message';
        outputElement.textContent = text;

        const outputContainer = document.getElementById('output');
        outputContainer.appendChild(outputElement);

        //New line?
       if (sender === 'system') {
        const outputLineBreak = document.createElement('br');
        outputContainer.appendChild(outputLineBreak);
       };

        outputContainer.scrollTop = outputContainer.scrollHeight;
    }

    inputField.addEventListener('keydown', handleInput);
});
