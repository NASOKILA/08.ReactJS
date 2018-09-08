import React from 'react';

import fetcher from '../../fetcher';

export default class Rooster extends React.Component {

    constructor(props) {
        super(props);
    }

    render = () => {

        const images = this.props.images.map(i =>
            <div key={i.id} className="roster-image-container">
                <img onClick={() => this.props.select(i.id, true)} src={i.url} />
            </div>
        )

        return (
            <section id="roster">
                {images}
            </section>
        )
    }
}