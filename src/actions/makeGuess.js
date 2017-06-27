export const MAKE_GUESS = 'MAKE_GUESS';

export const makeGuess = (guess, feedback) => ({
    type: MAKE_GUESS,
    guess,
    feedback
});