import React, { Component } from 'react'
import { createBlog } from '../../store/actions/blogActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class CreateBlog extends Component {

    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.createBlog(this.state);
        this.props.history.push('/');
    }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
     <div className="container">
         <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create Blog</h5>
            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="content">Blog Content</label>
                <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            </div>
            <div className="input-field">
                <button className="btn pacers-yellow lighten-1 z-depth-0">Create</button>
            </div>
         </form>
     </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBlog: (blog) => dispatch(createBlog(blog))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateBlog)
