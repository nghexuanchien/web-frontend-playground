import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
   constructor(props) {
       super(props);
       this.state = {
           message: ''
       }
   }

    submitForm (values){
        const {name, email, phone, blogurl } = values;
        const isNameCorrect = name && name.trim().length && name.trim().length < 50;
        const isEmailCorrect = email && /^\S+@\S+$/.test(email.trim());
        const isPhoneCorrect = phone && /[01]\d{10}/.test(phone.trim())
        const isBlogUrlCorrect = blogurl && (/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi).test(blogurl.trim());

        if(!isNameCorrect || !isEmailCorrect || !isPhoneCorrect || !isBlogUrlCorrect) {
            this.setState({
              message: 'Data is not valid'
            });
            return;
        }

        this.setState({
          message: 'Data is valid'
        });

        // doing info persistent
    }

    render() {
        return (<div>
            <Form onSubmit={this.submitForm.bind(this)}></Form>
            <Message message={this.state.message}></Message>
        </div>);
    }
}

export default App;
