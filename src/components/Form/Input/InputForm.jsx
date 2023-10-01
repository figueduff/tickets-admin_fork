const Input = (props) => {
  const { label, name, register, options, classCol, errors, value, display, ...attributes } = props

  const classes = errors[name]?.message
    ? `${classCol} has-error`
    : `${classCol}`

  return (
    <div className={classes}>
      <label className='mt-2' htmlFor={name}>{label}</label>
      <input
        name={name}
        {...attributes}
        {...register(name, options)}
        className="detalle-input"
        value={value}
        formNoValidate
        disabled={display}
        onChange={attributes?.onChangeInput}
      />
      {errors[name]?.message && (
        <p className="help-block error" role="alert">
          {errors[name]?.message}
        </p>
      )}
    </div>
  )
}

export default Input
