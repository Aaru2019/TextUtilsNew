import React from 'react'

export default function Alerts(props) {
    return (
        props.alerts &&  <div>
            <div className={`alert alert-${props.alerts.text} alert-dismissible fade show`} role="alert">
                {props.alerts.messege}
            </div>
        </div>
    )
}
