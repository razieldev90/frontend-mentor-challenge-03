

    function setError(error_icon, input_email, msg){
      error_icon.classList.add('active');
      input_email.classList.remove('success');
      input_email.classList.add('error');

      error_icon.classList.add('active');
      input_email.classList.remove('success');
      input_email.classList.add('error');
      msg.classList.remove('success');
    }
    const validateEmail = email => {
      let reg_exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return reg_exp.test(String(email).toLowerCase());
    }
    
    const validateForm = (form) => {
      let msg = document.querySelector('.msg');
      let error_icon = document.querySelector('.icon-error');
      let input_email = form.querySelector('#email');

      if(input_email.value == ''){
        msg.innerHTML = 'Email address required';
        setError(error_icon, input_email, msg);
      } else if(!validateEmail(input_email.value)){
        msg.innerHTML = 'Please provide a valid email';
        setError(error_icon, input_email, msg);
      }else{
        error_icon.classList.remove('active');
        msg.innerHTML = 'The email address seems valid, thank you.';
        msg.classList.add('success');
        input_email.classList.remove('error');
        input_email.classList.add('success');
      }
    }

    const form = document.getElementById('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      validateForm(form);
    });