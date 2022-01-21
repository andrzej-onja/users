# Getting Started 

yarn

For configuration and how to setup the send notification flow follow:

### setup your firebase cloud messaging

## use postman
In the next following steps, we’ll be using Postman to send notifications using Firebase’s Cloud Messaging service.

In Postman, create a POST request with the following information:

    Request URL: https://fcm.googleapis.com/fcm/send

    Headers: In the headers of your POST request, you’ll need to have the following keys:

Authorization: key=SERVER_KEY

Content-Type: application/json

Notes: SERVER_KEY can be found under the Cloud Messaging tab in your Firebase settings

    Body: Fill the body of your POST request with the following code:

{
    "notification": {
        "title": "SimiCart",
        "body": "Test push notification",
        "click_action": "http://localhost:3000/",
        "icon": "https://i.imgur.com/5zO5cce.png"
    }
    "to": "USER_TOKEN"
}

Replace USER_TOKEN with the token that you obtained (by clicking on the Click to receive notifications button) in Step 4. Don’t forget to choose Body type as raw and JSON

Now click on Send and you should see a notification popping up i

Notes: These notifications only appear when the app is in the background or minimized.

Congratulations! Your PWA can now send notifications!

## use firebase UI

Inside your firebase console, go to Cloud messaging section of the app
Cloud Messaging

    Click the button Send your first message.
    Enter the notification title and text.
    Select Send test message.
    In the field labeled Add an FCM registration token, enter the registration token you obtained from previous step.
    Click Test


Based on tutorials:

https://levelup.gitconnected.com/show-push-notifications-in-react-449949e98e01

https://www.simicart.com/blog/pwa-push-notifications/ (bit outdated)



