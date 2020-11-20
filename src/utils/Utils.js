export const url = "https://newsapi.org/v2/everything?";
export const size = "100";
export const apiKey = "6e702a33a2ab417f8b5d9c1fc144a918";

// const date = new Date()
// export const update = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`;
// export const update = new Date(date).toLocaleString("us",
//  {
//     year: "numeric",
//     month: "numeric",
//     day: "numeric",
//   }
//   );

export const update = new Date().toJSON().slice(0, 10);
