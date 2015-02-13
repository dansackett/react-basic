/** @jsx React.DOM */

// A Timer Example made in ReactJS

// We create a new component with React.createClass
var TimerExample = React.createClass({
    // This gets called before the render method. The returned object is
    // asigned to this.state for use later.
    getInitialState: function() {
        return {elapsed: 0};
    },

    // This is called when the component is rendered on the page.
    componentDidMount: function() {
        this.timer = setInterval(this.tick, 50);
    },

    // This is called immediately before the component is removed from the
    // page and destroyed.
    componentWillUnmount: function() {
        clearInterval(this.timer);
    },

    // Calling setState() rerenders the component.
    tick: function() {
        this.setState({elapsed: new Date() - this.props.start});
    },

    // The render function is the meat of React. Although we return a full
    // element, React only updates the changed variable because it's smart
    // like that.
    render: function() {
        var elapsed = Math.round(this.state.elapsed / 100);
        var seconds = (elapsed / 10).toFixed(1);
        return (
            <p>This example was started <b>{seconds} seconds</b> ago.</p>
        );
    }
});

// This adds the component to the DOM.
React.render(
    <TimerExample start={Date.now()} />,
    document.body
);
