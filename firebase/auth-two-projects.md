#### How to use firebase authentication in an other firebase project
#### https://stackoverflow.com/questions/41565494/how-to-use-firebase-authentication-in-an-other-firebase-project

        "Node": {
            "$field": {
                ".read": root.child('Projects/' + data.child('project').val() + '/Members/' + auth.uid).exists()",
                ".write": //same here
            }
        }
