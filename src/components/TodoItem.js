import React, { Component } from 'react';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;

        return (
            <li onClick={() => onToggle(id)}>
                <button type="button" className="btn_remove" onClick={(e) => {
                e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                onRemove(id)}
                }>&times;</button>
                <span className={`txt_todo ${checked && 'checked'}`}>
                    <div>{text}</div>
                </span>
                {
                    checked && (<span className="ico_check">✓</span>)
                }
            </li>
        );
    }
}

export default TodoItem;