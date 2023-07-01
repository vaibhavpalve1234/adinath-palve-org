import React from 'react';
import './Header/Header.css'
import HeaderContainer from './Header/HeaderContainer'
import Details from './Details/Details';
import Footer from './Footer/Footer';
import MultipleVideoPlayer from './platform/MultipleVideoPlayer';
import Slider from './Slider/Slider';
import PhotoGallery from './Photo/PhotoGallery';

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
        { src: '4AHew1QqXDo', opts: { ...opts, playerVars: { autoplay: 1, mute: 0, start: 50 , end:56, loop:1 } }, details:"main song" },
        { src: 'yyrpJNcqHTA', opts, details:"संतोष नगर मैं शिवसेना शाखा प्रमुख की तरफ से जरूरतमंद 300 परिवारों को राशन सामग्री दी गई" },
        { src: 'S7L4-JnQfiY', opts, details:"शिवसेनेचे शाखाप्रमुख आदिनाथ पालवे यांचा वाढदिवस मोठ्या उत्साहात साजरा." },
        { src: 'GQlll2MI0wM', opts, details:"वाढदिवसाच्या शिवमय शुभेच्छा आदिनाथ पालवे जी" },
        { src: '8lK-sxr9kmo', opts: { ...opts, playerVars: {  start:55 } }, details:"सर्वजनक गणेश उत्सव मंडल के प्रयासों से संतोष नगर मै 7 लाख रुपए की निधि से विकास कार्यों का भूमिपूजन" },
        { src: 'g50DvfSgNew', opts, details:"धर्मवीर" },
        { src: 'YlIc_kOQufw', opts, details:"सामुदायिक वाढदिवस सोहळा संतोषनगर उल्हासनगर ३" },
        { src: 'eknr5tuiLHU', opts, details:"बाबा साहेब १३१ वॉं जयंती समारोह संतोषनगर उल्हासनगर ३" },
        { src: 'sHJFKU7S41Y', opts, details:"उल्हासनगरमधील सेंट्रल रुग्णालयाची दुरावस्था." },
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
            <span></span>
            <div>
                <Footer />
            </div>
            <hr/>
            <div className="text-center">
                <p> Copyright @ 2023. All Right Reserved. <strong>Adinath palve</strong> | Developed & design <strong>Vaibhav palve</strong></p>
            </div>
        </div>
    )
}
