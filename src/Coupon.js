import React, { Component } from 'react';

class Coupon extends Component {
    onCouponUse = (event) => {
        this.props.setCoupon();
    }
    render() {
        const status = this.props.data.status;
        const coupon = this.props.data.secretWord;
        return (
            <div className="col-sm-6 mt-2 mx-auto">
                <div className="card">
                    <div className="card-header text-center">
                    <button 
                        className="btn btn-success btn-sm"
                        disabled={!status}
                        onClick={this.onCouponUse}>Use Coupon</button>
                    </div>
                    <div className="card-body">
                        <span className="mr-2">Coupon code :</span>
                        <span className="badge badge-secondary">
                            {status?coupon:'Coupon has used already'}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Coupon;