import React from 'react';

import Rooster from './Rooster';
import Details from './Details';
import fetcher from '../../fetcher';

//this is how the server take data from bioDb and epDb files.
const ROOSTER_ENPOINT = '/roster';
const DETAILS_ENDPOINT = '/character/';

export default class Characters extends React.Component {

    constructor(props) {
        super(props);

        this.state =
            {
                images: [],
                details: {
                    id: null,
                    name: null,
                    url: null,
                    bio: null
                }
            }
    }

    componentDidMount() {
        this.fetchRoaster();
        this.fetchDetails(0);
        console.log(this.state);
    }

    fetchRoaster = () =>
        fetcher.get(ROOSTER_ENPOINT, data => {

            this.setState({
                images: data.map(i => ({
                    id: i.id,
                    url: i.url
                }))

            });
        });


    fetchDetails = (id) =>
        fetcher.get(DETAILS_ENDPOINT + id, data => {

            this.setState({
                details: data
            });

        });


    selectCharacter = (id, condition) => {

        this.selected = true;
        return this.fetchDetails(id)
    }

    selected = false;

    render = () => (
        <div>
            <Rooster images={this.state.images} select={this.selectCharacter} />
            <Details {...this.state.details} selected={this.selected} />
        </div>
    )
}