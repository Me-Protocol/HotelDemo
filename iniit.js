window.onload = function () {
  localStorage.setItem("apiKey", "y3krjw44aq7kkwixupd0j");
  const email = localStorage.getItem("email");
  if (email) {
    window.setCustomerData({
      email,
      id: `${Date.now()}`,
      firstName: email,
      lastName: "Last Name",
    });
  }
};
