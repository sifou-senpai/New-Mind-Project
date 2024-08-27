<template>
    <div class="container" id="forgot-password-container">
        <div class="form-container forgot-password-container">
            <form id="forgot-password-form" @submit.prevent="handleSubmit">
                <h1>Forgot Password</h1>
                <p>Enter your email address to reset your password.</p>
                <input v-model="email" type="email" placeholder="Email" required />
                <button type="submit">Reset Password</button>
                <p>or</p>
                <div class="social-container">
                    <a href="#" class="social" id="google-login">
                        <i class="fab fa-google">&nbsp;&nbsp;&nbsp;&nbsp;</i> Sign in with Google
                    </a>
                </div>
                <router-link to="/sign-in">Back to Sign In</router-link>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: ''
        };
    },
    methods: {
        handleSubmit() {
            console.log('Email submitted:', this.email);
        }
    }
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css");

#forgot-password-container {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    padding: 50px;
    text-align: center;
}

.forgot-password-container {
    width: 100%;
    padding: 20px;
    margin-left: -13%;
    margin-right: -13%;
}

#forgot-password-form h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

#forgot-password-form p {
    font-size: 14px;
    margin-bottom: 20px;
}

#forgot-password-form button {
    width: 100%;
    padding: 10px;
    background-color: #ff4b2b;
    border: none;
    color: white;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
}

#forgot-password-form button:hover {
    background-color: #ff416c;
}

#google-login {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100%;
    color: #fff;
    background-color: #dd4b39;
    border-radius: 5px;
    text-decoration: none;
    font-size: 14px;
    margin-top: 20px;
}

#google-login:hover {
    background-color: #c23321;
}
</style>