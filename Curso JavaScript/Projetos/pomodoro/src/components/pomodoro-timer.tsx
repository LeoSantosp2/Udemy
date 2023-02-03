import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
    pomodoroTime: number;
    shortRestTime: number;
    LongRestTime: number;
    cycles: number;
}

export function PomodoroTimer(props: Props) {
    const [mainTime, setMainTime] = React.useState(props.pomodoroTime);

    useInterval(() => {
        setMainTime(mainTime - 1);
    }, 1000);

    return (
        <div className="pomodoro">
            <h2>You are: working</h2>

            <Timer mainTime={mainTime} />

            <div className="controls">
                <Button text="teste" onClick={() => console.log(1)}></Button>
                <Button text="teste" onClick={() => console.log(1)}></Button>
                <Button text="teste" onClick={() => console.log(1)}></Button>
            </div>

            <div className="details">
                <p>Testando: acuiuneriuvnirenvie</p>
                <p>Testando: acuiuneriuvnirenvie</p>
                <p>Testando: acuiuneriuvnirenvie</p>
                <p>Testando: acuiuneriuvnirenvie</p>
            </div>
        </div>
    );
}
