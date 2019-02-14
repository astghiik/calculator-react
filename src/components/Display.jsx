import React from 'react';

function Display(props) {
        return ( 
            <thead>
                <tr>
                    <td colSpan='5' className="display">{props.display}</td>
                </tr>
            </thead>
        );
}
 
export default Display;