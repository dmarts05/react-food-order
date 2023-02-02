export default function MealForm(props) {
  const submitMealHandler = e => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={submitMealHandler}
      className='flex flex-col items-center gap-3'
    >
      <div className='flex items-center justify-center gap-3'>
        <label htmlFor='amount' className='font-semibold'>
          Amount
        </label>
        <input
          type='number'
          id='amount'
          name='amount'
          min='1'
          max='999'
          required
          className='w-14 rounded-md border-2 border-zinc-200 p-0.5 text-center'
        />
      </div>
      <button className='select-none rounded-full bg-red-900 px-6 py-1 font-semibold text-white transition-colors duration-200 hover:bg-red-800'>
        + Add
      </button>
    </form>
  );
}
