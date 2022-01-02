import { useState } from 'react';
import Input from './Input';

const SimpleInput = (props) => {

  const [enterName, setEnterName] = useState('');
  const [enterEmail, setEnterEmail] = useState('');
  const [enterPhone, setEnterPhone] = useState('');
  const [enterMessage, setEnterMessage] = useState('');

  const [enterNameIsValid, setEnterNameIsValid] = useState(false);
  const [enterEmailIsValid, setEnterEmailIsValid] = useState(false);
  const [enterPhoneIsValid, setEnterPhoneIsValid] = useState(false);
  const [enterMessageIsValid, setEnterMessageIsValid] = useState(false);


  const [enterNameIsTouch, setEnterNameIsTouch] = useState(false);
  const [enterEmailIsTouch, setEnterEmailIsTouch] = useState(false);
  const [enterPhoneIsTouch, setEnterPhoneIsTouch] = useState(false);
  const [enterMessageIsTouch, setEnterMessageIsTouch] = useState(false);


  const nameInputChangeHandler = (event) => {
    setEnterName(event.target.value);
    if (event.target.value.trim() !== '' && (event.target.value).length >= 5) {
      setEnterNameIsValid(true)
    }
  }

  const emailChangeHandler = (event) => {
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;


    setEnterEmail(event.target.value);
    var email = event.target.value;
    if (event.target.value.trim() !== '' && validEmail.test(email)) {
      setEnterEmailIsValid(true)
    }

  };

  const phoneChangeHandler = (event) => {
    setEnterPhone(event.target.value);
    if (event.target.value.trim() !== '') {
      setEnterPhoneIsValid(true)
    }
  };
  const messageChangeHandler = (event) => {
    setEnterMessage(event.target.value);
    if (event.target.value.trim() !== '') {
      setEnterMessageIsValid(true)
    }
  };


  const nameInputBlurHandler = (event) => {
    setEnterNameIsTouch(true);
    if (enterName.trim() === '') {
      setEnterNameIsValid(false);
    }
  }

  const emailBlurHandler = (event) => {
    setEnterEmailIsTouch(true);
    if (enterEmail.trim() === '') {
      setEnterEmailIsValid(false);
    }
  }
  const phoneBlurHandler = (event) => {
    setEnterPhoneIsTouch(true);
    if (enterEmail.trim() === '') {
      setEnterPhoneIsValid(false);
    }
  }
  const messageBlurHandler = (event) => {
    setEnterMessageIsTouch(true);
    if (enterMessage.trim() === '') {
      setEnterMessageIsValid(false);
    }
  }




  const formSubmissionhandler = (event) => {
    event.preventDefault();
    setEnterNameIsTouch(true);
    setEnterEmailIsTouch(true);
    setEnterPhoneIsTouch(true);
    setEnterMessageIsTouch(true);
    if (enterName.trim() === '' && enterEmail.trim() === '' && enterPhone.trim() === '' && enterMessage.trim() === '') {
      setEnterNameIsValid(false);
      setEnterEmailIsValid(false);
      setEnterPhoneIsValid(false);
      setEnterMessageIsValid(false);
      return;
    }
    setEnterNameIsValid(true);
    setEnterEmailIsValid(true);
    setEnterPhoneIsValid(true);
    setEnterMessageIsValid(true)
    console.log(enterName);
    setEnterName(' ');
    setEnterEmail(' ');
    setEnterPhone(' ');
    setEnterMessage(' ');


  }
  const emailInputIsInvalid = !enterEmailIsValid && enterEmailIsTouch;
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control'

  const nameInputIsInvalid = !enterNameIsValid && enterNameIsTouch
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  const phoneInputIsInvalid = !enterPhoneIsValid && enterPhoneIsTouch
  const phoneInputClasses = phoneInputIsInvalid ? 'form-control invalid' : 'form-control';

  const messageInputIsInvalid = !enterMessageIsValid && enterMessageIsTouch
  const messageInputClasses = messageInputIsInvalid ? 'form-control invalid' : 'form-control';



  return (
    <form onSubmit={formSubmissionhandler}>

      <div className={nameInputClasses}>
        <div class="row">
          <div class="col">
            <Input
              type='text'
              id='name'
              lable="Name"
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
              value={enterName} />
            {nameInputIsInvalid && <p className='error-text'>*error</p>}
          </div>
          <div class="col">
            <Input 
            type="text" 
            id="Lname"
            placeholder="Lname" 
            lable="" />
          </div>
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='Email'>Email</label>
        <Input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enterEmail} />
        {emailInputIsInvalid && <p className='error-text'>*error</p>}
      </div>
      <div className={phoneInputClasses}>
        <Input
          lable="phone"
          type='tel'
          id='phone'
          onChange={phoneChangeHandler}
          onBlur={phoneBlurHandler}
          value={enterPhone} />
        {phoneInputIsInvalid && <p className='error-text'>*error</p>}
      </div>
      <div className={messageInputClasses}>
        <label>Message</label>
        <textarea
          type='text'
          id='name'
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
          value={enterMessage}
        />
        {messageInputIsInvalid && <p className='error-text'>*error</p>}
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
}

export default SimpleInput;
