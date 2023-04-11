import React from 'react';
import { useDispatch } from 'react-redux';
import { game } from 'reducers/game';
import { Player } from 'components/Player';

export const Square = ({ value, index }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(game.actions.captureSquare({ index }));
    // TODO send the captureSquare action
  }

  return (
    <button
      className={value === null ? 'square clickable' : 'square'}
      type="button"
      onClick={handleClick}>
      <Player value={value} />
    </button>
  )
}
