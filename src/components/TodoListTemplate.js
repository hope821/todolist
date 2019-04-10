import React from 'react';

const TodoListTemplate = ({form, children}) => {
    return (
        <div className="wrap_todo">
            <h2 className="tit_todo">
                오늘 할 일
            </h2>
            <section className="section_form">
                {form}
            </section>
            <section className="section_todos">
                { children }
            </section>
        </div>
    );
};

export default TodoListTemplate;