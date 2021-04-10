// import React, {useState, useEffect} from 'react'
// import axios from 'axios';
// const initialState = {
//     user_id: '',
//     username: 'hamza',
//     email : 'example01@gmail.com',
//     password: 'contains at least 6',
//     _id: ''
// }

// function CrudAccounts() {
//     // const state = useContext(GlobalState)
//     // const [user, setUser] = useState(initialState)
//     // const [categories] = state.categoriesAPI.categories
//     // const [images, setImages] = useState(false)
//     // const [loading, setLoading] = useState(false)


//     // const [isAdmin] = state.userAPI.isAdmin
//     // const [token] = state.token

//     // const history = useHistory()
//     // const param = useParams()

//     // const [users] = state.productsAPI.users
//     const [onEdit, setOnEdit] = useState(false)
//     // const [callback, setCallback] = state.productsAPI.callback

// 	const [users, setUsers] = useState(null);

// 	const [username, setUsername] = useState("");
// 	const [email, setEmail] = useState("");
// 	useEffect(() => {
// 		axios
// 			.get("/api/users")
// 			.then((users) => setUsers(users))
// 			.catch((err) => console.log(err));
// 	}, []);

// 	function submitForm() {
// 		if (username === "") {
// 			alert("Please fill the username field");
// 			return;
// 		}
// 		if (email === "") {
// 			alert("Please fill the email field");
// 			return;
// 		}
// 		axios
// 			.post("/api/users", {
// 				username: username,
// 				email: email,
// 			})
// 			.then(function () {
// 				alert("Account created successfully");
// 				window.location.reload();
// 			})
// 			.catch(function () {
// 				alert("Could not creat account. Please try again");
// 			});
// 	}
// 	return (
// 		<>
// 			<h1>My Project</h1>
// 			{users === null ? (
// 				<p>Loading...</p>
// 			) : users.length === 0 ? (
// 				<p>No user available</p>
// 			) : (
// 				<>
// 					<h2>Available Users</h2>
// 					<ol>
// 						{users.map((user, index) => (
// 							<li key={index}>
// 								Name: {user.name} - Email: {user.email}
// 							</li>
// 						))}
// 					</ol>
// 				</>
// 			)}

// 			<form onSubmit={submitForm}>
// 				<input
// 					onChange={(e) => setUsername(e.target.value)}
// 					type="text"
// 					placeholder="Enter your username"
// 				/>
// 				<input
// 					onChange={(e) => setEmail(e.target.value)}
// 					type="text"
// 					placeholder="Enter your email address"
// 				/>
// 				<input type="submit" />
// 			</form>
// 		</>
// 	);
// };

// export default CrudAccounts

