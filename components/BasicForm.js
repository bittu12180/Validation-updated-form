
import Input from './Input';
import UseInput from '../hooks/use-input';

const BasicForm = (props) => {
  
  const{
    value:enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = UseInput(value => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    isValid: enteredLastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = UseInput(value => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = UseInput(value => value.includes('@'));

  const {
    value: enteredPhone,
    hasError: phoneInputHasError,
    isValid: enteredPhoneIsValid,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput
  } = UseInput(value => value.length===10);

  const{
    value:enteredMessage,
    hasError: messageInputHasError,
    isValid: enteredMessageIsValid,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput
  } = UseInput(value => value.trim() !== "");


  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid && enteredLastNameIsValid && enteredPhoneIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if(!formIsValid){
      return;
    }
    console.log(enteredName,enteredLastName,enteredEmail);
    console.log("form Submitted !!");

  
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetPhoneInput();
    resetMessageInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";


  const emailInputClasses = emailInputHasError
    ? "form control invalid"
    : "form-control";

    const phoneInputClasses = phoneInputHasError
    ? "form control invalid"
    : "form-control";

    const messageInputClasses = messageInputHasError
    ? "form control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <div className={nameInputClasses}>
            <Input
              type='text'
              id='name'
              lable="Name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler} />
            {nameInputHasError && (
              <p className="error-text">Name must not be empty.</p>
            )}
          </div>

        </div>

        <div className='form-control'>
          <div className={lastNameInputClasses}>
            <Input
              type='text'
              id='name'
              lable="Last Name"
              value={enteredLastName}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler} />
            {lastNameInputHasError && (
              <p className="error-text">Name must not be empty.</p>
            )}
          </div>

        </div>
      </div>
      <div className='form-control'>
        <div className={emailInputClasses}>
          <Input
            type='email'
            id='email'
            lable="Email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailInputHasError && (
            <p className="error-text">Email must not be empty.</p>
          )}
        </div>
      </div>
      <div className={phoneInputClasses}>
        <Input
          lable="phone"
          type='tel'
          id='phone'
          lable="Phone"
          onChange={phoneChangeHandler}
          onBlur={phoneBlurHandler}
          value={enteredPhone} />
        {phoneInputHasError && <p className='error-text'>*error</p>}
      </div>
      <div className={messageInputClasses}>
        <label>Message</label>
        <textarea
          type='text'
          id='name'
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
          value={enteredMessage}
        />
        {messageInputHasError && <p className='error-text'>*error</p>}
      </div>
      <div>single Choice field</div>
      <div>
        <Input type="radio" value="Choice1" name="gender" />
        Choice1
      </div>
      <div>
        <Input type="radio" value="Choice2" name="gender" />
        Choice2
      </div>
      <div>
        <Input type="radio" value="Choice3" name="gender" />
        Choice3
      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
      
    </form>
  );
};

export default BasicForm;



