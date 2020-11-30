export const BASE_URL = "http://api.wolkov.students.nomoreparties.co";

export const register = async (email, password, name) => {
   return fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    })
    .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .catch((err) => {
      return Promise.reject(err);
      });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        return data;
      }
    })
    .catch((err) => {
    return Promise.reject(err);
    });
};

// export const createArticles = (
//     token,
//     keyword,
//     title,
//     text,
//     date,
//     source,
//     link,
//     image
//   ) => {
//     return fetch(`${BASE_URL}/articles`, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         token,
//         keyword,
//         title,
//         text,
//         date,
//         source,
//         link,
//         image,
//       }),
//     })
    
//     .then((response) => {


//         if (response.ok) {
//           return response.json();
//         } 
//         else {
//           return Promise.reject(response.json());
//         }

//       })
//       .then((data) => data)

//       .catch((err) => {

//       return Promise.reject(err);

//       });
//   };





export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};







export const getArticles = (token) => {
  return fetch(`${BASE_URL}/articles`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};




export const createArticles = (
  token,
  keyword,
  title,
  text,
  date,
  source,
  link,
  image
) => {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      token,
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
    }),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const deleteArticles = (token, articleId) => {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};
