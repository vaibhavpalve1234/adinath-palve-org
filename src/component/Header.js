import React from 'react';
import './Header/Header.css'
import HeaderContainer from './Header/HeaderContainer'
import Details from './Details/Details';
import Footer from './Footer/Footer';
import MultipleVideoPlayer from './platform/MultipleVideoPlayer';
import Slider from './Slider/Slider';
import PhotoGallery from './Photo/PhotoGallery';
import {
    heroSlides,
    leaderHighlights,
    videoHighlights,
    galleryPhotos,
    expandedGalleryPhotos,
    footerContent,
    appFooter,
} from '../data/politicianData';

export default function Header() {
    const opts = {
        height: '315',
        width: '360',
        top: 0,
        playerVars: {
            autoplay: 0,
            mute: 0
        }
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
            <div >
                <HeaderContainer />
            </div>
            <div>
                <Details slides={heroSlides} />
            </div>
            <br />
            <div>
                <Slider images={leaderHighlights} />
            </div>
            <br />
            <div>
                <MultipleVideoPlayer videos={videos} />
            </div>
            <br />
            <div>
                <PhotoGallery photos={galleryPhotos} expandPhotoes={expandedGalleryPhotos} />
            </div>
            <br/>
            <span></span>
            <div>
                <Footer content={footerContent} />
            </div>
            <hr/>
            <div className="text-center">
                <p>
                    {appFooter?.copyrightText}{' '}
                    <strong>{appFooter?.owner}</strong> | Developed & design{' '}
                    <strong>{appFooter?.designer}</strong>
                </p>
            </div>
        </div>
    )
}
