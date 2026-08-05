'use client'

import React, { useEffect, useState } from 'react';
import Livepricelist from './livepricelist';
import Chart from './chart';
import Orderbook from './orderbook';
import Orderform from './orderform';
import Openorder from './openorder';
import Walletassets from './walletassets';
import { Container, Image } from 'react-bootstrap';
import 'simplebar-react/dist/simplebar.min.css';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Mobilepage = () => {

    const { openMenu } = useSideMenu();

    return (
        <>
            <div className="mobilebg mx-2">
                <div className="mbheadingbox">
                    <div className="humberbutton">
                        <a href="/dashboard" type="button" className="backbtn" id="backbtn" >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </a>
                    </div>
                    <div className="flex-one-cls flex-grow-1 text-center w-100">
                        <h2 className="heading-title text-center mb-0 flex-1">Trade</h2>
                    </div>
                    <div className="humberbutton" onClick={openMenu}>
                        <button type="button" className="menubtn border-0 p-0" id="menubtn">
                            <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                        </button>
                    </div>
                </div>
                <article className="">
                    <Container className="container sitecontainer">
                        <div className="d-flex flex-column row-gap-3 px-0">
                            <Livepricelist />
                            <Chart />
                            <div className='order-buy-sell-div'>
                                <div className='d-flex flex-column row-gap-1'>
                                    <Orderbook />
                                </div>
                                <div className='d-flex flex-column row-gap-1'>
                                    <Orderform />
                                    <Walletassets />
                                </div>
                            </div>
                            <Openorder />
                        </div>
                    </Container>
                </article>
            </div>
            <MobileFooterNav />
        </>

    );
};

export default Mobilepage;
