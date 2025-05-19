import css from './VoteOptions.module.css';
import { type VoteType } from '../../types/votes';

export interface VoteOptionsProps {
    onVote: (type: VoteType) => void;
    onReset: () => void;
    canReset: boolean;
}

export default function VoteOptions(props: VoteOptionsProps) {
    return <div className={css.container}>
    <button className={css.button} onClick = {() => props.onVote('good')}>Good</button>
    <button className={css.button} onClick={() => props.onVote('neutral')}>Neutral</button>
      <button className={css.button} onClick={() => props.onVote('bad')}>Bad</button>
      {props.canReset && <button className={`${css.button} ${css.reset}`} onClick={() => props.onReset()}>Reset</button>}
  </div>  
}