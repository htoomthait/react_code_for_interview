import "./FormInput.css";
import PropTypes from "prop-types";

const FormInput = (props) => {
    return (
        <div className="formInput">
            {/* <label>Username : </label> */}
            <input
                type="text"
                placeholder={props.placeholder}
                name={props.name}
            />
        </div>
    );
};

FormInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default FormInput;
