import './Select.css'

const Select = (props) => {
  const {
    label,
    name,
    placeholder,
    register,
    options,
    errors,
    optionList,
    classCol,
    display,
    ...attributes
  } = props

  const classes = errors[name]?.message
    ? `${classCol} has-error`
    : `${classCol}`

  // const handleChange = (e) => {
  //   (e.target.value !== '') ? attributes.displayFields(false) : attributes.displayFields(true)
  // }

  return (
    <div className={`select-container ${classes}`}>
      <label htmlFor={name}>{label}</label>
      <div className="form-group item-form select-box">
        {/* <div className="select-icon">
          <i
            className="fa-solid fa-caret-down"
          ></i>
        </div> */}
        {
          attributes?.displayFields
            ? <select
          name={name}
          {...attributes}
          {...register(name, options)}
          className="detalle-input"
          onChange={attributes?.onChangeInput}
        >
          <option value="">{placeholder}</option>
          {optionList.map((option, index) => (
            <option key={index} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
            : <select
          name={name}
          {...attributes}
          {...register(name, options)}
          className={props?.classInput ? `${props.classInput} detalle-input` : 'detalle-input'}
          onChange={attributes?.onChangeInput}
        >
          <option value="">{placeholder}</option>
          {optionList.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        }
        {errors[name] && (
          <p className="help-block error" role="alert">
            {errors[name]?.message}
          </p>
        )}
      </div>
    </div>
  )
}

export default Select
