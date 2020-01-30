import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.min.css';
import Add from "./Add";
import View from "./View";
import Header from "./Header";
import swal from "sweetalert";
import "./styles.css";

const uuidv4 = require('uuid/v4');


class App extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state={
        todos: [{
            title: "Build a Webpage",
            id: this.id(),
            completed: false
        },
        {
            title: "Learn React.js",
            id: this.id(),
            completed: false
        },
        {
            title: "Buy a Car",
            id: this.id(),
            completed: false
        },
        {
            title: "Meeting with boss!",
            id: this.id(),
            completed: false
        }
        ]
            
        };
        this.AddTodo=this.AddTodo.bind(this);
        this.DelTodo=this.DelTodo.bind(this);
        this.MarkToggle=this.MarkToggle.bind(this);
        this.EditTodo=this.EditTodo.bind(this)
    }
    
    id() { return uuidv4(); }
   
   
    //add new todo
    AddTodo(title,completed)
    {
   // const newId=this.state.todos.length+1;
       const newTodo={
           title,
           id: this.id(),
           completed
       };
       
        this.setState({todos : [...this.state.todos,newTodo]})
        swal("Success!","New Todo Added","success")
      
    }
    EditTodo(id,title)
    {
    var newTitle=prompt("Edit Todo Item",title);
      
if(newTitle) {
        this.setState({todos :             this.state.todos.map((todo)=>{if (todo.id===id)
        {
            
            todo.title=newTitle;
        
        }
        return todo
        }
        
        )});
        swal("Success!","Todo Item Updated","success")
        
        }
        else
        {
            swal("Failed!","Todo Item Not Updated Succesfully","warning")
        }
    }
    MarkToggle(id)
    {
   
        this.setState({todos :             this.state.todos.map((todo)=>{if (todo.id===id)
        {
            todo.completed=!todo.completed;
            
        }
        return todo
        }
        
        )})
    }
    

        DelTodo(id)
    {
        
    
    
    if(window.confirm("Do you really want to delete this item?")){
      this.setState({todos : this.state.todos.filter((todo)=>{return todo.id!==id})})
    swal("Success!","Todo Item Deleted successfully","success");
       }
       else
       {
           swal("Failed!","Todo Item Not Deleted successfully","warning");
       }
    }
    
    addDel()
    {
        if(this.state.todos.length>0){
        return(
         <View edit={this.EditTodo} delTodo={this.DelTodo} marktog={this.MarkToggle} todos={this.state.todos}/>)}
         else
         {
             return(
             <div className="container">
             <Header/>
                 <p className="text-info">Try to add Something to View Todo Items List</p>
                 <img style={{maxWidth: "100%",
    height: "auto",marginBottom: "3rem"}} alt="No results found" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpUyqGY6n0sBIt65xON211J9Za6yZpn7AblVQirTmhfcnFeAMy"/>
                 </div>
             )
         }
    }
    
    
    
    render(){
    return(
     <div className="h-100 row align-items-center">
     <div className="col"><h2 className="bg-secondary p-3 mt-2 text-white text-center">Todo List App</h2>
        <Add  AddTodo={this.AddTodo} />
        {this.addDel()}
     </div>
     </div>
    
    
    );
    }
    
    }

export default App;
