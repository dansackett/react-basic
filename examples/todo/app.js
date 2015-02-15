/** @jsx React.DOM */

// A Todo List made in ReactJS

var TodoAddBox = React.createClass({
    render: function() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.props.handleChange}
                    value={this.props.newTask}>
                </input>
                <button
                    onClick={this.props.addTask}>
                    Add Task
                </button>
            </div>
        );
    }
});

var TodoItem = React.createClass({
    render: function() {
        return (
            <div>
               <input
                    type='checkbox'
                    onClick={this.props.finishTask}
                    data-index={this.props.index}
                    checked={this.props.task.done}>
                </input>{this.props.task.task}
            </div>
        );
    }
});

var TodoListExample = React.createClass({
    getInitialState: function() {
        return { newTask: '', tasks: this.props.tasks };
    },

    handleChange: function(e) {
        this.setState({ newTask: e.target.value });
    },

    addTask: function() {
        this.state.tasks.push({ task: this.state.newTask, done: false });
        this.setState({ newTask: '', tasks: this.state.tasks });
    },

    finishTask: function(e) {
        var done = this.state.tasks[e.target.dataset.index].done;
        this.state.tasks[e.target.dataset.index].done = !done;
        this.setState({ tasks: this.state.tasks });
    },

    render: function() {
        return (
            <div>
                <h1>Todo List</h1>
                <hr />

                <TodoAddBox
                    handleChange={this.handleChange}
                    newTask={this.state.newTask}
                    addTask={this.addTask} />

                {this.state.tasks.map(function(task, index) {
                    return (
                        <TodoItem
                            index={index}
                            task={task}
                            finishTask={this.finishTask} />
                    );
                })}
            </div>
        );
    }
});

var tasks = [
    { task: 'Take out the trash', done: false },
    { task: 'Do the laundry', done: false },
    { task: 'Do the dishes', done: true }
];

React.render(
    <TodoListExample tasks={tasks} />,
    document.body
);
