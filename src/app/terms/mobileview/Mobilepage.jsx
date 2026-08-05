"use client"
import React, { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const page = () => {

    const { openMenu } = useSideMenu();
    
    return (
        <>
            <div className="mobilebg mx-2">
                <article className="innerpage terms-page">
                    <div className="innerpages">

                        <div className="mbheadingbox">
                            <div className="humberbutton">
                                <a href="/dashboard" type="button" className="backbtn" id="backbtn" >
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </a>
                            </div>

                            <div className="flex-one-cls flex-grow-1 text-center w-100">
                                <h2 className="heading-title text-center mb-0 pb-0 flex-1">Terms And Conditions</h2>
                            </div>
                            <div className="humberbutton" onClick={openMenu}>
                                <button type="button" className="menubtn border-0 p-0" id="menubtn">
                                    <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                                </button>
                            </div>
                        </div>

                        <Container>
                            <div className="terms-cont panelcontentbox mt-2">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                            </div>
                        </Container>
                    </div>
                </article>
                <MobileFooterNav />
            </div>
        </>
    )
}

export default page