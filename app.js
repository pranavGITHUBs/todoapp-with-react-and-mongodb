import logo from './logo.svg';
import'./app.css';
import{component}from'react';
class app extends Component{
    constructior(props){
        super(prpos);
        this.state={
            notes:[]

        }
    }
API_url='http:localhost:5038/';
async refreshNotes(){
  fetch(this.API_URL+"api/todoapp/GetNotes").then(response=> response.json())
  .then(data=>{
    this.setState({notes:data});
  })
}

async addClick(){
    var newNotes= document.getElementById("newNotes").value;
    const data=new FormData();
    data.append("newNotes",newNotes);

 fetch(this.API_URL+"api/todoapp/addNotes",{
    method:"POST",
    body:data
 }).then(res=>res.json())
 .then((result)=>{
    alert(result);
    this.refreshNotes();
 })
}
 async deleteClick(id){
  fetch(this.API_URL+"api/todoapp/addNotes?"=id,{
    method:"DELETE",
    body:data
  }).then(res=>res.json())
  .then((result)=>{
    alert(result);
    this.refreshNotes();
  })
} 
render(){
    const{notes}this.state;
    return (
        <div className="app">
         <h2>Todo App</h2>
          <input id ="newNotes"/>&nbsp;
         <button onClick={()=>this.addClick()}>add Notes</button>
         {notes.map(note=>
         <p>
            <b>*{note.description}</b>&nbsp;
            <button> onClick={()=>this.deleteClick(note.id</button>
         </p>
         )}

        </div>
    );
}
}