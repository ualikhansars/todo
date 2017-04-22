import React from 'react';

export class SlotsForm extends React.Component {
    render() {
        return (
            <div className="slots-form">
                <form>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Title</label>
                        <input type="text" className="form-control" id="todo_title" name="todo_title" placeholder="Study" />
                    </div>
                    <div className="form-group">
                        <label for="todo_category">Category</label>
                        <input type="text" className="form-control" id="todo-category" name="todo_category" placeholder="Important" />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Duration</label>
                        <input type="number" className="form-control" id="todo_duration" name="todo_duration" placeholder="Minutes" />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">StartTime</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                    </div>
                </form>
             </div>   
        );
    }
}