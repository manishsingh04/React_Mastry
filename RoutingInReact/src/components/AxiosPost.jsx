import { Component } from 'react';
import axios from 'axios';

export default class AxiosPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            title: '',
            body: '',
            errorMessage: '',
            successMessage: ''
        };
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    SubmitForm = async (event) => {
        event.preventDefault();
        console.log(this.state);

        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                userId: this.state.userId,
                title: this.state.title,
                body: this.state.body
            });
            console.log(response.data);
            this.setState({
                successMessage: 'Post created successfully!',
                errorMessage: ''
            });
        } catch (error) {
            console.error(error);
            this.setState({
                errorMessage: 'An error occurred while creating the post.',
                successMessage: ''
            });
        }
    }

    render() {
        const { userId, title, body, errorMessage, successMessage } = this.state;
        return (
            <>
                <form onSubmit={this.SubmitForm}>
                    <div>
                        <label htmlFor='userId'>UserId : </label>
                        <input type="text" value={userId} name='userId' onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='title'>Title : </label>
                        <input type="text" value={title} name='title' onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='body'>Body : </label>
                        <input type="text" value={body} name='body' onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </>
        );
    }
}
