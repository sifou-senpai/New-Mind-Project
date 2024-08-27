<template>
    <div class="sign-in-up-container">
        <div class="text3d-container">
            <h2 id="text3d">NEW MIND</h2>
        </div>

        <div class="container" ref="container">
            <!-- Sign Up Form -->
            <div class="form-container sign-up-container" v-if="!isSignIn">
                <form @submit.prevent="handleSignUp">
                    <h1>Create Account</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-google"></i></a>
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-whatsapp"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input v-model="signUpForm.fullName" type="text" placeholder="Full Name" required />
                    <input v-model="signUpForm.email" type="email" placeholder="Email" required />
                    <label for="dob">Date of Birth:</label>
                    <input v-model="signUpForm.dob" type="date" id="dob" name="dob" required />
                    <label for="phone">Phone Number:</label>
                    <div class="phone-container">
                        <select v-model="signUpForm.countryCode" id="country-code" name="country-code" required>
                            <option value="+213">🇩🇿 +213 Algeria</option>
                            <option value="+212">🇲🇦 +212 Morocco</option>
                            <option value="+216">🇹🇳 +216 Tunisia</option>
                            <option value="+20">🇪🇬 +20 Egypt</option>
                            <option value="+970">🇵🇸 +970 Palestine</option>
                            <option value="+966">🇸🇦 +966 Saudi Arabia</option>
                            <option value="+34">🇪🇸 +34 Spain</option>
                            <option value="+1">🇺🇸 +1 United States</option>
                            <option value="+44">🇬🇧 +44 United Kingdom</option>
                        </select>
                        <input v-model="signUpForm.phone" type="tel" id="phone" name="phone" placeholder="Phone Number"
                            required />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>

            <!-- Sign In Form -->
            <div class="form-container sign-in-container" v-if="isSignIn">
                <form @submit.prevent="handleSignIn">
                    <h1>Sign In</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-google"></i></a>
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-whatsapp"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input v-model="signInForm.email" type="email" placeholder="Email" required />
                    <input v-model="signInForm.password" type="password" placeholder="Password" required />
                    <router-link to="/forgot-password">Forgot your password?</router-link>
                    <button type="submit">Sign In</button>
                </form>
            </div>

            <!-- Overlay -->
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" @click="showSignIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <button class="ghost" @click="showSignUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSignIn: false,
            signInForm: {
                email: '',
                password: ''
            },
            signUpForm: {
                fullName: '',
                email: '',
                dob: '',
                countryCode: '+1',
                phone: ''
            }
        };
    },
    methods: {
        showSignIn() {
            this.isSignIn = true;
            this.$refs.container.classList.remove("right-panel-active");
        },
        showSignUp() {
            this.isSignIn = false;
            this.$refs.container.classList.add("right-panel-active");
        },
        handleSignIn() {
            console.log('Sign In:', this.signInForm);
        },
        handleSignUp() {
            console.log('Sign Up:', this.signUpForm);
        }
    },
    mounted() {
        if (this.isSignIn) {
            this.$refs.container.classList.remove("right-panel-active");
        } else {
            this.$refs.container.classList.add("right-panel-active");
        }
    }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css");

* {
    box-sizing: border-box;
}

body {
    background:
        url('../images/red-background.jpg') no-repeat center center fixed,
        linear-gradient(135deg, #F00000, #600500);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    height: 100vh;
    margin: 0;
    transition: background-color 0.6s ease-in-out;
    overflow: hidden;
}


h1 {
    font-weight: bold;
    margin: 0;
}

h2 {
    width: 100%;
    margin: 0 auto 0 auto;
    font-family: 'Lato', sans-serif;
    line-height: 280px;
    font-size: 13.5rem;
    padding: 80px 50px;
    text-align: center;
    text-transform: uppercase;
    text-rendering: optimizeLegibility;
}

h2::before {
    content: "";
    width: 100%;
    height: 750px;
    position: absolute;
    top: -200px;
    left: 10px;
    transform: rotate(55deg);
    background: rgba(206, 188, 155, .7);
    background: -moz-linear-gradient(left, rgba(206, 188, 155, .7) 0%, rgba(42, 31, 25, 0) 65%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(206, 188, 155, .7)), color-stop(65%, rgba(42, 31, 25, 0)));
    background: -webkit-linear-gradient(left, rgba(206, 188, 155, .7) 0%, rgba(42, 31, 25, 0) 65%);
    background: -o-linear-gradient(left, rgba(206, 188, 155, .7) 0%, rgba(42, 31, 25, 0) 65%);
    background: -ms-linear-gradient(left, rgba(206, 188, 155, .7) 0%, rgba(42, 31, 25, 0) 65%);
    background: linear-gradient(to right, rgba(206, 188, 155, .7) 0%, rgba(42, 31, 25, 0) 65%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#cebc9b', endColorstr='#2a1f19', GradientType=0.7);
}

#text3d {
    color: #70869d;
    letter-spacing: .15em;
    position: absolute;
    top: 12%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14vw;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.1);
    text-shadow:
        2px 2px 0 #000,
        4px 4px 0 #333,
        6px 6px 0 #666;
    z-index: -1;
    white-space: nowrap;
    text-shadow:

        -1px -1px 1px #efede3,
        0px 1px 0 #2e2e2e,
        0px 2px 0 #2c2c2c,
        0px 3px 0 #2a2a2a,
        0px 4px 0 #282828,
        0px 5px 0 #262626,
        0px 6px 0 #242424,
        0px 7px 0 #222,
        0px 8px 0 #202020,
        0px 9px 0 #1e1e1e,
        0px 10px 0 #1c1c1c,
        0px 11px 0 #1a1a1a,
        0px 12px 0 #181818,
        0px 13px 0 #161616,
        0px 14px 0 #141414,
        0px 15px 0 #121212,
        2px 20px 5px rgba(0, 0, 0, 0.9),
        5px 23px 5px rgba(0, 0, 0, 0.3),
        8px 27px 8px rgba(0, 0, 0, 0.5),
        8px 28px 35px rgba(0, 0, 0, 0.9);
}

p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
}

span {
    font-size: 12px;
}

a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
}

button {
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    margin: 2%;
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
}

button.ghost {
    background-color: transparent;
    border-color: #ffffff;
}

form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
}

input,
select {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
}

label {
    background-color: transparent;
    padding: 0;
    margin: 8px 0 0;
    text-align: left;
    width: 100%;
    font-size: 0.9em;
    color: #333;
}

.container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 520px;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in-container {
    left: 0;
    width: 50%;
    height: 100%;
    z-index: 2;
    max-height: 650px;
}

.container.right-panel-active .sign-in-container {
    transform: translateX(100%);
}

.sign-up-container {
    left: 0;
    width: 50%;
    height: 100%;
    opacity: 0;
    z-index: 1;
}

.container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
}

@keyframes show {

    0%,
    49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%,
    100% {
        opacity: 1;
        z-index: 5;
    }
}

.phone-container {
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
}


select#country-code {
    background-color: #eee;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;
    width: 60px;
    height: 40px;
    appearance: none;
    background-image: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

select#country-code::-ms-expand {
    display: none;
}

input#phone {
    background-color: #eee;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 12px 15px;
    margin: 0;
    flex-grow: 1;
}

.phone-container {
    max-width: 500px;
}

.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
}

.container.right-panel-active .overlay-container {
    transform: translateX(-100%);
}

.overlay {
    background: linear-gradient(135deg, #F00000, #600500);
    ;
    background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.overlay-left {
    transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
    transform: translateX(0);
}

.overlay-right {
    right: 0;
    transform: translateX(0);
}

.container.right-panel-active .overlay-right {
    transform: translateX(20%);
}

.social-container {
    margin: 20px 0;
}

.social-container a {
    border: 1px solid #dddddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
}
</style>