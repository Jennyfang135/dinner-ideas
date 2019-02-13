import React from 'react'

class Comments extends React.Component {
    constructor(props){
        super(props)
        this.state={currentComment:'',
        comments:[]}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({currentComment:event.target.value})
    }

    handleSubmit(event){
        const comments = [...this.state.comments, currentComment]
        this.setState({comments})
    }
    render(){
        return (
        <div>
            <form onSubmit ={this.handleSubmit}>
                <label>Leave your comments:</label>
                <input type='text' name='comment' onClick = {this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
            <div>
                {this.state.comments.map(comment =>{
                    <p>{comment}</p>
                })}
            </div>
        </div>    
        )
    }
}

export default Comments