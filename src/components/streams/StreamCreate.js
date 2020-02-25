import React from 'react';
import {Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component{


    renderError({error, touched}){
        if(touched && error){
            return (
                <div>
                    <div>{error}</div>
                </div>
            )
        }
    }

    renderInput = ({input,label, meta }) =>{
        console.log(meta,'meta---');
        return (
            <div className="form-group">
                <label>{label}</label>
                <input {...input} className="form-control" autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues)=>{
        this.props.createStream(formValues);
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Enter Title" />
                    <Field name="description" component={this.renderInput} label="Enter Description"/>
                    <button className="btn btn-primary">Submit</button>
                </form>

                </div>
            </div>
        )
    }
}

const validate = formValues =>{
    const errors ={};
    if(!formValues.title){
        errors.title ="Title is required";
    }
    if(!formValues.description){
        errors.description ="Description is required";
    }
    return errors;
}

const formWrapped = reduxForm({
    form : 'streamCreate',
    validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped)