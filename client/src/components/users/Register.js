import React from 'react' 

class Register extends React.Component {
    constructor() {
        super() 
        this.state = {
            username: '',
            email: '', 
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: this.state.username, 
            email: this.state.email, 
            password: this.state.password
        }
        console.log(formData)
    }

    render() {
        return (
            <div className="container">
                <h2>Register with us</h2>
                <form onSubmit={this.handleSubmit}>
                <div className="col-md-6">
                    <div className="form-group">
                        <label> Username </label>
                        <input type="text" value={this.state.username} onChange={this.handleChange} name="username" />
                    </div>
                   
                    <label>
                        Email
                        <input type="text" value={this.state.email} onChange={this.handleChange} name="email" />
                    </label> <br />

                    <label>
                        Password
                        <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
                    </label> <br />

                    <input type="submit" />
                    </div>
                </form>
                
            </div>
        )
    }
}

export default Register