import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = React.createContext();

const ENDPOINT = process.env.REACT_APP_SOCKET_URL;
console.log(ENDPOINT)

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ id, children }) {

  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io(ENDPOINT, 
    { query: { id } })

    setSocket(newSocket);

    return () => newSocket.close();
  }, [id]);


  console.log(socket);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}
