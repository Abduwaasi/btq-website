function Input({ ...rest }) {
    return (
        <input {...rest} className="w-full rounded-2xl border border-solid mb-5 border-gray py-3 px-5 text-base leading-tight font-normal text-light-gray placeholder:text-base placeholder:text-light-gray focus:outline-none focus:border-spacing-2 focus:border-light-gray" />
    )
}

export default Input