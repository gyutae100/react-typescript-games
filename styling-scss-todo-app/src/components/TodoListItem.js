import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md'

import './TodoListItem.scss';

const TodoListItem = () => {
    return (
        <div>
            <div className="TodoListItem">
                <div className="checkbox">
                    <MdCheckBoxOutlineBlank />
                    <div className="text"> 할일</div>
                </div>
            </div>
            <div className="Remove">
                <MdRemoveCircleOutline />
            </div>
            
        </div>
    );
};

export default TodoListItem;