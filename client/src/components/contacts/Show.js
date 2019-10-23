import React from 'react'
import { connect } from 'react-redux'

function ContactShow(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    { props.contact ? (
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>mobile</th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                        <td>{props.contact.name}</td>
                                        <td>{props.contact.email}</td>
                                        <td>{props.contact.mobile}</td>
                                    </tr>
                                </tbody>
                        </table>
                    ) : (
                    <div>
                        loading...
                    </div>
                ) }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        contact: state.contacts.find(contact => contact._id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(ContactShow)