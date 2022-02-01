import { useEffect, useState } from 'react';
import './Todo.css'





const Todo = (props) => {

    const [todolist, setList] = useState([]);
    

    useEffect(() => {
        let store = localStorage;
        let DB = store.getItem('todo_DB');
        if (DB == null) {
            DB = [];
        } else {
            DB = JSON.parse(DB);
        }
        setList(DB);
        console.log("function run..")
    }, []);

    let popup_form = () => {
        document.getElementById('add_form').style.animation = 'pop 0.5s linear forwards'
        document.getElementById('add_btn').value = '♻️UPDATE'
        document.getElementById('add_btn').style.background = 'green';
        document.getElementById('add_btn').style.color = 'white';


    }
    
    let update_todo = (headermsg, contentmsg , todoid) => {
        popup_form();
        let header = document.getElementById('add_todo').value = headermsg;
        let textmsg = document.getElementById('add_info').value = contentmsg;

         let newdb = todolist.filter((element) => {
            return element.id != todoid;
        })
        let store = localStorage;
        store.setItem('todo_DB', JSON.stringify(newdb));
        setList(newdb);
        console.log("updating : " + todoid);
    }




    return ( 
        <>
            <div className="todo_card">
                <div className="todo_header">
                    <img src={require(`${'./images/paperclipn.png'}`)} />
                    <h1> { props.todoheader}</h1>
                </div>

                <p>   { props.todocontent}</p>
                {/* <h6>DATE : {props.tododate}</h6> */}

                <div className="bottom_bar">
                    <button id='deltetodo' onClick={() => props.deletetodo(props.keydelete)}>Delete</button>
                    <button id='updatetodo' onClick={() => update_todo(props.todoheader, props.todocontent, props.keydelete)}>Edit</button>
                    <h6>DATE : {props.tododate}</h6>
                    
                </div>
               
            </div>
        
        
        </>
     );
}
 
export default Todo;
