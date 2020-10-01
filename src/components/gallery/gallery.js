import React from 'react';
import './gallery.css';
import { Picture } from '../picture/picture';

export class Gallery extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="column">
                    <Picture />
                    <Picture />
                    <Picture />
                    <Picture />
                    <Picture />
                    <Picture />
                </div>
                <div className="column">
                    <Picture />
                    <Picture />
                    <Picture />
                    <Picture />
                    <Picture />
                    <Picture />
                </div>
                <div className="column">
                    <Picture />
                    <Picture />
                    <Picture />
                    <Picture />
                    <Picture />
                    <Picture />
                </div>
                <div className="column">
                    <Picture />
                    <Picture />
                    <Picture />
                    <Picture />
                    <Picture />
                    <Picture />
                </div>
            </div>
        );
    }
}