"use client";

import Link from "next/link";

function Users({ users }) {
  return (
    <ul>
      <h1 className="font-bold text-3xl text-center p-2">Users</h1>
      {users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <li
            key={user.id}
            className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between"
          >
            <div>
              <h5 className="font-bold">
                {user.id}: {user.first_name} {user.last_name}
              </h5>
              <p>email: {user.email}</p>
            </div>
            <img
              src={user.avatar}
              alt={user.first_name}
              className="rounded-full w-20"
            />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Users;
