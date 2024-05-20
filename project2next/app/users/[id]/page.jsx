async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}
async function UserPage({ params }) {
  const user = await getUser(params.id);
  return (
    <div className="bg-gray-400 text-black rounded-md mb-3 p-10">
        <img src={user.avatar} alt={user.first_name} className="m-auto my-4 rounded-full w-50"/>
        <h3>{user.id}: {user.first_name} {user.last_name}</h3>
        <p>{user.email}</p>
        
      
    </div>
  );
}

export default UserPage;
