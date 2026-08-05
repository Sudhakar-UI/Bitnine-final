import React from 'react'
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Table } from 'react-bootstrap';


const tradehistory = () => {
    return (
        <div className="wall-assets-mb">
            <h6 className="mb-1">Assets</h6>

            <div className='d-flex flex-column row-gap-2 px-1'>
                <div className='wall-assets-mb-flex'>
                    <span>BTC Available</span>
                    <span>0.223659 BTC</span>
                </div>
                <div className='wall-assets-mb-flex'>
                    <span>ETH Available</span>
                    <span>0.223659 ETH</span>
                </div>

                <a href="#" className="btn btn-sm border-green w-100">Deposit</a>

                <a href="#" className="btn btn-sm border-red w-100">Withdraw</a>
            </div>
        </div>
    )
}

export default tradehistory