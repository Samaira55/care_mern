// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function Profile() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     async function fetchUser() {
//       try {
//         const response = await axios.get('/user');
//         setUser(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchUser();
//   }, []);

//   if (!user) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>Hello, {user.displayName}!</h1>
//       <p>Email: {user.email}</p>
//       <img src={user.photoUrl} alt={user.displayName} />
//     </div>
//   );
// }

// export default Profile;
