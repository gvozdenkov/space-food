import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { CookieService } from '../utils/cookie-service';

export const useWebSocket = ({ url, querykeys }) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const accessToken = CookieService.getAccessToken();
    const websocket = new WebSocket(`${url}?token=${accessToken}`);

    websocket.onopen = (evt) => {
      console.log('ws connected...');
    };

    websocket.onmessage = (evt) => {
      const data = JSON.parse(evt.data);

      queryClient.setQueryData(querykeys, data);
    };

    return () => {
      websocket.close(1000);
    };
  }, [queryClient, url, querykeys]);
};
