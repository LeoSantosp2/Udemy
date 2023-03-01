import { zeroLeft } from './zero-left';

export function secondsToTime(seconds: number): string {
    const hours = zeroLeft(seconds / 3600);
    const mim = zeroLeft((seconds / 60) % 60);
    const sec = zeroLeft((seconds % 60) % 60);
    return `${hours}h${mim}m${sec}s`;
}
