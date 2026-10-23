export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const paddedSecs = secs < 10 ? `0${secs}` : `${secs}`;
  return `${mins}:${paddedSecs}`;
}

export function formatIndex(index: number): string {
  return index < 10 ? `0${index}` : `${index}`;
}
