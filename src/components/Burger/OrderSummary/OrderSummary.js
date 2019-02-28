import React from 'react';

import Aux from '../../../hoc/Aux'
import Button from '../../../components/UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.inrgedients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {props.inrgedients[igKey]}
            </li>);
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>The price is: <strong>{props.price.toFixed(2)}$</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;