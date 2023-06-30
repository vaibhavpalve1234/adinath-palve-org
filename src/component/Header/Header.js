import React from 'react';
import './Header.css'
import HeaderContainer from './HeaderContainer'
import Details from '../body/Details';
import Footer from '../Footer/Footer';
import MultipleVideoPlayer from '../platform/MultipleVideoPlayer';
import Slider from '../Slider/Slider';
import PhotoGallery from '../Photo/PhotoGallery';
import Contact from '../contact/Contact';

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

    const videos = [
        { src: '4AHew1QqXDo', opts, details:"main song" },
        { src: 'YlIc_kOQufw', opts, details:"सामुदायिक वाढदिवस सोहळा संतोषनगर उल्हासनगर ३" },
        { src: 'g50DvfSgNew', opts, details:"धर्मवीर" },
        { src: 'eknr5tuiLHU', opts, details:"बाबा साहेब १३१ वॉं जयंती समारोह संतोषनगर उल्हासनगर ३" },
        { src: 'GQlll2MI0wM', opts, details:"वाढदिवसाच्या शिवमय शुभेच्छा आदिनाथ पालवे जी" },
        { src: '8lK-sxr9kmo', opts: { ...opts, playerVars: {  start:55 } }, details:"सर्वजनक गणेश उत्सव मंडल के प्रयासों से संतोष नगर मै 7 लाख रुपए की निधि से विकास कार्यों का भूमिपूजन" },
    ];
    return (
        <div>
            <div >
                <HeaderContainer />
            </div>
            <div>
                <Details />
            </div>
            <br />
            <div>
                <Slider />
            </div>
            <br />
            <div>
                <MultipleVideoPlayer videos={videos} />
            </div>
            <br />
            <div>
                <PhotoGallery />
            </div>
            <br/>
            <div>
                <Contact />
            </div>
            <span></span>
            <div>
                <Footer />
            </div>
        </div>
    )
}