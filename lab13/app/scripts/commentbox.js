
import React from 'react';
import $ from 'jquery';

import CommentList from './commentlist.js';
import CommentForm from './commentform.js';
import { store, ActionTools } from './flux'; 

module.exports = React.createClass({
	componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
        this.setState({
            data: store.getState().data
        });
    });
},
componentWillUnmount: function() {
    this.unsubscribe();
},

    getInitialState: function() {
        return {data: []};
    },
    handleCommentSubmit: function(comment) {
        var comments = this.state.data;
        comment.id = Date.now();
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
		store.dispatch(ActionTools.addComment(comment));
    },
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});
