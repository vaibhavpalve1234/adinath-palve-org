import React from 'react';
import './Header/Header.css';
import HeaderContainer from './Header/HeaderContainer';
import Details from './Details/Details';
import MultipleVideoPlayer from './platform/MultipleVideoPlayer';
import {
    heroSlides,
    leaderHighlights,
    videoHighlights,
    galleryPhotos,
    expandedGalleryPhotos,
    footerContent,
    appFooter,
    headerContent,
} from '../data/politicianData';
import Footer from './Footer/Footer';
import Slider from './Slider/Slider';
import PhotoGallery from './Photo/PhotoGallery';

export default function Header() {
    const opts = {
        height: '315',
        width: '360',
        playerVars: {
            autoplay: 0,
            mute: 0,
        },
    };

    const videos = videoHighlights.map((video) => ({
        src: video.videoId,
        opts: {
            ...opts,
            playerVars: {
                ...opts.playerVars,
                ...video.playerVars,
            },
        },
        details: video.details,
    }));

    return (
        <div>
            <HeaderContainer content={headerContent} />

            <section className="section-block">
                <Details slides={heroSlides} />
            </section>

            <section className="section-block">
                <div className="section-header">
                    <h2>Leader Highlights</h2>
                    <p>Profiles and key leaders shaping our community.</p>
                </div>
                <Slider images={leaderHighlights} />
            </section>

            <section className="section-block">
                <div className="section-header">
                    <h2>Video Highlights</h2>
                    <p>Recent speeches, initiatives, and community moments.</p>
                </div>
                <MultipleVideoPlayer videos={videos} />
            </section>

            <section className="section-block">
                <div className="section-header">
                    <h2>Photo Gallery</h2>
                    <p>Snapshots from events, outreach, and celebrations.</p>
                </div>
                <PhotoGallery
                    photos={galleryPhotos}
                    expandPhotoes={expandedGalleryPhotos}
                />
            </section>

            <Footer content={footerContent} />

            <hr />

            <div className="text-center">
                <p>
                    {appFooter?.copyrightText}{' '}
                    <strong>{appFooter?.owner}</strong> | Developed & Designed{' '}
                    <strong>{appFooter?.designer}</strong>
                </p>
            </div>
        </div>
    );
}
