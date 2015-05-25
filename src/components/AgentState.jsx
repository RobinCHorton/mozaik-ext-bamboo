var React            = require('react');

var AgentState = React.createClass({
    render() {
        var stateClasses = 'bamboo__plan-results__result__state bamboo__plan-results__result__state--'
            , iconClasses = 'fa fa-'

        if(this.props.state.toLowerCase() === 'idle') {
            stateClasses += 'success';
            iconClasses += 'check-square';
        } else if(this.props.state.toLowerCase() === 'offline') {
            stateClasses += 'error';
            iconClasses += 'warning';
        } else {
            stateClasses += 'unknown';
            iconClasses += 'question-circle';
        }

        return (
            <span className={ stateClasses }>
                <i className={ iconClasses } />
            </span>
        );
    }
});

module.exports = AgentState;