const UserProfile = () => {
  return (
    <div className="max-w-xs md:max-w-sm p-4 md:p-8 mx-auto bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 object-cover mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h2 className="mt-4 text-lg md:text-xl font-semibold text-center hover:text-blue-500 transition-colors duration-300">
        Jane Doe
      </h2>
      <p className="text-sm md:text-base text-center text-gray-600">
        Frontend Developer based in Lagos.
      </p>
    </div>
  );
};

export default UserProfile;
