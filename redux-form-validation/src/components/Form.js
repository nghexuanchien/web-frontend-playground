import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
        };

    }
    
    render() {
      const { handleSubmit } = this.props;
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form onSubmit={handleSubmit}>
                <h3>Name:</h3>
                <Field name="name" component="input" type="text" />
                <h3>Email:
                </h3>
                <Field name="email" component="input" type="text" />
                <h3>Phone:
                </h3>
                <Field name="phone" component="input" type="text" />
                <h3>Blog URL:</h3>
                <Field name="blogurl" component="input" type="text" />

                <div className="small-6 small-centered text-center columns">
                  <button type={'submit'} className="button success expand round text-center">Verify</button>
                </div>
            </form>
        </div>);
    }
}

const mapStateToProps = (state) => {
  return {
    commonData: state.commonData
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

Form = connect(mapStateToProps, mapDispatchToProps)(Form);

Form = reduxForm({
  form: 'UserRegistration'
})(Form);

export default Form;
