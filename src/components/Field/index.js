import React from 'react'
import Input from './Input/style';
import TextArea from './Textarea';

const Text = ({ type, name, placeholder, register }) => (
    <Input
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name, { required: true })} />
);

const Area = ({ name, placeholder, rows, register }) => (
    <TextArea
        name={name}
        placeholder={placeholder}
        rows={rows}
        {...register(name, { required: true })} />
);

const Field = {
    Text,
    Area,
}

export default Field;