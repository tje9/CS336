import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
import $ from 'jquery';
import '../css/base.css';

import Person from './person.js';

module.exports = React.createClass({
  getInitialState: function() {
    return {id: '', first: '', last:'', date: ''};
  },
  handleIdChange: function(e) {
	this.setState({id: e.target.value});
	},
  handleFirstNameChange: function(e) {
    this.setState({first: e.target.value});
  },
	handleLastNameChange: function(e) {
    this.setState({last: e.target.value});
  },
  handleDateChange: function(e) {
    this.setState({date: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
	var id = this.state.id.trim();
    var first = this.state.first.trim();
	var last = this.state.last.trim();
    var date = this.state.date.trim();
    if (!first || !last) {
      return;
    }
   this.props.onPersonSubmit({id: id, first: first, last: last, date: date});
    this.setState({id: '', first: '', last: '', date: ''});
  },
  render: function() {
    return (
      <form className="personForm" onSubmit={this.handleSubmit}>
        <input
			type="number"
			placeholder="ID"
			value={this.state.id}
			onChange={this.handleIdChange}
		/>
		<input
          type="text"
          placeholder="FirstName"
          value={this.state.first}
          onChange={this.handleFirstNameChange}
        />
		<input
          type="text"
          placeholder="LastName"
          value={this.state.last}
          onChange={this.handleLastNameChange}
        />
        <input
          type="number"
          placeholder="Years w/ comp."
          value={this.state.date}
          onChange={this.handleDateChange}
        />
		
        <input type="submit" value="Post" />
      </form>
    );
  }
});


