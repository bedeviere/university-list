import React from 'react';
import axios from 'axios';

export default class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const apiURL = 'https://api.bedeviere.com';

    axios.post(apiURL + '/AddUsers', { email: this.state.value })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    event.preventDefault();
  }

  render() {
    return (
      <section className="hero is-dark university-newsletter">
        <div className="hero-body">
          <div className="container is-max-desktop">
            <h1 className="title">
              Want to receive updates about this project? Enter your email to subscribe!
            </h1>
            <form onSubmit={this.handleSubmit}>
              <div className="field is-grouped">
                <div className="control is-expanded">
                  <input className="input" type="text" placeholder="" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div className="control">
                  <button className="button is-primary" type="submit">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
