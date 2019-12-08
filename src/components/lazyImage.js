import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default class LazyImage extends React.Component {
    render() {
        return (
            <LazyLoadImage
                src={this.props.src}
                width={this.props.width}
                effect="blur" />
        );
    }
};