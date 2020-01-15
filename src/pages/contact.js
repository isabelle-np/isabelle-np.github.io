import React from 'react';
import Layout from '../components/layout';
import Title from '../components/title';

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }

    render () {
        return (
            <Layout>
        <Title title="Contact" subtitle="Think I'm a good fit for your team? I'd love to talk."></Title>
        <div>
        <form id="contact-form" /*onSubmit={this.handleSubmit.bind(this)}*/ method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" /*value={this.state.name} onChange={this.onNameChange.bind(this)}*/ />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" /*value={this.state.email} onChange={this.onEmailChange.bind(this)}*/ />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5" /*value={this.state.message} onChange={this.onMessageChange.bind(this)}*/ />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
        </div>
    </Layout>
        )
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
    handleSubmit(event) {
    }
}
export default Contact;