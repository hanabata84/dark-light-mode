import ReactLogo from '../assets/logo192.png'
import ToggleSwitch from './ToggleSwitch.js'

function Navbar(props) {

    const lightStyles = {
        backgroundColor: props.toggleState && "#21222A",
        color: props.toggleState && "aliceblue",
        boxShadow: props.toggleState && "none"
    }

    return (
        <nav style={lightStyles}>
            <div className='logo'>
                <img className='react-logo' src={ReactLogo} alt="" />
                <h3 className='logo-head'>ReactFacts</h3>
            </div>
            <p className='nav-light'>Light</p>
            <ToggleSwitch onToggle={props.onToggle} toggleState={props.toggleState} />
            <p>Dark</p>
        </nav>
    )
}

export default Navbar