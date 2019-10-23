import React from 'react'
import { connect } from 'react-redux'
import { startSetUser } from '../../actions/user'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }       
        this.props.dispatch(startSetUser(formData, this.props)) 
        
    }

    render() {
        return (
            <div className="container">
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" value={this.state.email} onChange={this.handleChange} name="email" id="email" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" value={this.state.password} onChange={this.handleChange} name="password" id="password" className="form-control"/>
                        </div>

                        <input type="submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(Login)