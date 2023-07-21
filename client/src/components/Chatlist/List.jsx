import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { GET_INITIAL_CONTACTS } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect } from "react";
import ChatLIstItem from "./ChatLIstItem";

function List() {

  const [{ userInfo, userContacts,filteredContacts }, dispatch] = useStateProvider();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const {
          data: { users, onlineUsers },
        } = await axios.get(`${GET_INITIAL_CONTACTS}/${userInfo.id}`);

        dispatch({ type: reducerCases.SET_ONLINE_USERS, onlineUsers });
        dispatch({ type: reducerCases.SET_USER_CONTACTS, userContacts: users });

      } catch (error) {
        console.log(error);
      }
    };
    if(userInfo?.id){
      getContacts();
    }
  }, [userInfo]);

  return (
    <div className="flex-auto overflow-auto bg-search-input-container-background max-h-full custom-scrollbar">
      {
        filteredContacts && filteredContacts.length>0 ?
        (
          filteredContacts.map((contact) =>
          <ChatLIstItem data={contact} key={contact.id} />)
        ):
        (
          userContacts.map((contact) =>
          <ChatLIstItem data={contact} key={contact.id} />)
        )
      }
    </div>
  );
}

export default List;