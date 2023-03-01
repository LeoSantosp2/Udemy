import { zeroLeft } from './zero-left';

export function secondsToMinutes(seconds: number): string {
    const mim = zeroLeft((seconds / 60) % 60);
    const sec = zeroLeft((seconds % 60) % 60);
    return `${mim}:${sec}`;
}
