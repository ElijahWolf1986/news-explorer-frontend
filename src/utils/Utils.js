export const url = "https://newsapi.org/v2/everything?";
export const size = "100";
// export const apiKey = "6e702a33a2ab417f8b5d9c1fc144a918";
export const apiKey = "c155ca4c2efc4ebeb7de7df33e6a82c2";
const dateWeekAgo = Date.now() - 604800000; //Дата недельной давности от настоящего момента, как по ТЗ
export const update = new Date(dateWeekAgo).toJSON().slice(0, 10);
