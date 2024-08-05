import { Component } from 'react'
import axios from 'axios'

export default class ClassCom extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: null


        }
    }

    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                this.setState({ posts: response.data })
                console.log(response);

            })
            .catch((error) => {
                this.setState({ error })
                console.log(error);

            })

    }

    render() {
        //destructuring
        const { posts, error } = this.state

        if (error) {
            return <div>Error :{error.message}</div>
        }
        return (
            <>
                <h1>All Posts Here</h1>
                <ul>
                    {
                        posts.map(post => (
                            <li key={post.id}>{post.title}</li>
                        ))
                    }
                </ul>
            </>
        )
    }
}
