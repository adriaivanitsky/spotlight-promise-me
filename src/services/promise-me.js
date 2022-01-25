/**
 * TODO: Write a fetch request to an API url using .then()
 * TODO: Write a fetch request using async/await
 */

export const fetchPinballAsync = async () => {
  const resp = await fetch('https://ponball.herokuapp.com/api/v1/machines');
  const data = await resp.json();
  return data;
};

export const fetchPinballThen = () => {
  const resp = fetch('https://ponball.herokuapp.com/api/v1/machines').then(
    (data) => data.json()
  );
  return resp;
};
