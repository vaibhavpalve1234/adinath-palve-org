import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './PhotoGallery.css';
import Slider from './PhotoSlider';
const PhotoGallery = () => {
    // Example photo data
    const photos = [
        {
            id: 1,
            src: 'https://lh3.googleusercontent.com/pw/AJFCJaWa6Nfnpt8QiQhFRhM9z6itWzSv7oM9WlZ_pmNCGMtlLvtmQ56kHFU53UWNqvgY9HOKJLt0_h7-2oZE-eTKUs-w5vozVjEiB-TEvnbdeh16maMNtmEKuqkhuZ64RfqY9kcZaLbF4Fn3BCbqFWLy0nyCNw=w200-h160-s-no?authuser=0',
            caption: 'covid ',
        },
        {
            id: 2,
            src: 'https://lh3.googleusercontent.com/pw/AJFCJaWNJiTWRno4tPVwloAE6blSRbEGwz4o8rLLemA-uFOGG97eXnCkIPMwPkYLq-iGBCT17eCU94Y0vTHqos5Ks4kBpdKJJ9hHzFA88u6NJOt6v8Nk99gGzd77rBGk-9mTXnfRs_Kb8JIKEIVh6Th-8Aze=w180-h160-s-no?authuser=0',
            caption: 'covid ',
        },
        {
            id: 3,
            src: 'https://lh3.googleusercontent.com/pw/AJFCJaWhpOZT_WKbhjkMpCloynP4rnL4YD0G5ppm_c_A2HKNWH7AArV4eriXsWfKpP2eppd5ttavuaKA_wKGo701ILQZR0-EQfH8xbnuu83XsMW5tgzeULv25frG3r75X6DE7QANA2cXaVGbMdP4yN1ssdJeIg=w180-h160-s-no?authuser=0',
            caption: 'covid ',
        },
        {
            id: 4,
            src: 'https://lh3.googleusercontent.com/pw/AJFCJaUtRPi8gbPpRfOFL7yQvAxAcwPvkb7cQXbxYRvAysxD5qFr_LRv7v--t1H_5HD4Tp1RyQW5F43B2Mu7rg7cFyp6g13RXu1kTidyUkXIY8DX3lODPdFDeJV5kI6ltSuvjJA3QcXQlmImJWfiBr2T55KbSA=w180-h160-s-no?authuser=0',
            caption: 'covid ',
        },
        {
            id: 5,
            src: 'https://lh3.googleusercontent.com/pw/AJFCJaVFE1MqTGKxzLZzFLl3WqFxCzcsmL7SvIEFNcBgclMMBTqvu9IK_0SB2WoNX6X1v3jOGZkRTLK2EHRdXBsAyxmLFkZomE-ClyQVXA0tdQ09FS92ksdt34ZUflThHOccJmfXvQrUVhhn8hyHBzXchS3kgg=w180-h160-s-no?authuser=0',
            caption: 'covid ',
        },
        {
            id: 6,
            src: 'https://lh3.googleusercontent.com/pw/AJFCJaVlvMqP0Lbq-CQ19gOXaA6op788tkBIk4_fmf1JrjtdQAHQnPRem_E2_SgMycoIuA81c42yxgUPtgrch74WlMtJIcdnV-JsmwXT_tDMbyWZ6AuRiTQx3Bwzq_9eQ1ISwgrCcMMfEgeBc_HCHVHTkXIr0w=w180-h160-s-no?authuser=0',
            caption: 'covid ',
        },
        {
            id: 7,
            src: 'https://lh3.googleusercontent.com/pw/AJFCJaUvenlsuKJysDtItlhykiUC4DoaPKIO7MPHKXtTpBoK5TqWc_d1jVrbUtI-jO-svGmSJH6CRz-x97YAmPiMENadfMBkJdWdI9IPOM1wOqP4uUwwXuU04FnFWtDLUlW_F4lATJyIIn_FVNtibD66h9-PNg=w180-h160-s-no?authuser=0',
            caption: 'covid ',
        },
        {
            id: 8,
            src: 'https://lh3.googleusercontent.com/pw/AJFCJaXACgEmE2FSJjVfjJWJs8cE9LOi9rtENbY5WdpQq1nsunE0ZCNh6Ze8pgZZGSj_nstpzGGqfyQ_0VvisK4Yt2Et4itQzR1PthjR24L9xQrArh1ASwPM27Stf_-Uy0mBowi_sMuU8cCilheRuTOSbw9qcw=w180-h160-s-no?authuser=0',
            caption: 'covid ',
        },
        {
            id: 9,
            src: 'https://lh3.googleusercontent.com/pw/AJFCJaU2PLLsBwUgY3UNjC-hX91aHiNOvzZOAX5SA0cpkY-g9WcxbMOzuBgx-Csc9z6s3_J1yvQCZzysMskO4e-2Z51k5YsLhb23onYBh-WU58fveK7-lbizxEnjNhbEaTPOLkJPfK-iHQZo9gyFBJ39SpY2=w180-h160-s-no?authuser=0',
            caption: 'covid ',
        },
        {
            id: 10,
            src: 'https://lh3.googleusercontent.com/pw/AJFCJaU99ACWWruppjXMFdqY2YCkP81e7NKlJeq7OWa3UqK0tP1bTtN5TiOGOzCyFHipXs7Va1g9EYKszQsfXK5vQt6aWWSg6jCctBoRxuR8G1eI85YbCtEUWE9f2Nta-QKaG9r94m1CRwErYwRNwQBI_sS3=w180-h160-s-no?authuser=0',
            caption: 'covid ',
        },
    ];
    const expandPhotoes = [{
        id: 1,
        src: 'https://lh3.googleusercontent.com/pw/AJFCJaVvZJNP_r0VKtg-ZNgqwvGaM8_ho0QIpRf-6bwCL75K_DNFwTkUsLCh_UXoiVRHYQB6JJoonyYYlMVcyLlkQMhlu0KalBVb62ObesEOXTlk2B--JxB4RHO2MyitPO6-oWm4tpOOLMyk0qHdADfvvFAKiA=w831-h960-s-no?authuser=0',
        caption: 'covid 1',
    },
    {
        id: 2,
        src: 'https://lh3.googleusercontent.com/pw/AJFCJaWNJiTWRno4tPVwloAE6blSRbEGwz4o8rLLemA-uFOGG97eXnCkIPMwPkYLq-iGBCT17eCU94Y0vTHqos5Ks4kBpdKJJ9hHzFA88u6NJOt6v8Nk99gGzd77rBGk-9mTXnfRs_Kb8JIKEIVh6Th-8Aze=w831-h960-s-no?authuser=0',
        caption: 'covid2 ',
    },
    {
        id: 3,
        src: 'https://lh3.googleusercontent.com/pw/AJFCJaWhpOZT_WKbhjkMpCloynP4rnL4YD0G5ppm_c_A2HKNWH7AArV4eriXsWfKpP2eppd5ttavuaKA_wKGo701ILQZR0-EQfH8xbnuu83XsMW5tgzeULv25frG3r75X6DE7QANA2cXaVGbMdP4yN1ssdJeIg=w831-h960-s-no?authuser=0',
        caption: 'covid 4',
    }, {
        id: 4,
        src: 'https://lh3.googleusercontent.com/pw/AJFCJaUtRPi8gbPpRfOFL7yQvAxAcwPvkb7cQXbxYRvAysxD5qFr_LRv7v--t1H_5HD4Tp1RyQW5F43B2Mu7rg7cFyp6g13RXu1kTidyUkXIY8DX3lODPdFDeJV5kI6ltSuvjJA3QcXQlmImJWfiBr2T55KbSA=w831-h960-s-no?authuser=0',
        caption: 'covid 5 ',
    },
    {
        id: 5,
        src: 'https://lh3.googleusercontent.com/pw/AJFCJaVFE1MqTGKxzLZzFLl3WqFxCzcsmL7SvIEFNcBgclMMBTqvu9IK_0SB2WoNX6X1v3jOGZkRTLK2EHRdXBsAyxmLFkZomE-ClyQVXA0tdQ09FS92ksdt34ZUflThHOccJmfXvQrUVhhn8hyHBzXchS3kgg=w831-h960-s-no?authuser=0',
        caption: 'covid 6',
    },
    {
        id: 6,
        src: 'https://lh3.googleusercontent.com/pw/AJFCJaVlvMqP0Lbq-CQ19gOXaA6op788tkBIk4_fmf1JrjtdQAHQnPRem_E2_SgMycoIuA81c42yxgUPtgrch74WlMtJIcdnV-JsmwXT_tDMbyWZ6AuRiTQx3Bwzq_9eQ1ISwgrCcMMfEgeBc_HCHVHTkXIr0w=w831-h960-s-no?authuser=0',
        caption: 'covid7 ',
    },
    {
        id: 7,
        src: 'https://lh3.googleusercontent.com/pw/AJFCJaUvenlsuKJysDtItlhykiUC4DoaPKIO7MPHKXtTpBoK5TqWc_d1jVrbUtI-jO-svGmSJH6CRz-x97YAmPiMENadfMBkJdWdI9IPOM1wOqP4uUwwXuU04FnFWtDLUlW_F4lATJyIIn_FVNtibD66h9-PNg=w831-h960-s-no?authuser=0',
        caption: 'covid ',
    },
    {
        id: 8,
        src: 'https://lh3.googleusercontent.com/pw/AJFCJaXACgEmE2FSJjVfjJWJs8cE9LOi9rtENbY5WdpQq1nsunE0ZCNh6Ze8pgZZGSj_nstpzGGqfyQ_0VvisK4Yt2Et4itQzR1PthjR24L9xQrArh1ASwPM27Stf_-Uy0mBowi_sMuU8cCilheRuTOSbw9qcw=w831-h960-s-no?authuser=0',
        caption: 'covid ',
    },
    {
        id: 9,
        src: 'https://lh3.googleusercontent.com/pw/AJFCJaU2PLLsBwUgY3UNjC-hX91aHiNOvzZOAX5SA0cpkY-g9WcxbMOzuBgx-Csc9z6s3_J1yvQCZzysMskO4e-2Z51k5YsLhb23onYBh-WU58fveK7-lbizxEnjNhbEaTPOLkJPfK-iHQZo9gyFBJ39SpY2=w831-h960-s-no?authuser=0',
        caption: 'covid 3',
    },
    {
        id: 10,
        src: 'https://lh3.googleusercontent.com/pw/AJFCJaU99ACWWruppjXMFdqY2YCkP81e7NKlJeq7OWa3UqK0tP1bTtN5TiOGOzCyFHipXs7Va1g9EYKszQsfXK5vQt6aWWSg6jCctBoRxuR8G1eI85YbCtEUWE9f2Nta-QKaG9r94m1CRwErYwRNwQBI_sS3=w831-h960-s-no?authuser=0',
        caption: 'covid ',
    },

    ]
    const [expandedImage, setExpandedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);


    const handleImageClick = ({ image, i }) => {
        setExpandedImage({ image, i });
        setShowModal(true);
    };

    const handleCloseClick = () => {
        setExpandedImage(null);
        setShowModal(false);

    };

    return (
        <div className='display-flex'>
            <div className="multiple-video-player">
                <div className="video-list">
                    {photos.map((image, i) => (
                        <div key={image.id} className="image-item" >
                            <img
                                src={image.src}
                                alt={image.alt}
                                onClick={() => handleImageClick({ image, i })} />
                        </div>
                    ))}
                    {expandedImage && (
                        <Modal show={showModal} onHide={handleCloseClick}>
                            <Modal.Header closeButton>
                                <Modal.Title>Image Description</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Slider img={expandPhotoes[expandedImage.i]} />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={handleCloseClick}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;
