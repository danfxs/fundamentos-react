import React from "react";

import FamiliaMembro from './FamiliaMembro'

export default props => {
    return (
        <div>
            <FamiliaMembro nome="João" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Ana" {...props} />
            <FamiliaMembro nome="Joaquim" sobrenome="Silva" />
        </div>
    )
}