import { useForm, FieldValues } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

interface Props {
  onSubmit: (expenses: FormData) => void;
}

const schema = z.object({
  description: z.string().min(1, { message: 'Description is required.' }),
  amount: z.number({ invalid_type_error: 'Amount is required.' }),
  category: z.string({ required_error: 'Category is required.' }),
});
type FormData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <input
            {...register('description')}
            id='description'
            type='text'
            className='form-control'
          />
          {errors.description && (
            <p className='text-danger'>{errors.description.message}</p>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='amount' className='form-label'>
            Amount
          </label>
          <input
            {...register('amount', { valueAsNumber: true })}
            id='amount'
            type='number'
            className='form-control'
          />
          {errors.amount && (
            <p className='text-danger'>{errors.amount.message}</p>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='category' className='form-label'>
            Category
          </label>
          <select
            {...register('category', {
              setValueAs: (value) =>
                value === 'Choose Option' ? undefined : value,
            })}
            id='category'
            className='form-select'
          >
            <option hidden={true}>Choose Option</option>
            <option>Groceries</option>
            <option>Utilities</option>
            <option>Entertainment</option>
          </select>
          {errors.category && (
            <p className='text-danger'>{errors.category.message}</p>
          )}
        </div>
        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
