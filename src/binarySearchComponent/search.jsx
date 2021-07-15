import React, { Component } from 'react';
import Guess from "./guess";
import Result from "./result";

const Search = () => {
    return (
        <div>
            {this.props.upper !== this.props.lower &&
                <Guess
                    yesButton={this.props.yesButton}
                    noButton={this.props.noButton}
                    upper={this.props.upper}
                    lower={this.props.lower}
                    max={this.props.max}
                />
            }
            {this.props.upper === this.props.lower &&
                <Result
                    res={this.props.upper}
                    onRestart={this.props.onRestart}
                />
            }
        </div>
    );

}

export default Search;