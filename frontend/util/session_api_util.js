export const signup = (user) => {
  return $.ajax({
    url: 'api/users',
    method: 'POST',
    data: { user },
  });
};

export const login = (user) => {
  return $.ajax({
    url: 'api/sessions',
    method: 'POST',
    data: { user },
  });
};

export const logout = () => {
  return $.ajax({
    url: 'api/sessions',
    method: 'DELETE',
  });
};

export const submit = (user) => {
  return $.ajax({
    url: 'api/users/submit',
    method: 'POST',
    data: { user }
  });
};
