const axios = require('axios');
const AppError = require('./appError');
const circularJSON = require('circular-json')

const getConfigTokenAdmin = {
  method: 'POST',
  url: 'https://mercadodeenanos.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: 'AbuaVoPP6epR0dp9DWh1oEif4fCH3GiT',
    client_secret:
      'jghCPrUhV0NcJ88ZLXYXNk2Z9Bq_d4A2Ue8Eqo2PfN10NpB1kQ80jivTvnmQ0acp',
    audience: 'https://mercadodeenanos.us.auth0.com/api/v2/',
  }),
};

exports.getAccessTokenAdmin = async () => {
  try {
    const data = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: 'AbuaVoPP6epR0dp9DWh1oEif4fCH3GiT',
      client_secret:
        'jghCPrUhV0NcJ88ZLXYXNk2Z9Bq_d4A2Ue8Eqo2PfN10NpB1kQ80jivTvnmQ0acp',
      audience: 'https://mercadodeenanos.us.auth0.com/api/v2/',
    });
    const response = await axios.post(
      'https://mercadodeenanos.us.auth0.com/oauth/token',
      data,
      { headers: { 'content-type': 'application/x-www-form-urlencoded' } }
    );
    return response;
  } catch (error) {
    return new AppError(error);
  }
};

exports.apiAuth0 = {
  listUsers: async (token) => {
    const response = await axios.get(
      'https://mercadodeenanos.us.auth0.com/api/v2/users',
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return circularJSON.stringify(response);
  },
  blockUser: async (token, id) => {
    return (response = await axios.patch(
      `https://mercadodeenanos.us.auth0.com/api/v2/users/${id}`,
      {
        blocked: true,
      },
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    ));
  },
  searchUsersByEmail: async (token, email) => {
    return (response = await axios.get(
      `https://mercadodeenanos.us.auth0.com/api/v2/users-by-email?email=${email}`,
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    ));
  },
  getUser: async (token, id) => {
    const response = await axios.get(
      `https://mercadodeenanos.us.auth0.com/api/v2/users/${id}`,
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return circularJSON.stringify(response)
  },
  deleteUser: async (token, id) => {
    return (response = await axios.delete(
      `https://mercadodeenanos.us.auth0.com/api/v2/users/${id}`,
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    ));
  },
//   removeRolesFromUser: async (token, id) => {
//     return (response = await axios.delete(
//       `https://mercadodeenanos.us.auth0.com/api/v2/users/${id}/roles`,
//       {
//         headers: {
//           'content-type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     ));
//   },
  getRole: async (token) => {
    const response = await axios.get(`https://mercadodeenanos.us.auth0.com/api/v2/roles`,{
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    return circularJSON.stringify(response)
  },
  assingRolesToAUser: async (token, id, body) => {
    const response = await axios.post(
      `https://mercadodeenanos.us.auth0.com/api/v2/users/${id}/roles`,
      body,
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
          'cache-control': 'no-cache'
        },
      }
    )
    return circularJSON.stringify(response);
  },
  assingPermissionsToUser: async (token, id, body) => {
    const response = await axios.post(
      `https://mercadodeenanos.us.auth0.com/api/v2/users/${id}/permissions`,
      body,
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return circularJSON.stringify(response)
  },
//   removePermissionsFromAUser: async (token, id, arrayOfString) => {
//     const permissions = [];
//     arrayOfString.forEach((e) => {
//       permissions.push({
//         "resource_server_identifier": 'auth',
//         "permission_name": e,
//       });
//     });
//     try {
//         const response = await axios.delete(
//             `https://mercadodeenanos.us.auth0.com/api/v2/users/${id}/permissions`,
//             {
//                 headers: {
//                   'content-type': 'application/json',
//                   "Authorization": `Bearer ${token}`,
//                 },
//               },
//               {
//                 "permissions": [{
//                     "resource_server_identifier": 'auth',
//                     "permission_name": arrayOfString[0],
//                   }]
//               }
           
//           );
//           console.log(response)
//           return response;
//     } catch (error) {
//         console.log(error)
//         return new AppError(error)
//     } 
//},
  getActiveUsersCount: async (token) => {
    return (response = await axios.get(
      `https://mercadodeenanos.us.auth0.com/api/v2/stats/active-users`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    ));
  },
};
