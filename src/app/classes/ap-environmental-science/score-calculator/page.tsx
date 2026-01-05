
'use client';

import { ScoreCalculator } from '@/components/ScoreCalculator';
import { apEnvironmentalScienceData } from '@/lib/course-data/ap-environmental-science';

const scoreRanges = {
    5: { min: 106, max: 150 },
    4: { min: 89, max: 105 },
    3: { min: 72, max: 88 },
    2: { min: 53, max: 71 },
    1: { min: 0, max: 52 },
};

const sections = [
    { name: 'Multiple Choice', maxScore: 80, weight: 90 },
    { name: 'Free Response', maxScore: 30, weight: 60 },
];

export default function ApesScoreCalculatorPage() {
    return (
        <div className="py-12">
            <ScoreCalculator
                title="AP® Environmental Science Score Calculator"
                description="Enter your raw scores for the Multiple Choice and Free Response sections to estimate your final AP® score."
                sections={sections}
                scoreRanges={scoreRanges}
            />
        </div>
    );
}
