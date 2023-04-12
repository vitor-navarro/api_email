**translated from portuguese-Brazil to english by google translator

*ATTENTION: I do not recommend using your personal account to send emails, I recommend using a specific account for this

To send emails, you will need a gmail account and your password.
This account can be any but you will have to follow the following steps:

1-Turn on two-factor authentication:
   -Log in to your Gmail account

   -Click on your account icon in the upper right corner of the screen and select "Manage your Google Account"

   -Select the "Security" option from the menu on the left side of the screen

   -Scroll down to the "Sign in to Google" or "How do you sign in to Google" section
   and click "Two-Factor Authentication" or "Two-Step Verification"

   -Follow the on-screen instructions to enable two-factor authentication for your account

2-Create an app password:
   -Log in to your Gmail account

   -Click on your account icon in the upper right corner of the screen and select "Manage your Google Account"

   -Select the "Security" option from the menu on the left side of the screen

   -Scroll down to the "Sign in to Google" section and click on "App Passwords"

   --OR search for app passwords in the search tab

   -Select the "Other (Custom)" app and give the app password a name (eg "Node.js")

   -Click "Generate" to create app password

   -Write down the generated password somewhere safe as you will need it to login to Gmail via Node.js

3-Replace the created values:
It will be necessary to have dotenv installed, if you haven't already installed it, just run npm install in the terminal to perform the standard installation of node
  
   -Create an .env file and put the data that is in .env.example.

   -Put in front of the = of GMAIL_USER by your gmail account that will be used to send emails.

   -Place the password generated in the previous step in front of the = of GMAIL_PASS.

   REMEMBER: Never give this information to anyone, the .env should not go to your github repository