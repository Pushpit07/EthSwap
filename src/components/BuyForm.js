import React, { Component } from 'react'
import tokenLogo from '../token-logo.png'
import ethLogo from '../eth-logo.png'

class BuyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '0'
    }
  }

  render() {
    return (
      <form className="mb-3" onSubmit={(event) => {
        event.preventDefault()
        let etherAmount
        etherAmount = this.input.value.toString()
        etherAmount = window.web3.utils.toWei(etherAmount, 'Ether')
        this.props.buyTokens(etherAmount)
      }}>
        <div>
          <label className="float-left text_color"><b>Input</b></label>
          <span className="float-right text_muted">
            Balance: {window.web3.utils.fromWei(this.props.ethBalance, 'Ether')}
          </span>
        </div>
        <div className="input-group mb-4">
          <input
            type="text"
            onChange={(event) => {
              const etherAmount = this.input.value.toString()
              this.setState({
                output: etherAmount * 100
              })
            }}
            ref={(input) => { this.input = input }}
            className="form-control form-control-md"
            placeholder="0"
            required />
          <div className="input-group-append">
            <div className="input-group-text">
              <img src={ethLogo} height='24' alt="" />
              &nbsp;&nbsp; ETH
            </div>
          </div>
        </div>
        <div>
          <label className="float-left text_color"><b>Output</b></label>
          <span className="float-right text_muted">
            Balance: {window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')}
          </span>
        </div>
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control form-control-md"
            placeholder="0"
            value={this.state.output}
            disabled
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <img src={tokenLogo} height='24' alt="" />
              &nbsp;&nbsp; NTK
            </div>
          </div>
        </div>
        <div className="mb-5">
          <span className="float-left text_muted">Exchange Rate</span>
          <span className="float-right text_muted">1 ETH = 100 NTK</span>
        </div>
        <button type="submit" className="btn btn_swap btn-block btn-lg">Swap</button>
      </form>
    );
  }
}

export default BuyForm;
