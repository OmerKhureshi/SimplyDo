import React from 'react';

export default class ToDoList extends React.Component {
    render() {
        return (
                <div>
                    <br/>
                    <h3 >Here is your task list, move your lazy ass and get to work. NOW! </h3>
                    <ul>
                        {
                            this.props.taskList.map((val, ind, arr) => (<li key={ind}>{val}</li>))
                        }
                    </ul>
                </div>
        );
    }
}



