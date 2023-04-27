import app from "./app";
import { getAllUsersOrdered } from "./endpoint/getAllUsersOrdered";
import { getUsersFilterByName } from "./endpoint/getUsersFilterByName";
import { getUsersFilterByType } from './endpoint/getUsersFilterByType';
import { getUsersByPages } from './endpoint/getUsersByPages';
import { getUsersFilterAndOrderAndPage } from "./endpoint/getUsersFilterAndOrderAndPage";

app.get("/user", getUsersFilterByName );
app.get("/user/fullsearch", getUsersFilterAndOrderAndPage);
app.get("/user/search", getAllUsersOrdered);
app.get("/user/page", getUsersByPages);
app.get("/user/:type", getUsersFilterByType);