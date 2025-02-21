import Image from "next/image"

export default function Login(){
    return(
        <div>
            <div>
              <div>
              <h1>Welcome Back</h1>
              <p>sign in to continue</p>
              </div>
                <form>
                <div>
                <label for=''>Email Address</label>
                <input type="text" placeholder="Enter your email address"/>
                </div>
                  <div>
                  <label for=''>Password</label>
                  <input type="password" placeholder="Enter Password"/>
                  </div>
                  <a href="#">Forgot Password?</a>
                    <button type="submit">Sign up</button>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
  
                  
                </form>
            </div>
            
            </div>
    )
} 