import React, { useState } from 'react';
import { Section } from './Section';
import { Play, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SPOTIFY_SHOW_ID = '1T78UUhRzYSwrqj2Iu4N2o';

// Placeholder episodes replaced with real Episode IDs
const PODCAST_EPISODES = [
    { id: '5aeZ7Sp94tbbIIErzJ4OWd', title: 'Tech Talk: Future of AI', duration: '45 min' },
    { id: '5YZ0DEOkYqE2ysEM1gMgll', title: 'React Native vs Flutter', duration: '32 min' },
    { id: '1KE4Ly4kACEAtnmijhNYjt', title: 'Scaling Systems', duration: '28 min' },
    { id: '6a4B5c6D7e8F9g0H1i2J3k', title: 'Developer Productivity', duration: '40 min' }, // Placeholder ID
];

export const Podcast: React.FC = () => {
    const { t } = useTranslation();
    const [activeEpisode, setActiveEpisode] = useState(PODCAST_EPISODES[0]);

    return (
        <Section id="podcast" title={t('podcast_title')} subtitle={t('podcast_subtitle')} className="bg-slate-50">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Player */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden p-6 border border-slate-100 h-fit">
                    <div className="mb-4 flex items-center gap-2 text-primary-600 font-semibold">
                        <Play size={20} fill="currentColor" />
                        <span>{t('playing_now')}: {activeEpisode.title}</span>
                    </div>
                    <iframe
                        style={{ borderRadius: '12px' }}
                        // Using episode embed for playback
                        src={`https://open.spotify.com/embed/episode/${activeEpisode.id}?utm_source=generator&theme=0`}
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="Spotify Podcast"
                    ></iframe>
                </div>

                {/* Episode List */}
                <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Latest Episodes</h3>
                    <div className="space-y-3 flex-1 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                        {PODCAST_EPISODES.map((ep, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveEpisode(ep)}
                                className={`p-3 rounded-xl cursor-pointer transition-all duration-200 border ${activeEpisode.title === ep.title
                                    ? 'bg-primary-50 border-primary-200'
                                    : 'bg-slate-50 border-transparent hover:bg-slate-100'
                                    }`}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className={`font-medium ${activeEpisode.title === ep.title ? 'text-primary-700' : 'text-slate-800'}`}>
                                            {ep.title}
                                        </h4>
                                        <span className="text-xs text-slate-500">{ep.duration}</span>
                                    </div>
                                    {activeEpisode.title === ep.title && <div className="w-2 h-2 rounded-full bg-primary-500 mt-2"></div>}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                        <a
                            href={`https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold transition-all shadow-lg shadow-green-500/20"
                        >
                            <span>{t('listen_on_spotify')}</span>
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};
