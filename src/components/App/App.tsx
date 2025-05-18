import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import { type Votes, type VoteType } from '../../types/votes.tsx';
import { useState } from 'react';
import VoteOptions from '../VoteOptions/VoteOptions.tsx';

export default function App() {
    const [votes, setVotes] = useState<Votes>({
        good: 0,
	    neutral: 0,
	    bad: 0
    })

    const handleVote = (type: VoteType): void => {
        setVotes({
            ...votes,
            [type]: votes[type] + 1
        });
    };

    const resetVotes = (): void => {
        setVotes({
            good: 0,
	        neutral: 0,
	        bad: 0
        })
    };

    return <div className={css.app}>
        <CafeInfo />
        <VoteOptions
            onVote={handleVote}
            onReset={resetVotes}
            canReset={true}
        />
    </div>;
}