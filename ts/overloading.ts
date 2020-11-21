class Student {
    public speak(f: string): string;
    public speak(f: number): number;

    public speak(f: any): string | number {
        return 'asd';
    }
}