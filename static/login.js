

    var card=document.getElementById("card");
    function openRegister(){
        card.style.transform = "rotateY(-180deg)";
    }
    function openLogin(){
        card.style.transform = "rotateY(0deg)";
    }
    div.container
    div.card
        div.inner-box#card
            div.card-front
                h2 LOGIN
                form(action="/login", method="post")  
                input(type="email",class="input-box",placeholder="Your Email ID",required)
                input(type="password",class="input-box",placeholder="Password",required)
                button(type="submit",class="submit-btn")
                    |Submit
                input(type="checkbox") 
                span Remember Me
                button(type="button",class="btn",onclick="openRegister()")
                    |I'm New Here
                a(href="") Forget Password
            div.card-back
                h2 REGISTER
                form(action="/login", method="post")  
                input(type="text", class="input-box", name="name", placeholder="Your Name", required)
                input(type="email", class="input-box", name="email", placeholder="Your Email ID", required)
                input(type="password", class="input-box",name="password", placeholder="Password", required)
                button(type="submit",class="submit-btn")
                    |Submit
                input(type="checkbox") 
                span Remember Me
                button(type="button",class="btn",onclick="openLogin()")
                    |I've an account
                a(href="") Forget Password