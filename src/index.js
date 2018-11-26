import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Trello = ({lists}) => (
    <div className="lists">
        <div class="headline"> 
            <div className="project-name">Project Board </div>  
            <div className="more-options">***</div>
        </div>
        {lists.map ( list => 
            <div className="list-item" key={list.id}>
            {list.name}
            </div>
        )}
    <p>Add a card..</p>
    </div>
   
);

const testList = [
    {
        id:1,
        name:'List one',
    },
    {
        id:2,
        name:'post on Mercado Libre'
    },
    {
        id:3,
        name:'sign up for dance classes'
    }
]

ReactDOM.render(<Trello lists={testList}/>, document.querySelector('#root'));