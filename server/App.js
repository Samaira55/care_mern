

// const useState = require('useState');
// const useEffect = require('useEffect');
const express = require('express');
const session = require('express-session');
const passport  = require('passport');
 require('./auth');

const App = express();
function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
  }

// App.set("view engine", "js")
App.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
App.use(passport.initialize());
App.use(passport.session());
// App.use(
// 	cookieSession({
// 		name: "session",
// 		keys: ["cyberwolve"],
// 		maxAge: 24 * 60 * 60 * 100,
// 	})
// );

App.get('/',(req,res)=>{
    res.send('<a href="/auth/google">Authenticate with Google</a>')
})


App.get('/auth/google',
passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

App.get( '/auth/google/callback',
passport.authenticate( 'google', {
  successRedirect: '/protected',
  failureRedirect: '/auth/google/failure'
})
);


    App.get('/protected',isLoggedIn, (req, res)=>{
        res.send(`Hello ${req.user.displayName}`);
    })

    // useEffect(() => {
    //   async function fetchUser() {
    //     try {
    //       const response = await axios.get('/user');
    //       console.log(response.data); // <-- Add this line
    //       setUser(response.data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    
    //   fetchUser();
    // }, []);
    
 
//   App.get('/auth/failure',(req,res)=>{
//     res.send('something went wrong')
//   })


App.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Goodbye!');
  });
  
  App.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
  });
  
// Assume that the user data is stored in the req.user object
// after successful authentication using passport

// App.get('/user', (req, res) => {
//   if (!req.user) {
//     // Return a 401 Unauthorized status code if the user isn't authenticated
//     return res.sendStatus(401);
//   }

//   // Extract the user data that you want to return in the response
//   const { displayName, email, photoUrl } = req.user;

//   // Return the user data in JSON format
//   res.json({ displayName, email, photoUrl });
// });

App.listen(5000,()=>{
    console.log("app is running on port 5000")
})