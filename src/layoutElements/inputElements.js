import _ from "lodash";

//type1

export const AppTextField = ({
  name,
  label,
  values,
  placeholder,
  required,
  handleChange,
  errors,
  hideLabel,
  ...props
}) => (
  <>
    {hideLabel ? null : (
      <label className="d-flex text-label text-capitalize">
        {label} {required && <div style={{ color: "red" }}>*</div>}
      </label>
    )}

    <input
      type="text"
      value={_.get(values, name)}
      name={name}
      label={label}
      onChange={handleChange}
      className={`${
        props?.disabled ? "disabled" : ""
      } form-control  input-default `}
      placeholder={placeholder}
      required={required}
      disabled={props?.disabled ?? false}
    />
    <div className="error_text" id={name}>
      {errors && errors && errors[name]?.map((err) => err).join(",")}
    </div>
  </>
);

export const AppSelect = ({
  values,
  options,
  placeholder,
  label,
  name,
  required,
  errors,
  handleChange,
  hideLabel,
}) => (
  <>
    {/* {console.log(values)} */}

    {/* {console.log("valuesArehere", values[name],values,options)} */}
    {hideLabel ? null : (
      <label className="d-flex text-label text-capitalize">
        {label} {required && <div style={{ color: "red" }}>*</div>}
      </label>
    )}

    <select name={name} value={_.get(values, name)} onChange={handleChange}>
      <option value="">select option</option>
      {options.map((d) => {
        return <option value={d.value}>{d.label}</option>;
      })}
    </select>
    <div className="error_text" id={name}>
      {errors && errors[name]?.map((err) => err).join(",")}
    </div>
  </>
);
