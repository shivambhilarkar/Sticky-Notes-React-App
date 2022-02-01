import { useEffect, useState } from 'react';
import './Alltodos.css'
import Todo from './Todo';
const Alltodos = () => {

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
    

    let delete_todo = (todoid) => {
        let newdb = todolist.filter((element) => {
            return element.id != todoid;
        })
        let store = localStorage;
        store.setItem('todo_DB', JSON.stringify(newdb));
        setList(newdb);
        console.log("Deleted : " + todoid);
    }


   

    return (  
        <>
            <div className="todos_container">

                {
                    todolist.map((element) => {
                        return < Todo
                            key={element.id}
                            todoheader={element.header}
                            todocontent={element.content}
                            tododate={element.date}
                            deletetodo={delete_todo}
                            keydelete={element.id}
                        /> 
                    })
                }
                

            </div>
        
        </>
    );
}
 
export default Alltodos;