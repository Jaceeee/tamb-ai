import React, { Component } from 'react';
import { Image, FormGroup, FormControl } from 'react-bootstrap';
import '../stylesheets/CommentTab.css';

export default class CommentTab extends Component {
    render() {
        return (
            <div className="CommentTabContainer">
                <ul className="CommentList">
                    <li className="CommentContainer">
                        <div className="CommenterImage">
                            <Image src="http://placekitten.com/50/50" circle responsive/>
                        </div>
                        <div className="CommentText">
                            <p><a className="CommenterName">John Caesar Patac</a>Hello! This is a sample comment. This is a sample comment. This is a sample comment.This is a sample comment.</p>
                            <div className="DateSubText">on May 9, 2018</div>
                        </div>
                    </li>
                </ul>
                <form>
                    <FormGroup>
                        <FormControl type="text" placeholder="Write a comment..."/>
                    </FormGroup>
                </form>
            </div>
        )
    }
}