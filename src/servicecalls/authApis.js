export const getContent = async (type, value, token, params) => {
  switch (type) {
    case "userData":
      return value;

    case "userAuth":
      return true;
  }
};
