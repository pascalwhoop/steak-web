export function toApiDate(date: Date | string): string {
    date = new Date(date.toString());
    return date.toISOString().slice(0, 10);
}