'use client'

import React, { useEffect, useState } from 'react';
import Userheader from '../../components/Userheader';
import Leftsidemenu from '../../components/Leftsidemenu';
import Userfooter from '../../components/Userfooter';
import Livepricelist from '../livepricelist';
import Chart from '../chart';
import Orderbook from '../orderbook';
import Orderform from '../orderform';
import Openorder from '../openorder';
import Tradehistory from '../tradehistory';
import BuySelltab from '../buyselltab';
import Marketlist from '../marketlist';
import Recentliveprice from '../recentliveprice';
import Walletassets from '../walletassets';
import { Container, Modal, Image } from 'react-bootstrap';
import 'simplebar-react/dist/simplebar.min.css';

const Desktoppage = () => {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(true); // Opens automatically when the page loads
    }, []);

    const handleCloseModal = () => setShowModal(false);

    const [windowWidth, setWindowWidth] = useState(0); // Safe initial value

    const chartTab = (event) => {
        const element1 = document.getElementById("tradepage");
        element1?.classList.add("chartactive");
        element1?.classList.remove("openorderactive", "tradeactive");
    };

    const orderTab = (event) => {
        const element1 = document.getElementById("tradepage");
        element1?.classList.remove("chartactive", "tradeactive");
        element1?.classList.add("openorderactive");
    };

    const tradeTab = (event) => {
        const element1 = document.getElementById("tradepage");
        element1?.classList.remove("chartactive", "openorderactive");
        element1?.classList.add("tradeactive");
    };

    useEffect(() => {
        document.body.classList.add('tradepagbg');

        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);

            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                document.body.classList.remove('tradepagbg');
            };
        }
    }, []);

    useEffect(() => {
        const tradepageElement = document.getElementById('tradepage');
        if (!tradepageElement) return;

        // if (windowWidth < 767) {
        //   tradepageElement.classList.remove('buyorderformactive1');
        // } else if (windowWidth < 991) {
        //   tradepageElement.classList.add('buyorderformactive1');
        // }
    }, [windowWidth]);

    return (
        <div className="pagecontent gridpagecontent tradepage chartactive buyorderformactive1" id="tradepage">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox tradecontentbox">
                <Container className="container sitecontainer">
                    <div className="grid-box pb-3">
                        <div className="mobilegrid tabs-nav">
                            <li className="orderlist"><a href="#tab-1" onClick={chartTab}>Chart</a></li>
                            <li className="orderlist"><a href="#tab-2" onClick={orderTab}>Open Orders</a></li>
                            <li className="orderlist"><a href="#tab-3" onClick={tradeTab}>Trade History</a></li>
                        </div>
                        <BuySelltab />
                        <Recentliveprice />
                        <Livepricelist />
                        <Chart />
                        <Marketlist />
                        <Orderbook />
                        <Orderform />
                        <Openorder />
                        <Tradehistory />
                        <Walletassets />
                    </div>
                </Container>
            </article>
            <Userfooter />
            <Modal show={showModal} onHide={handleCloseModal} className='modalbgt authmodal mtpopupbg' centered>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center">

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='text-center mb-3'>
                        <Image src="./assets/images/trademaintendance.png" className='maintenanceimg' />
                    </div>
                    <h4 className='subhead text-center pb-1'>Maintenance in Progress</h4>
                    <p className='t-gray text-center'> We are currently performing system optimization and maintenance, and the
                        chart and trading functions for certain tokens are temporarily unavailable. </p>

                    <div className='lightgraybg mb-2'>
                        <p className='content'><span><Image src="./assets/images/tick.svg" className='timg' /> </span> All wallet balances and holdings remain accurate and unaffected.</p>
                        <p className='content'><span><Image src="./assets/images/tick.svg" className='timg' /> </span> Your funds are 100% safe and secure.</p>
                        <p className='content'><span><Image src="./assets/images/tick.svg" className='timg' /> </span> Deposits, withdrawals, and token balances are not affected.</p>
                        <p className='content mb-0'><span><Image src="./assets/images/tick.svg" className='timg' /> </span> Your tokens have not been lost and remain fully protected.</p>
                    </div>

                    <p className='content t-gray text-center mb-1'>
                        Our team is actively working to restore full service as quickly as possible.
                    </p>

                    <p className='content t-gray text-center m-0'>
                        Thank you for your patience and understanding.
                    </p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Desktoppage;
