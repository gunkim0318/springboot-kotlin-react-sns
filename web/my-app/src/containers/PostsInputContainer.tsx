import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import DefaultInput from "../components/atoms/DefaultInput";
import {writePostsAsync} from "../modules/posts";

export const PostsInputContainer = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState("");

    const onChange = (e: any) => {
        e.preventDefault();

        setValue(e.target.value);
    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(writePostsAsync.request(value));
        setValue('');
    }

    return (
        <DefaultInput value={value} onChange={onChange} onSubmit={onSubmit} placeholder="무슨 생각을 하고 계세요?" />
    )
}