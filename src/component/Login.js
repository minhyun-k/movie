import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <div className='login_box'>
            <h2></h2>
            <form className='login_form'>
                <div className='login_input'>
                    <input type='email' className='login_email'>email</input>
                    <input type='password' className='login_pass'>password</input>
                </div>
                <div className='login_check'>
                  <checkbox>정보저장</checkbox>
                  <button className='login_help'>도움이 필요?</button>
                </div>
            </form>

            <p>회원이 아닌가요? <span>지금 가입하세요.</span></p>
            <p>text</p>
        </div>
    </div>
  )
}

export default Login