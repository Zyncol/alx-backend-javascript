export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // eslint-dis
    const task2 = false; // eslint-disable-line
  }

  return [task, task2];
}
