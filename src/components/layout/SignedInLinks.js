import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    const { profile } = props;
    return (
        <nav className="nav-wrapper grey darken-3">
            <ul className="right">
                <li><NavLink to='/create'>New Post</NavLink></li>
                <li><a onClick={ props.signOut }>Log Out</a></li>
                <li><NavLink to='/' className="btn btn-floating pacers-yellow">{ profile.initials }</NavLink></li>
            </ul>
        </nav>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)