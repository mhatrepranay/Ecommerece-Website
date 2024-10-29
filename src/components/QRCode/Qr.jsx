import React from 'react'
import QRCode from 'react-qr-code'
import { useState } from 'react'
import './Qr.css'
import AdminNav from '../admin/AdminNav'

const Qr = () => {
    const [text, setText] = useState("")


    return (

        <>
            <AdminNav>


                <h3 id="h11">Enter any text or URL to generate a unique QR Code</h3>
                <div className='container' id='cont'>
                    <form>
                        <div className="form-group">
                            <input id='cont1' type="email" className="form-control" placeholder="Enter text" onChange={(e) => setText(e.target.value)} />


                            <div id="myid" className="container" style={{ height: `auto`, maxWidth: 200, width: `100%` }}>
                                <QRCode
                                    size={500}
                                    style={{ height: `auto`, maxWidth: `100%`, width: `100%` }}
                                    value={text}
                                    viewBox={`0 0 256 256`}
                                />

                            </div>

                        </div>

                    </form>
                </div>
            </AdminNav >
        </>


    )
}

export default Qr


