import React, { useRef, useEffect, useState } from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import balashaheb from '../../images/balashaheb.jpg';
import icon from '../../images/icon.jpg'
import partyicon from '../../images/shivsene.jpg'
import './Details.css'


export default function App() {
    const myElementRef = useRef(null);
    const [showTransaction, setShowTransaction] = useState(false);
    useEffect(() => {
        setShowTransaction(true);
    }, []);

    useEffect(() => {
        if (myElementRef.current) {
            const styles = window.getComputedStyle(myElementRef.current);
            if (!styles) {
                return MDBCarouselItem.setAttribute('style', `align-content: fixed`);
            }
        }
    }, []);

    return (
        <div ref={myElementRef}>
            <MDBCarousel showIndicators showControls fade dealy={5000}>
                <MDBCarouselItem
                    className='w-100 d-md-block mt-50'
                    src='https://wallpapercave.com/wp/wp7971825.jpg'
                    alt=''
                    width={"100%"}
                    height={"600px"}
                >
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-100 d-md-block mt-50'
                    src={balashaheb}
                    alt='...'
                    width={"100%"}
                    height={"600px"}
                >
                    <div className='banner'>
                        <div className="container mb-5">
                            <div className="row">
                                <div className="col-md-6 order-6 ">
                                    <div className={`text-transaction ${showTransaction ? 'show' : ''}`}>
                                        <h4>एकच साहेब बाळासाहेब : बाळासाहेब ठाकरे</h4>
                                        <p className='color-red'>2002 मध्ये, ठाकरे यांनी बृहन मुंबई महानगरपालिका निवडणुकीत शिवसेनेचे प्रचार प्रभारी म्हणून आपली राजकीय कारकीर्द सुरू केली जिथे पक्षाने चांगली कामगिरी केली. 2003 मध्ये त्यांची शिवसेनेच्या कार्याध्यक्षपदी नियुक्ती झाली. उद्धव यांनी 2006 मध्ये पक्षाचे मुखपत्र सामना (शिवसेनेचे दैनिक मराठी भाषेतील वृत्तपत्र) चे मुख्य संपादक म्हणून पदभार स्वीकारला आणि महाराष्ट्राचा मुख्यमंत्री होण्यापूर्वी 2019 मध्ये राजीनामा दिला. त्यांचे चुलत बंधू राज ठाकरे यांनी पक्ष सोडल्यानंतर शिवसेनेत फूट पडली. 2006 मध्ये महाराष्ट्र नवनिर्माण सेना नावाचा स्वतःचा पक्ष स्थापन केला. 2012 मध्ये त्यांचे वडील बाळ ठाकरे यांच्या निधनानंतर त्यांनी पक्षाचे नेतृत्व केले आणि 2013 मध्ये शिवसेनेच्या अध्यक्षपदी निवडून आले आणि त्यांच्या नेतृत्वाखाली शिवसेना 2014 मध्ये महाराष्ट्रात एनडीए सरकारमध्ये सामील झाली. 2019 मध्ये शिवसेनेने एनडीएशी फारकत घेतली आणि यूपीएमध्ये सामील झाले. महाराष्ट्रात सरकार स्थापन करण्यासाठी त्यांनी महाविकास आघाडी नावाची उपआघाडी स्थापन केली, ज्याचे नेतृत्व उद्धव ठाकरे यांनी केले. 2022 मध्ये, पक्षाच्या बैठकीत, उद्धव ठाकरे यांनी यूपीएमध्ये सामील होण्यासाठी एनडीएमधून बाहेर पडण्याच्या त्यांच्या हालचालीचे स्पष्टीकरण दिले. "भाजपला त्यांच्या राष्ट्रीय महत्त्वाकांक्षा पूर्ण करता याव्यात यासाठी आम्ही त्यांना मनापासून पाठिंबा दिला. आम्ही महाराष्ट्रात नेतृत्व करत असताना ते राष्ट्रीय होतील, अशी समज होती. पण आमचा विश्वासघात झाला आणि आमच्या घरातच आम्हाला उद्ध्वस्त करण्याचा प्रयत्न झाला. त्यामुळे आम्हाला प्रत्युत्तर द्यावे लागले. " भाजप आपल्या राजकीय सोयीनुसार मित्रपक्षांना डावलत असल्याचा आरोप ठाकरे यांनी केला. ते म्हणाले, "भाजपचा अर्थ हिंदुत्व नाही. शिवसेनेने भाजपशी युती करून २५ वर्षे वाया घालवली, या माझ्या मतावर मी ठाम आहे.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className={`advanced-transaction ${showTransaction ? 'show' : ''}`}>
                                        <img src={icon} className='img-thumbnail' alt="not found" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-100% d-md-block mt-50'
                    src='https://www.successyeti.com/wp-content/uploads/2021/07/balasaheb-thackeray-a-true-inspiration-know-the-journey-719x405.jpg'
                    alt='...'
                    width={"100%"}
                    height={"600px"}
                >
                    <div className='banner'>
                        <div className="container mt-10">
                            <div className="row">
                                <div className="col-md-6 order-6 ">
                                    <div className={`text-transaction ${showTransaction ? 'show' : ''}`}>
                                        <h4>🚩<strong>I am a mad hindu mad mad hindu!! </strong> </h4>
                                        <p >
                                            <strong>
                                                2002 मध्ये, ठाकरे यांनी बृहन मुंबई महानगरपालिका निवडणुकीत शिवसेनेचे प्रचार प्रभारी म्हणून आपली राजकीय कारकीर्द सुरू केली जिथे पक्षाने चांगली कामगिरी केली. 2003 मध्ये त्यांची शिवसेनेच्या कार्याध्यक्षपदी नियुक्ती झाली. उद्धव यांनी 2006 मध्ये पक्षाचे मुखपत्र सामना (शिवसेनेचे दैनिक मराठी भाषेतील वृत्तपत्र) चे मुख्य संपादक म्हणून पदभार स्वीकारला आणि महाराष्ट्राचा मुख्यमंत्री होण्यापूर्वी 2019 मध्ये राजीनामा दिला. त्यांचे चुलत बंधू राज ठाकरे यांनी पक्ष सोडल्यानंतर शिवसेनेत फूट पडली. 2006 मध्ये महाराष्ट्र नवनिर्माण सेना नावाचा स्वतःचा पक्ष स्थापन केला. 2012 मध्ये त्यांचे वडील बाळ ठाकरे यांच्या निधनानंतर त्यांनी पक्षाचे नेतृत्व केले आणि 2013 मध्ये शिवसेनेच्या अध्यक्षपदी निवडून आले आणि त्यांच्या नेतृत्वाखाली शिवसेना 2014 मध्ये महाराष्ट्रात एनडीए सरकारमध्ये सामील झाली. 2019 मध्ये शिवसेनेने एनडीएशी फारकत घेतली आणि यूपीएमध्ये सामील झाले. महाराष्ट्रात सरकार स्थापन करण्यासाठी त्यांनी महाविकास आघाडी नावाची उपआघाडी स्थापन केली, ज्याचे नेतृत्व उद्धव ठाकरे यांनी केले. 2022 मध्ये, पक्षाच्या बैठकीत, उद्धव ठाकरे यांनी यूपीएमध्ये सामील होण्यासाठी एनडीएमधून बाहेर पडण्याच्या त्यांच्या हालचालीचे स्पष्टीकरण दिले. "भाजपला त्यांच्या राष्ट्रीय महत्त्वाकांक्षा पूर्ण करता याव्यात यासाठी आम्ही त्यांना मनापासून पाठिंबा दिला. आम्ही महाराष्ट्रात नेतृत्व करत असताना ते राष्ट्रीय होतील, अशी समज होती. पण आमचा विश्वासघात झाला आणि आमच्या घरातच आम्हाला उद्ध्वस्त करण्याचा प्रयत्न झाला. त्यामुळे आम्हाला प्रत्युत्तर द्यावे लागले. " भाजप आपल्या राजकीय सोयीनुसार मित्रपक्षांना डावलत असल्याचा आरोप ठाकरे यांनी केला. ते म्हणाले, "भाजपचा अर्थ हिंदुत्व नाही. शिवसेनेने भाजपशी युती करून २५ वर्षे वाया घालवली, या माझ्या मतावर मी ठाम आहे.
                                            </strong> </p>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className={`advanced-transaction ${showTransaction ? 'show' : ''}`}>
                                        <img src={partyicon} className='img-thumbnail' alt="not found" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MDBCarouselItem>
            </MDBCarousel>

        </div>

    );
}