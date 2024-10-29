import React, { Component } from 'react';
import msgservice from '../services/msgservice';
import AdminNav from './AdminNav';
import format from 'date-fns/format';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

// Import your custom CSS file

export default class Msglist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msges: [],
            currentPage: 1,
            itemsPerPage: 5
        };
    }

    componentDidMount() {
        msgservice.getallMsges().then((res) => {
            this.setState({ msges: res.data });
        });
    }



    render() {
        const { msges, currentPage, itemsPerPage } = this.state;
        const indexOfLastMsg = currentPage * itemsPerPage;
        const indexOfFirstMsg = indexOfLastMsg - itemsPerPage;
        const currentMsges = msges.slice(indexOfFirstMsg, indexOfLastMsg);

        let serialNumber = indexOfFirstMsg + 1;

        return (
            <>
                <AdminNav>

                    <div id='new' className="container">
                        <h2 id='h2' >Messages Received From Customers</h2>
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sr.No</th>
                                        <th>Name</th>
                                        <th>EmailId</th>
                                        <th>Message</th>
                                        <th>Date & Time</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentMsges.map(contactus => (
                                        <tr key={contactus.id}>
                                            <td>{serialNumber++}</td>
                                            <td>{contactus.fullName}</td>
                                            <td>{contactus.emailId}</td>
                                            <td>{contactus.messageBox}</td>
                                            <td>{format(new Date(contactus.sendDateTime), "dd-MM-yyyy  HH:mm:ss")}</td>
                                            <td> <Link
                                                to={{
                                                    pathname: '/sendreply',
                                                    search: `?email=${contactus.emailId}&fullName=${contactus.fullName}`,
                                                }}
                                                className='btn btn-info'
                                            >
                                                SEND REPLY
                                            </Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="pagination">
                            <button
                                onClick={() => this.setState({ currentPage: currentPage - 1 })}
                                disabled={currentPage === 1}
                                className='btn btn-outline-dark me-4'
                                id='prev'
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => this.setState({ currentPage: currentPage + 1 })}
                                disabled={indexOfLastMsg >= msges.length}
                                className='btn btn-outline-dark'
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </AdminNav>


            </>
        );
    }
}
