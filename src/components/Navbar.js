import React, { Component } from 'react'
import Identicon from 'identicon.js';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light fixed-top shadow" style={{
        backgroundColor: "#381EB4", height: "60px"
      }
      }>
        <span class="navbar-brand mb-0 h1 ethswap ml-3">EthSwap</span>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="mr-4" style={{ color: 'white' }}>
              <small id="account">{this.props.account}</small>
            </small>

            {this.props.account
              ? <img
                className="ml-1 mr-3 identicon"
                width='30'
                height='30'
                src={`data:image/png;base64,${new Identicon(this.props.account.substr(5, 24), 40).toString()}`}
                alt=""
              />
              : <span></span>
            }

          </li>
        </ul>
      </nav >
    );
  }
}

export default Navbar;
