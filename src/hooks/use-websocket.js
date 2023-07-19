import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { CookieService } from '../utils/cookie-service';

export const useWebSocket = ({ url, useToken = false, querykeys }) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const createWebSocket = (token) => {
      const websocket = token ? new WebSocket(`${url}?token=${token}`) : new WebSocket(`${url}`);

      websocket.onopen = (evt) => {
        console.log('ws connected...');
      };

      websocket.onmessage = (evt) => {
        const data = JSON.parse(evt.data);
        queryClient.setQueryData(querykeys, data);
      };

      return websocket;
    };

    const websocket = useToken
      ? createWebSocket(CookieService.getAccessToken())
      : createWebSocket();

    return () => {
      websocket.close();
    };
  }, [queryClient, url, querykeys, useToken]);
};
