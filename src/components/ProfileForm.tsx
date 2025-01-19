import React from 'react';
import { useForm } from 'react-hook-form';

const ProfileForm: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" />
      <input {...register('photo')} placeholder="Photo URL" />
      <textarea {...register('description')} placeholder="Description" />
      <input {...register('address')} placeholder="Address" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;