import React from 'react';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="box_tf">
            <input type="text" className="tf_g" title="오늘 할 일 입력" value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <button type="button" className="btn_create" onClick={onCreate}>
                추가
            </button>
        </div>
    );
};

export default Form;