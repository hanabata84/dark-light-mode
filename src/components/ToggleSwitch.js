import './ToggleSwitch.css'

function ToggleSwitch(props) {
    return (
        <label className='toggle-switch'>
            <input type="checkbox" checked={props.toggleState} onChange={props.onToggle} />
            <span className='switch' />
        </label>
    )
}

export default ToggleSwitch