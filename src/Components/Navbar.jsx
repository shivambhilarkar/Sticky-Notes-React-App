import { useState } from 'react';
import './Navbar.css'

const Navbar = () => {

    let popup_form = () => {
        document.getElementById('add_form').style.animation = 'pop 1s linear forwards'
    }
    let cancel_form = () => {
        
        let header = document.getElementById('add_todo').value;
        let textmsg = document.getElementById('add_info').value;
        if (header != '') {
            add_todo();
        } else {
            document.getElementById('add_todo').value = '';
            document.getElementById('add_info').value = '';
        }
        document.getElementById('add_form').style.animation = 'poprev 0.5s linear forwards'
        document.getElementById('add_btn').value = '➕ ADD'
        document.getElementById('add_btn').style.background = 'lightblue';


    }
    let add_todo = () => {
        let header = document.getElementById('add_todo').value;
        let textmsg = document.getElementById('add_info').value;

        let date = get_date();
        let store = localStorage;
        let DB = store.getItem('todo_DB');
        if (DB == null) {
            DB = [];
        } else {
            DB = JSON.parse( DB);
        }
        let obj = {
            id: new Date(),
            header: header,
            content: textmsg,
            date: date
        };

        DB.push(obj);
        store.setItem('todo_DB', JSON.stringify(DB));
        document.getElementById('add_todo').value = '';
        document.getElementById('add_info').value = '';

        window.location.reload()
        cancel_form(); //to close the popup
    }


    let get_date = () => {
        let date = new Date();

        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        let months = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let newDate = days[date.getDay()] + " " + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
        return newDate;
    }
    return ( 
        <>
            <nav>
                <label htmlFor="searchtodo"></label>
                {/* <input type="text" id='searchinput' value={"📌 Sticky Pins"}/> */}
                <h1> 📌 Sticky Pins </h1>
                <button className='navbtn' onClick={ popup_form}>Add New</button>
                {/* <button className='navbtn'>Search</button> */}
            </nav>

            <div id="add_form">
                <input type="text" placeholder='Enter Title : '  id='add_todo'/>
                <textarea name="Info" id="add_info" cols="30" rows="15" placeholder='Enter Information : '></textarea>
                <span id='add_form_span'>
                    {/* <button id='add_btn' onClick={add_todo}> ➕ ADD</button> */}
                    <input id='add_btn' onClick={add_todo} type="button" value={" ➕ ADD"} />
                    <button id='cancel_btn' onClick={ cancel_form}> CANCEL</button>
                </span>
            
            </div>
        
        </>
     );
}
 
export default Navbar;