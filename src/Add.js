import React,{ Component } from 'react';

class Add extends Component 
    {
    constructor(props)
    {
        super(props);
        this.state=
        {
            title: '',
            completed: false
        }
        this.onChange=this.onChange.bind(this);
        this.onClick=this.onClick.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
 
    onChange(e)
    {
    
        
        this.setState({[e.target.name] : e.target.value});
    }
    
    onClick(e)
    {
    
        
        this.setState({[e.target.name] : e.target.checked});
        
    }
    
    onSubmit(e)
    {
         
        e.preventDefault();
        this.props.AddTodo(this.state.title,this.state.completed);
        this.setState({title: '',completed: false});
        
        
        
    }
    
    
    render(){
    return(
        <div className="container text-center p-3 mb-2">
        <h2 className="mt-2">Add New Item</h2>
          <form className="form" onSubmit={this.onSubmit}>
         <input className="form-control"  placeholder="AddNew Todo" required type="text" name="title" onChange={this.onChange} value={this.state.title}/>
         <div className=" my-2"><input id="chkbox" checked={this.state.completed} name="completed" onChange={this.onClick } 
 type="checkbox"/>{" "}Todo Completed?</div>
         <input type="submit" className="btn btn-info "/>
         </form>
         </div>
         )
        }
        
    }

export default Add;
