import React from 'react';
import axios from 'axios';

import Card from '../Card';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      univName: 'berkeley',
      univCountry: 'united states',
      universities: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    // console.log('A search was submitted: ' + this.state.univName + ', ' + this.state.univCountry);
    axios.get('//universities.hipolabs.com/search?name=' + this.state.univName + '&country=' + this.state.univCountry)
      .then(res => {
        const universities = res.data;
        this.setState({ universities });
        // console.log(this.state.universities);
      });  
    event.preventDefault();
  }

  componentDidMount() {
    axios.get('//universities.hipolabs.com/search?name=' + this.state.univName + '&country=' + this.state.univCountry)
      .then(res => {
        const universities = res.data;
        this.setState({ universities });
        // console.log(this.state.universities);
      });    
  }

  render() {
    return(
      <div>
        <section className="hero is-info university-search">
          <div className="hero-body">
            <div className="container is-max-desktop">
              <h1 className="title">
                Search Universities!
              </h1>
              <form onSubmit={this.handleSubmit}>
                <div className="field is-grouped">
                  <div className="control is-expanded">
                    <label className="label">University Name</label>
                    <input className="input" type="text" placeholder="" name="univName" value={this.state.univName} onChange={this.handleChange} />
                  </div>
                  <div className="control">
                    <label className="label">Country</label>
                    <input className="input" type="text" placeholder="" name="univCountry" value={this.state.univCountry} onChange={this.handleChange} />
                  </div>
                  <div className="control">
                    <label className="label">&nbsp;</label>
                    <button className="button is-primary" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="section university-list">
          <div className="columns is-multiline">
            { this.state.universities.map((university, i) => <Card key={i} cc={university.alpha_two_code} name={university.name} country={university.country} url={university.web_pages[0]}></Card>)}
          </div>
        </section>
      </div>
    );
  }
}