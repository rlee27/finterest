export const getUserPins = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/pins`,
    method: 'GET',
  });
};

export const getPin = (pinId) => {
  return $.ajax({
    url: `/api/pins/${pinId}`,
    method: 'GET',
  });
};

export const createPin = (userId, formData) => {
  return $.ajax({
    url: `/api/users/${userId}/pins`,
    method: 'POST',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: formData,
  });
};

export const editPin = (pinId, pin) => {
  return $.ajax({
    url: `/api/pins/${pinId}`,
    method: 'PATCH',
    data: { pin },
  });
};

export const destroyPin = (pinId) => {
  return $.ajax({
    url: `/api/pins/${pinId}`,
    method: 'DELETE',
  });
};

export const savePin = (fin) => {
  return $.ajax({
    url: '/api/fins',
    method: 'POST',
    data: { fin },
  });
};
