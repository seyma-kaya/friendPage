import { useState } from 'react';

function MiniGame (){
    const [answer, setAnswer] = useState("");
    const response = [
                        'It is certain',
                        'Without a doubt',
                        'Most likely',
                        'YES!',
                        'Too tired try again',
                        'Ask again later',
                        'Seyma says NO',
                        'No',
                        'Very doubtful',
                        'In shaa Allah'
                        ];

    function magicTime(){
        const num = Math.floor(Math.random() * (10 - 1 + 1));
        setAnswer(response[num]);
    }

        return (
            <div>
                <div>
                    ask your question to my magic 8 ball
                </div>
                <div onClick={() => magicTime()}>
                    meow
                </div>
                <div>
                    {answer}
                </div>
            </div>
        );
    }

export default MiniGame;