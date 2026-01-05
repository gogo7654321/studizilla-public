
// using levenshtein distance for string matching/smart grading
export class SimilarityScorer {
    private correctAnswer: string;
    private threshold: number;

    constructor(correctAnswer: string, threshold = 0.85) {
        this.correctAnswer = correctAnswer.toLowerCase().trim();
        this.threshold = threshold;
    }

    // returns similarity score from 0-1
    public calculateRatio(answer: string): number {
        const a = answer.toLowerCase().trim();
        const b = this.correctAnswer;

        if (a === b) return 1;
        if (a.length === 0 || b.length === 0) return 0;

        // builds the matrix for levenshtein
        const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

        // init first row/col
        for (let i = 0; i <= a.length; i++) { 
            matrix[0][i] = i; 
        }
        for (let j = 0; j <= b.length; j++) { 
            matrix[j][0] = j; 
        }

        // fill in the rest
        for (let j = 1; j <= b.length; j++) {
            for (let i = 1; i <= a.length; i++) {
                const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                matrix[j][i] = Math.min(
                    matrix[j][i - 1] + 1,       // del
                    matrix[j - 1][i] + 1,       // insert
                    matrix[j - 1][i - 1] + cost // replace
                );
            }
        }

        const distance = matrix[b.length][a.length];
        const longerLength = Math.max(a.length, b.length);
        return (longerLength - distance) / longerLength;
    }

    // check if answer passes the threshold
    public isMatch(answer: string): boolean {
        const ratio = this.calculateRatio(answer);
        return ratio >= this.threshold;
    }

    // strict equality check
    public isExactMatch(answer: string): boolean {
        return answer.toLowerCase().trim() === this.correctAnswer;
    }
}
