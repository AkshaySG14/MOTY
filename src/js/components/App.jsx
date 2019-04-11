import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';

import { changeImageSelected, acceptShnu, displayNice } from "../actions/index";

import "./App.css"

import row1col1 from "./images/row-1-col-1.png"
import row1col2 from "./images/row-1-col-2.png"
import row1col3 from "./images/row-1-col-3.png"
import row1col4 from "./images/row-1-col-4.png"

import row2col1 from "./images/row-2-col-1.png"
import row2col2 from "./images/row-2-col-2.png"
import row2col3 from "./images/row-2-col-3.png"
import row2col4 from "./images/row-2-col-4.png"

import row3col1 from "./images/row-3-col-1.png"
import row3col2 from "./images/row-3-col-2.png"
import row3col3 from "./images/row-3-col-3.png"
import row3col4 from "./images/row-3-col-4.png"

import row4col1 from "./images/row-4-col-1.png"
import row4col2 from "./images/row-4-col-2.png"
import row4col3 from "./images/row-4-col-3.png"
import row4col4 from "./images/row-4-col-4.png"

import nice from "./images/nice.jpeg"

class App extends React.Component {
    correct_answer = [false, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true];

    select_image(image_number) {
        let images = [...this.props.selected_images];
        images[image_number] = !images[image_number];
        this.props.changeImageSelected(images);
    }

    componentDidUpdate() {
        for (let i = 0; i < 16; i++) {
            if (this.props.selected_images[i] !== this.correct_answer[i]) {
                return;
            }
        }
        if (!this.props.accept_shnu) {
            this.props.acceptShnu();
            console.log("Nice");
            setTimeout(() => {
                this.props.displayNice()
            }, 1000);
            setTimeout(() => {
                window.location = "https://forms.gle/eU2Pv9csdQMuoTYQA"
            }, 3000);
        }
    }

    render() {
        if (!this.props.display_nice) {
            return (
                <div className="app">
                    <h2 className={this.props.accept_shnu ? "shnu-fade-out" : ""}>
                        Please Select All Images Below That Match Shnu
                    </h2>

                    <div className="row">
                        <div className="brightness">
                            <img
                                src={row1col1}
                                className={this.props.accept_shnu ? "shnu-fade-out" :
                                    this.props.selected_images[0] ? "img-thumbnail selected" : "img-thumbnail normal"}
                                onClick={() => {
                                    this.select_image(0)
                                }}
                            />
                        </div>
                        <div className="brightness">
                            <img
                                src={row1col2}
                                className={this.props.accept_shnu ? "shnu-fade-out" :
                                    this.props.selected_images[1] ? "img-thumbnail selected" : "img-thumbnail normal"}
                                onClick={() => {
                                    this.select_image(1)
                                }}
                            />
                        </div>
                        <div className="brightness">
                            <img
                                src={row1col3}
                                className={this.props.accept_shnu ? "shnu-fade-out" :
                                    this.props.selected_images[2] ? "img-thumbnail selected" : "img-thumbnail normal"}
                                onClick={() => {
                                    this.select_image(2)
                                }}
                            />
                        </div>
                        <div className="brightness">
                            <img
                                src={row1col4}
                                className={this.props.accept_shnu ? "shnu-fade-out" :
                                    this.props.selected_images[3] ? "img-thumbnail selected" : "img-thumbnail normal"}
                                onClick={() => {
                                    this.select_image(3)
                                }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="brightness">
                            <img
                                src={row2col1}
                                className={this.props.accept_shnu ? "shnu-fade-out" :
                                    this.props.selected_images[4] ? "img-thumbnail selected" : "img-thumbnail normal"}
                                onClick={() => {
                                    this.select_image(4)
                                }}
                            />
                        </div>
                        <div className="brightness">
                            <img
                                src={row2col2}
                                className={this.props.accept_shnu ? "shnu-fade-out" :
                                    this.props.selected_images[5] ? "img-thumbnail selected" : "img-thumbnail normal"}
                                onClick={() => {
                                    this.select_image(5)
                                }}
                            />
                        </div>
                        <div className="brightness">
                            <img
                                src={row2col3}
                                className={this.props.accept_shnu ? "shnu-fade-out" :
                                    this.props.selected_images[6] ? "img-thumbnail selected" : "img-thumbnail normal"}
                                onClick={() => {
                                    this.select_image(6)
                                }}
                            />
                        </div>
                        <div className="brightness">
                            <img
                                src={row2col4}
                                className={this.props.accept_shnu ? "shnu-fade-out" :
                                    this.props.selected_images[7] ? "img-thumbnail selected" : "img-thumbnail normal"}
                                onClick={() => {
                                    this.select_image(7)
                                }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="brightness">
                            <img
                                src={row3col1}
                                className={this.props.accept_shnu ? "shnu-fade-out" :
                                    this.props.selected_images[8] ? "img-thumbnail selected" : "img-thumbnail normal"}
                                onClick={() => {
                                    this.select_image(8)
                                }}
                            />
                        </div>
                        <div className="brightness">
                            <img
                                src={row3col2}
                                className={this.props.accept_shnu ? "shnu-fade-out" :
                                    this.props.selected_images[9] ? "img-thumbnail selected" : "img-thumbnail normal"}
                                onClick={() => {
                                    this.select_image(9)
                                }}
                            />
                        </div>
                        <div className="brightness">
                            <img
                                src={row3col3}
                                className={this.props.accept_shnu ? "shnu-fade-out" :
                                    this.props.selected_images[10] ? "img-thumbnail selected" : "img-thumbnail normal"}
                                onClick={() => {
                                    this.select_image(10)
                                }}
                            />
                        </div>
                        <div className="brightness">
                            <img
                                src={row3col4}
                                className={this.props.accept_shnu ? "shnu-fade-out" :
                                    this.props.selected_images[11] ? "img-thumbnail selected" : "img-thumbnail normal"}
                                onClick={() => {
                                    this.select_image(11)
                                }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="brightness">
                            <img
                                src={row4col1}
                                className={this.props.accept_shnu ? "shnu-fade-out" :
                                    this.props.selected_images[12] ? "img-thumbnail selected" : "img-thumbnail normal"}
                                onClick={() => {
                                    this.select_image(12)
                                }}
                            />
                        </div>
                        <div className="brightness">
                            <img
                                src={row4col2}
                                className={this.props.accept_shnu ? "shnu-fade-out" :
                                    this.props.selected_images[13] ? "img-thumbnail selected" : "img-thumbnail normal"}
                                onClick={() => {
                                    this.select_image(13)
                                }}
                            />
                        </div>
                        <div className="brightness">
                            <img
                                src={row4col3}
                                className={this.props.accept_shnu ? "shnu-fade-out" :
                                    this.props.selected_images[14] ? "img-thumbnail selected" : "img-thumbnail normal"}
                                onClick={() => {
                                    this.select_image(14)
                                }}
                            />
                        </div>
                        <div className="brightness">
                            <img
                                src={row4col4}
                                className={this.props.accept_shnu ? "shnu-fade-out" :
                                    this.props.selected_images[15] ? "img-thumbnail selected" : "img-thumbnail normal"}
                                onClick={() => {
                                    this.select_image(15)
                                }}
                            />
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="app">
                    <h2 className="transparent shnu-fade-in">
                        Nice!
                    </h2>
                    <img
                        src={nice}
                        className="transparent shnu-fade-in"
                        alt="Nice!"
                    />
                </div>
            );
        }
    }
}

App.propTypes = {
    selected_images: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        selected_images: state.picture_selected,
        accept_shnu: state.accept_shnu,
        display_nice: state.display_nice
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeImageSelected: (selected_images) => dispatch(changeImageSelected(selected_images)),
        acceptShnu: () => dispatch(acceptShnu()),
        displayNice: () => dispatch(displayNice())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);