import React,{Component} from 'react';
import {Image} from 'react-bootstrap';
import './Drum.css';

import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import {
    Song,
    Sequencer,
    Sampler,
} from 'react-music';

import pic1 from '../pics/Bass.png' //remove later
import kik from '../samples/Crash.wav'
import InstrumentsReducer from "../reducers/reducer-picturs&sounds";
import OrderReducer from "../reducers/reducer-displayOrder";

//remove later

export default class Drum extends Component
{
constructor(props)
{
    super(props)
    this.handlePlayToggle = this.handlePlayToggle.bind(this);
    // bootstrapUtils.addStyle(Image, 'custom');

    this.state = {
        playing: false,
    };
}
    handlePlayToggle() {
        const prevState = this.state.playing;
        this.setState({
            playing: !this.state.playing,
        });

        !prevState && this.resetPlaying();

    }

    resetPlaying(){
        setTimeout(()=>this.handlePlayToggle(), 70);
    }



    render() {

    return (
        <div>


            <button className="drumButton"
                 onClick={
                      this.handlePlayToggle
                 }
                //disabled={true}
               >
                <Image className ="drumPic"
                    // bsStyle="custom"
                    //style={{width: '150px' ,height:'150px'} }
                    src={this.props.pic}
                // rounded
                />
            </button>
                <Song playing={this.state.playing}>
                    <Sequencer
                        bars={10}>
                        <Sampler
                            sample={this.props.sound}
                            steps={[0]}
                        />

                    </Sequencer>

                </Song>
        </div>
    );
}
}


//Remove this Line in next steps
Drum.defaultProps={pic:pic1,sound:kik,id:0};

