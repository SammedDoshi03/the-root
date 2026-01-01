import React, { useState } from 'react';
import { Section } from './Section';
import { SmartBarChart } from 'universal-adaptive-bars';

// Defining types locally since the library might not export them cleanly yet
// Matching the library's expected structure for DataPoint where relevant
interface DataPoint {
    id: string;
    label: string;
    value: number;
    color?: string;
    category?: string;
    date: string; // ISO string
}

const generateData = () => {
    const data: DataPoint[] = [];
    const startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 3);

    // Generate data for approx 3 years (156 weeks)
    for (let i = 0; i < 156; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + (i * 7));

        data.push({
            id: i.toString(),
            label: `W${i + 1}`,
            value: Math.floor(Math.random() * 5000) + 1000,
            date: date.toISOString(),
            category: 'Sales',
            color: '#8884d8'
        });
    }
    return data;
};

export const UniversalAdaptiveBarsDemo: React.FC = () => {
    const [data, setData] = useState<DataPoint[]>(generateData());
    const [view, setView] = useState<'day' | 'week' | 'month' | 'year'>('day');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const randomizeData = () => {
        setData(generateData());
    };

    // Placeholder for Gemini API Key - User should fetch this from .env
    const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

    return (
        <Section
            id="demo"
            title="Open Source Contribution"
            subtitle="Universal Adaptive Bars: A smart, AI-powered chart component"
            className={isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50'}
            light={!isDarkMode}
        >
            <div className="flex flex-col items-center gap-8 w-full max-w-6xl mx-auto px-4">
                <div className="flex gap-4 mb-4 flex-wrap justify-center items-center">
                    <button
                        onClick={randomizeData}
                        className={`px-6 py-2 rounded-full transition-colors shadow-md font-medium ${isDarkMode
                            ? 'bg-primary-500 text-white hover:bg-primary-600'
                            : 'bg-primary-600 text-white hover:bg-primary-700'
                            }`}
                    >
                        Randomize Data
                    </button>

                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`px-6 py-2 rounded-full transition-colors shadow-md font-medium border flex items-center gap-2 ${isDarkMode
                            ? 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                            }`}
                    >
                        {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                    </button>

                    {!GEMINI_API_KEY && (
                        <div className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm border border-yellow-200">
                            Add VITE_GEMINI_API_KEY to .env for AI features
                        </div>
                    )}
                </div>

                <div
                    className={`w-full min-h-[600px] h-auto rounded-2xl shadow-2xl p-6 border transition-all duration-500 flex items-center justify-center relative ${isDarkMode
                        ? 'bg-slate-900 border-slate-800 shadow-slate-900/50'
                        : 'bg-white border-slate-200/60 shadow-slate-200/50'
                        }`}
                >
                    <div className="w-full h-full relative z-10">
                        <SmartBarChart
                            data={data}
                            view={view}
                            onViewChange={(newView: any) => setView(newView)}
                            dataKeys={{
                                date: 'date',
                                value: 'value',
                                label: 'label'
                            }}
                            axisLabels={{ x: 'Date', y: 'Sales' }}
                            height={500}
                            geminiConfig={{
                                apiKey: GEMINI_API_KEY,
                                model: 'gemini-pro'
                            }}
                            theme={{
                                bar: {
                                    maxWidth: 50,
                                    radius: 6,
                                    opacity: 0.9
                                },
                                grid: {
                                    visible: true,
                                    strokeDasharray: '4 4',
                                    stroke: isDarkMode ? '#334155' : '#e2e8f0'
                                },
                                background: 'transparent',
                                axis: {
                                    labelColor: isDarkMode ? '#94a3b8' : '#64748b',
                                    tickColor: isDarkMode ? '#475569' : '#cbd5e1',
                                    fontSize: 12
                                },
                                tooltip: {
                                    backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
                                    textColor: isDarkMode ? '#f1f5f9' : '#1e293b'
                                }
                            }}
                        />
                    </div>
                </div>

                <p className={`text-sm max-w-2xl text-center transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Experience the power of adaptive visualization. Use the calendar icon to filter by year/month/week.
                    Enable Gemini AI to predict future trends.
                </p>
            </div>
        </Section>
    );
};
