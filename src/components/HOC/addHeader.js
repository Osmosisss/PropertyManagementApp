import React, { Component } from 'react';

const addHeader = (Child) => {
    return class extends Component {
        render() {
            return (
                <div>
                    <div className="main-header">
                        <h1>Welcome to the HOA Manager!</h1>
                        <p>Please login to continue</p>
                    </div>
                    <Child />
                </div>
            )
        }
    }
}

export default addHeader;