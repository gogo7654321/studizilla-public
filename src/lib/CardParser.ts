
export type CardInput = {
    term: string;
    definition: string;
};

export class CardParser {
    private rawText: string;
    private termSeparator: string;
    private cardSeparator: string;

    constructor(rawText: string, termSeparator: string, cardSeparator: string) {
        this.rawText = rawText;
        this.termSeparator = termSeparator;
        this.cardSeparator = cardSeparator;
    }

    public parse(): CardInput[] {
        if (!this.rawText.trim()) {
            return [];
        }

        const cards: CardInput[] = [];
        const rows = this.rawText.split(this.cardSeparator);

        for (const row of rows) {
            if (!row.trim()) {
                continue;
            }

            const parts = this._splitRow(row);
            
            if (parts.length >= 2) {
                const term = parts[0].trim();
                const definition = parts.slice(1).join(this.termSeparator).trim();

                if (term && definition) {
                    cards.push({ term, definition });
                }
            }
        }

        return cards;
    }

    private _splitRow(row: string): string[] {
        return row.split(this.termSeparator);
    }
}
