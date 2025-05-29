import React from 'react';
import { useTranslation } from 'react-i18next';

interface TrustnetScoreProps {
    score: number;
    maxScore?: number;
}

const TrustnetScore: React.FC<TrustnetScoreProps> = ({ score, maxScore = 100 }) => {
    const { t } = useTranslation();

    // Clamp score between 0 and maxScore
    const clampedScore = Math.max(0, Math.min(score, maxScore));
    // Calculate the position of the triangle indicator as a percentage
    const indicatorPosition = (clampedScore / maxScore) * 100;

    return (
        <div className="bg-gray-50 rounded-xl p-4 sm:p-6 max-w-4xl mx-auto shadow-md">
            <div className="font-bold text-lg sm:text-2xl mb-1">
                {t('trustnet.title.first')} <span className="font-normal">{t('trustnet.title.second')}</span>
            </div>
            <div className="text-gray-700 text-sm sm:text-base mb-4">
                {t('trustnet.description')}
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
                <div className="text-3xl sm:text-4xl font-bold min-w-[72px]">{score.toFixed(2)}</div>
                <div className="flex-1">
                    <div className="relative h-6 mb-1">
                        {/* Gradient Bar */}
                        <div className="w-full h-4 rounded-full bg-gradient-to-r from-red-700 via-yellow-400 to-green-700" />
                        {/* Triangle Indicator */}
                        <div
                            className="absolute top-4 rotate-180"
                            style={{
                                left: `calc(${indicatorPosition}% - 8px)`,
                                width: 0,
                                height: 0,
                                borderLeft: '8px solid transparent',
                                borderRight: '8px solid transparent',
                                borderTop: '10px solid #444',
                            }}
                        />
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm text-gray-500">
                        <span>{t('trustnet.lowlebel')}</span>
                        <span>{t('trustnet.highlebel')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustnetScore;
