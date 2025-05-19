import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import { type Votes, type VoteType } from '../../types/votes';
import { useState } from 'react';
import VoteOptions from '../VoteOptions/VoteOptions.tsx';
import VoteStats from '../VoteStats/VoteStats.tsx';
import Notification from '../Notification/Notification.tsx';

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

    const totalVotes: number = votes.good + votes.neutral + votes.bad;
    const positiveRate: number = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;

    return <div className={css.app}>
        <CafeInfo />
        <VoteOptions
            onVote={handleVote}
            onReset={resetVotes}
            canReset={totalVotes ? true : false}
        />
        {totalVotes ? <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} /> : <Notification />}
    </div>;
}