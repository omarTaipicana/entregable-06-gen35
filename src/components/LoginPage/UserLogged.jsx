const UserLogged = ({ user, setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser();
  };

  return (
    <article className="logued__card">
      <header>
        <img
          className="img__logued"
          src={user.gender === "female" ? "img/female.png" : "img/male.jpg"}
          alt=""
        />
      </header>
      <h2 className="user__logued">
        {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
      </h2>
      <button className="user__logued__btn" onClick={handleLogout}>
        Logout
      </button>
    </article>
  );
};

export default UserLogged;
