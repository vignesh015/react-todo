import React from "react";
import Header from "./Header";

class View extends React.Component
{


    onDelete(e)
    {
       this.props.delTodo(e);

    }

    MarkToggle(id)
    {
        this.props.marktog(id);
    }

    edit(id,title)
    {
        this.props.edit(id,title)
    }

    trColor(isDone)
    {
        return isDone?"text-success":"text-danger";
    }



    render(){

        return(
        <div className="container">
        <Header/>
            <table className=" mb-3 table table-bordered table-responsive table-striped">
            <tbody>
            <tr className="bg-secondary text-white">
            <th>
                S.No
            </th>
            <th>
                Title
            </th>
            <th>
               Todo Completed
            </th>
            <th>
                Edit Todo
            </th>
            <th>
                Delete Todo
            </th>
            </tr>
            {
                this.props.todos.map((todo,index)=>{

                return(
                <tr id={"id"+todo.id}  key={todo.id} className={this.trColor(todo.completed)}>
                <td>
                    {index+1}
                </td>
                    <td> {todo.title}
                    </td>
                    <td style={{textDecoration: "none"}}>
                        {todo.completed?"Done":"Not Done"}{" "}<a onClick={this.MarkToggle.bind(this,todo.id)} href={"#id"+todo.id}>Mark {!todo.completed?"Done?":"Not Done?"}?</a>
                    </td>
                    <td><a
                    style={{color: "#000"}} onClick={this.edit.bind(this,todo.id,todo.title)} href="#id{todo.id}">
                        <i className="fa fa-edit fa-lg"></i> </a>
                    </td>
                    <td>
                        <button onClick={this.onDelete.bind(this,todo.id)} className="btn text-danger"> <i className="fa fa-trash fa-lg text-black"></i></button>
                    </td>

                </tr>)

       })
            }
            </tbody>
            </table>

            </div>
               )}
}

export default View;
